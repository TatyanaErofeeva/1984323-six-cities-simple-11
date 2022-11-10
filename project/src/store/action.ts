import {createAction} from '@reduxjs/toolkit';
import { Offers } from '../types/offer';

export const cityChange = createAction('filter/cityChange', (value: string) => ({
  payload: value
}));

export const offersListLoad = createAction('load/offersListLoad', (value: Offers) => ({
  payload: value
}));

export const focusCardId = createAction('card/cardIdFocused', (value?: number) => ({
  payload: value
}));

export const sortCards = createAction('sort/sortCardsList', (value: string) => ({
  payload: value
}));
