import {createAction} from '@reduxjs/toolkit';
import { Offers } from '../types/offer';

export const cityChange = createAction('filter/cityChange', (value) => ({
  payload: value as string
}));

export const offersListLoad = createAction('load/offersListLoad', (value) => ({
  payload: value as undefined| Offers
}));

export const focusCardId = createAction('card/cardIdFocused', (value) => ({
  payload: value as number | undefined
}));

