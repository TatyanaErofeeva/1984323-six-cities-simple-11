import MainHeader from '../components/main-header';
import NotFound from './not-found';
import { useParams } from 'react-router-dom';
import CardsList from '../components/card-list';
import { CardPage} from '../const';
import {formatRatingToStars} from '../util';
import {HostProStatus} from '../components/review-card';
import {Map} from '../components/map';
import {useAppSelector} from '../hooks/index';
import {LoadingScreen} from '../pages/loading-screen';
import { useEffect } from 'react';
import { useAppDispatch } from '../hooks/index';
import {fetchOfferAction, fetchCommentsListAction, fetchNearbyOffersAction} from '../store/api-actions';
import { PropertyReview } from '../components/property-review';

const setPropertyStatus = (): JSX.Element => (
  <div className="property__mark">
    <span>Premium</span>
  </div>
);

function Property(): JSX.Element {
  const {id} = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchOfferAction(Number(id)));
    dispatch(fetchCommentsListAction(Number(id)));
    dispatch(fetchNearbyOffersAction(Number(id)));
  }, [dispatch, id]);

  const offer = useAppSelector((state) => state.offer);
  const nearbyOffers = useAppSelector((state) => state.nearbyOffers);
  const isDataLoading = useAppSelector((state) => state.isDataLoading);

  if (isDataLoading || !offer) {
    return (
      <LoadingScreen />
    );
  }

  if (!offer) {
    return (<NotFound />);
  }

  const {
    bedrooms,
    description,
    goods,
    host,
    images,
    isPremium,
    maxAdults,
    price,
    rating,
    title,
    type
  } = offer;

  return(
    <>
      < MainHeader/>
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {
                images.map((img) => (
                  <div key={img} className="property__image-wrapper">
                    <img className="property__image" src={img} alt={type} />
                  </div>
                ))
              }
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium ? setPropertyStatus() : ''}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{ width: formatRatingToStars(rating) }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {
                    goods.map((item) => (
                      <li key={item} className="property__inside-item">
                        {item}
                      </li>))
                  }
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div
                    className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper"
                  >
                    <img
                      className="property__avatar user__avatar"
                      src={host.avatarUrl}
                      width="74"
                      height="74"
                      alt="Host avatar"
                    />
                  </div>
                  <span className="property__user-name">
                    {host.name}
                  </span>
                  {host.isPro && <HostProStatus/>}
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {description}
                  </p>
                </div>
              </div>
              <PropertyReview OfferId={Number(id)}/>
            </div>
          </div>
          <Map
            classMap={CardPage.PropertyPageMap}
            city={offer.city}
            points={nearbyOffers}
            selectedPointId = {offer.id}
          />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <CardsList offers = {nearbyOffers} className={CardPage.PropertyPage}/>
          </section>
        </div>
      </main>
    </>
  );
}

export default Property;
