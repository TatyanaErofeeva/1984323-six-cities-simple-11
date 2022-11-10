import {createReducer} from '@reduxjs/toolkit';
import { cityChange, offersListLoad, focusCardId } from './action';
import { Offers } from '../types/offer';
import { PayloadAction } from '@reduxjs/toolkit/dist/createAction';

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
    .addCase(cityChange, (state, action: PayloadAction<string>) => {
      state.city = action.payload;
    })
    .addCase(offersListLoad, (state, action: PayloadAction<Offers>) => {
      state.offersList = action.payload;
    })
    .addCase(focusCardId, (state, action: PayloadAction<number>) => {
      state.selectedOfferId = action.payload;
    });
});

export { reducer};
