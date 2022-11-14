import {createAction} from '@reduxjs/toolkit';
import { Offers } from '../types/offer';
import {AuthorizationStatus} from '../const';

export const cityChange = createAction('filter/cityChange', (value: string) => ({
  payload: value
}));

export const offersListLoad = createAction('load/offersListLoad', (value: Offers) => ({
  payload: value
}));

export const setOffersListLoadingStatus = createAction<boolean>('data/setOffersListLoadingStatus');

export const focusCardId = createAction('card/cardIdFocused', (value?: number) => ({
  payload: value
}));

export const sortCards = createAction('sort/sortCardsList', (value: string) => ({
  payload: value
}));

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setError = createAction<string | null>('load/setError');
