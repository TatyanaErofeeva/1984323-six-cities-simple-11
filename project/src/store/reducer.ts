import {createReducer} from '@reduxjs/toolkit';
import { cityChange, offersListLoad, focusCardId, sortCards, requireAuthorization, setOffersListLoadingStatus, setAuthStatus} from './action';
import { Offers } from '../types/offer';
import { PayloadAction } from '@reduxjs/toolkit/dist/createAction';
import {AuthorizationStatus, OffersTypesOfSort} from '../const';

type InitialState = {
  city: string;
  offersList: Offers;
  selectedOfferId: number | undefined;
  sortType: OffersTypesOfSort;
  authorizationStatus: AuthorizationStatus;
  error: string | null;
  isOffersListLoaded: boolean;
  isAuthCompleted: boolean;
};

const initialState: InitialState = {
  city: 'Paris',
  offersList: [],
  selectedOfferId: undefined,
  sortType: OffersTypesOfSort.Popular,
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
  isOffersListLoaded: false,
  isAuthCompleted: false,
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
    .addCase(sortCards, (state, action: PayloadAction<OffersTypesOfSort>) => {
      state.sortType = action.payload;
    })
    .addCase(requireAuthorization, (state, action: PayloadAction<AuthorizationStatus>) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setAuthStatus, (state, action: PayloadAction<boolean>) => {
      state.isAuthCompleted = action.payload;
    });
});

export { reducer};
