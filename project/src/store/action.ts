import {createAction} from '@reduxjs/toolkit';

export const cityChange = createAction('filter/cityChange', (value) => ({
  payload: value as string
}));

export const offersListLoad = createAction('load/offersListLoad', (value) => ({
  payload: value
}));

export const cardIdFocused = createAction('card/cardIdFocused', (value) => ({
  payload: value
}));

