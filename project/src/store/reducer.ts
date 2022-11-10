import {createReducer} from '@reduxjs/toolkit';
import { cityChange, offersListLoad, focusCardId } from './action';
import { Offers } from '../types/offer';

type InitialState = {
  city: string;
  offersList: Offers | undefined;
  selectedOfferId: number | undefined;
};

const initialState: InitialState = {
  city: 'Paris',
  offersList: undefined,
  selectedOfferId: undefined
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(cityChange, (state, action) => {
      state.city = action.payload;
    })
    .addCase(offersListLoad, (state, action) => {
      state.offersList = action.payload;
    })
    .addCase(focusCardId, (state, action) => {
      state.selectedOfferId = action.payload;
    });
});

export { reducer};
