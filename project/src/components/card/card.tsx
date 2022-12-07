import { HTMLAttributes } from 'react';
import { Offer } from '../../types/offer';
import { Link } from 'react-router-dom';
import { generatePath } from 'react-router';
import { AppRoute } from '../../const';
import {formatRatingToStars, ucFirstLetter} from '../../utils/util';
import { useAppDispatch} from '../../hooks/index';
import {focusCardId} from '../../store/app-process/app-process';
type CardProps = {
  offer: Offer;
}
& Pick < HTMLAttributes<HTMLDivElement>, 'className'>
& Pick < HTMLAttributes<HTMLDivElement>, 'onMouseOver' | 'onMouseLeave'>

function CardInList ({offer, className,onMouseOver, onMouseLeave}: CardProps): JSX.Element {
  const dispatch = useAppDispatch();

  return(
    <article
      onMouseOver={() => dispatch(focusCardId(offer.id))}
      onMouseLeave={() => dispatch(focusCardId())}
      className={`${className ?? ''}__card place-card`}
    >
      {offer.isPremium ?
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
        : ''}
      <div className={`${className ?? ''}__image-wrapper place-card__image-wrapper`}>
        <Link
          to={`/offer/${offer.id}`}
          data-testid="link-card__image"
        >
          <img
            className="place-card__image"
            src={offer.previewImage}
            width="260"
            height="200"
            alt="Place"
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">
              &euro;{offer.price}
            </b>
            <span className="place-card__price-text">
                &#47;&nbsp;night
            </span>
          </div>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span
              style={{
                width: formatRatingToStars(Math.round(offer.rating))
              }}
            >
            </span>
            <span className="visually-hidden">
            Rating
            </span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link
            to={generatePath(AppRoute.Property, {id: String(offer.id)})}
            data-testid="link-card__title"
          >
            {offer.title}
          </Link>
        </h2>
        <p className="place-card__type">
          {ucFirstLetter(offer.type)}
        </p>
      </div>
    </article>
  );
}
export default CardInList;
