import CardsList from '../../components/card-list';
import MainHeader from '../../components/main-header';
import { Offers } from '../../types/offer';
import {Map} from '../../components/map';
import {CardPage, CitiesList } from '../../const';
import CityList from '../../components/city-list';
import { useAppDispatch, useAppSelector } from '../../hooks/index';
import { cityChange } from '../../store/action';


type MainPageProps = {
  offers: Offers;
}

function MainPage({offers}: MainPageProps): JSX.Element {
  const currentCityName = useAppSelector((state) => state.city);
  const selectedOfferId = useAppSelector((state) => state.selectedOfferId);
  const offersByFilteredCity = offers ? offers.filter((offer) => offer.city.name === currentCityName) : [];
  const dispatch = useAppDispatch();
  const onCityChageHandler = (city: string) => {
    dispatch(cityChange(city));
  };

  return (
    <>
      < MainHeader/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CityList selectedCity={currentCityName} onCityChange={onCityChageHandler} offers={offers}/>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offersByFilteredCity.length} places to stay in {currentCityName}</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
              Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>
              <CardsList offers = {offersByFilteredCity} className={CardPage.MainPage}/>
            </section>
            <div className="cities__right-section">
              <Map classMap={CardPage.MainPage} city={CitiesList.find((city) => city.name === currentCityName) || offers[0].city} points={offersByFilteredCity} selectedPointId = {selectedOfferId}/>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default MainPage;


