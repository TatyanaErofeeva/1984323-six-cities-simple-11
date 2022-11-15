import { Offers } from './types/offer';
import { OffersTypesOfSort } from './const';
const STARS_MAX = 5;

const formatRatingToStars = (rating: number): string => `${Math.round((rating * 100 / STARS_MAX))}%`;

const ucFirstLetter = (string: string) => string.charAt(0).toUpperCase() + string.slice(1);

const getSortedCards = (offers: Offers, sortType:string): Offers => {
  switch (sortType) {
    case OffersTypesOfSort.Popular:
      return offers;
    case OffersTypesOfSort.PriceToHigh:
      return offers?.sort((offerB, offerA) => offerB.price - offerA.price);
    case OffersTypesOfSort.PriceToLow:
      return offers?.sort((offerB, offerA) => offerA.price - offerB.price);
    case OffersTypesOfSort.TopRatedFirst:
      return offers?.sort((offerB, offerA) => offerA.rating - offerB.rating);
  }
  return offers;
};

export {formatRatingToStars, ucFirstLetter, getSortedCards, STARS_MAX};
