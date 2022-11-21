import {createAction} from '@reduxjs/toolkit';
import { Offers, Offer } from '../types/offer';
import { ReviewComment, Reviews } from '../types/review';
import {AppRoute, AuthorizationStatus, OffersTypesOfSort} from '../const';

export const cityChange = createAction('filter/cityChange', (value: string) => ({
  payload: value
}));

export const offersListLoad = createAction('load/offersListLoad', (value: Offers) => ({
  payload: value
}));

export const offerLoad = createAction('load/offerLoad', (value: Offer) => ({
  payload: value
}));

export const setOfferLoadingError = createAction<boolean>('data/setOffersLoadingError');

export const setDatatLoadingStatus = createAction<boolean>('data/setOffersListLoadingStatus');

export const commentsListLoad = createAction('load/commentsListLoad', (value: Reviews) => ({
  payload: value
}));

export const commentPost = createAction('comment/post', (value: ReviewComment) => ({
  payload: value
}));

export const nearbyOffersLoad = createAction('load/nearbyOffersLoad', (value: Offers) => ({
  payload: value
}));

export const focusCardId = createAction('card/cardIdFocused', (value?: number) => ({
  payload: value
}));

export const sortCards = createAction('sort/sortCardsList', (value: OffersTypesOfSort) => ({
  payload: value
}));

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setAuthStatus = createAction<boolean>('user/setAuthStatus');

export const redirectToAnotherRoute = createAction<AppRoute>('login/redirectToAnotherRoute');

