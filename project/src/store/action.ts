import {createAction} from '@reduxjs/toolkit';
import {AppRoute} from '../const';

export const setOfferLoadingError = createAction<boolean>('data/setOffersLoadingError');

export const setAuthStatus = createAction<boolean>('user/setAuthStatus');

export const redirectToAnotherRoute = createAction<AppRoute>('login/redirectToAnotherRoute');

export const focusCardId = createAction('card/cardIdFocused', (value?: number) => ({
  payload: value
}));

export const setLoaderState = createAction('state/setLoaderState', (value:[loader:string, state:boolean]) => ({
  payload: value
}));

