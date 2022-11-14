import {createReducer} from '@reduxjs/toolkit';
import { cityChange, offersListLoad, focusCardId, sortCards, requireAuthorization, setError, setOffersListLoadingStatus} from './action';
import { Offers } from '../types/offer';
import { PayloadAction } from '@reduxjs/toolkit/dist/createAction';
import {AuthorizationStatus} from '../const';

type InitialState = {
  city: string;
  offersList: Offers;
  selectedOfferId: number | undefined;
  sortType: string;
  authorizationStatus: AuthorizationStatus;
  error: string | null;
  isOffersListLoaded: boolean;
};

const initialState: InitialState = {
  city: 'Paris',
  offersList: [],
  selectedOfferId: undefined,
  sortType: 'Popular',
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
  isOffersListLoaded: false,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(cityChange, (state, action: PayloadAction<string>) => {
      state.city = action.payload;
    })
    .addCase(offersListLoad, (state, action: PayloadAction<Offers>) => {
      state.offersList = action.payload;
    })
    .addCase(setOffersListLoadingStatus, (state, action: PayloadAction<boolean>) => {
      state.isOffersListLoaded = action.payload;
    })
    .addCase(focusCardId, (state, action: PayloadAction<number|undefined>) => {
      state.selectedOfferId = action.payload;
    })
    .addCase(sortCards, (state, action: PayloadAction<string>) => {
      state.sortType = action.payload;
    })
    .addCase(requireAuthorization, (state, action: PayloadAction<AuthorizationStatus>) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    });
});

export { reducer};
