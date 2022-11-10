import {createReducer} from '@reduxjs/toolkit';
import { cityChange, offersListLoad, focusCardId, sortCards } from './action';
import { Offers } from '../types/offer';
import { PayloadAction } from '@reduxjs/toolkit/dist/createAction';

type InitialState = {
  city: string;
  offersList: Offers | undefined;
  selectedOfferId: number | undefined;
  sortType: string;
};

const initialState: InitialState = {
  city: 'Paris',
  offersList: undefined,
  selectedOfferId: undefined,
  sortType: 'Popular',
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(cityChange, (state, action: PayloadAction<string>) => {
      state.city = action.payload;
    })
    .addCase(offersListLoad, (state, action: PayloadAction<Offers>) => {
      state.offersList = action.payload;
    })
    .addCase(focusCardId, (state, action: PayloadAction<number|undefined>) => {
      state.selectedOfferId = action.payload;
    })
    .addCase(sortCards, (state, action: PayloadAction<string>) => {
      state.sortType = action.payload;
    });
});

export { reducer};
