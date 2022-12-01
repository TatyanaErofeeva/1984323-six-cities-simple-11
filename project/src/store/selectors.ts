import {NameSpace, LoaderName, CitiesList} from '../const';
import {State} from '../types/state';
import { Offers, Offer, OfferCity } from '../types/offer';
import { Reviews } from '../types/review';
import { createSelector } from 'reselect';
import { getSortedCards } from '../utils/util';

export const getOffers = (state: State): Offers | [] => state[NameSpace.DataOffers].offersList;
export const getOffersLoadingStatus = (state: State): boolean => state[NameSpace.DataOffers].loaders[LoaderName.OffersLoad];


export const getNearbyOffers = (state: State): Offers | [] => state[NameSpace.DataNearbyOffers].nearbyOffers;
export const getNearbyOffersLoadingStatus = (state: State): boolean => state[NameSpace.DataNearbyOffers].loaders[LoaderName.NearbyOffersLoad];

export const getOffer = (state: State): Offer | undefined => state[NameSpace.DataOffer].offer;
export const getOfferLoadingStatus = (state: State): boolean => state[NameSpace.DataOffer].loaders[LoaderName.OfferLoad];
export const getOfferLoadingError = (state: State): boolean => state[NameSpace.DataOffer].isOfferLoadedError;

export const getComments = (state: State): Reviews | [] => state[NameSpace.DataComments].commentsList;
export const getComentsLoadingStatus = (state: State): boolean => state[NameSpace.DataComments].loaders[LoaderName.CommentsLoad];
export const getComentPostStatus = (state: State): boolean => state[NameSpace.DataComments].loaders[LoaderName.CommentPost];

export const getCity = (state: State): OfferCity => {
  const currentCityName = state[NameSpace.App].city;
  const currentCity = CitiesList.find((value) => value.name === currentCityName) || CitiesList[0];
  return currentCity;
};
export const getSelectedOfferId = (state: State): number | undefined => state[NameSpace.App].focusCardId;
export const getSortType = (state: State): string => state[NameSpace.App].sortType;


export const selectCurrentOffers = createSelector(
  [getCity, getSortType, getOffers],
  (city: OfferCity, sortType: string, offersList: Offers | []) => {
    const filteredOffersByCity = offersList.filter((offer) => offer.city.name === city.name);
    return getSortedCards(filteredOffersByCity, sortType);
  }
);

export const getAuthorizationStatus = (state: State) => state[NameSpace.User].authorizationStatus;
export const getUserEmail = (state: State) => state[NameSpace.User].email;
export const getCommentsOfferLoading = (state: State): boolean => state[NameSpace.DataComments].loaders[LoaderName.CommentsLoad] || state[NameSpace.DataOffer].loaders[LoaderName.OfferLoad];
