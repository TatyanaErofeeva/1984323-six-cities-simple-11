import {createReducer} from '@reduxjs/toolkit';
import { cityChange, offersListLoad, offerLoad, focusCardId, nearbyOffersLoad, sortCards, requireAuthorization, commentPost, setDatatLoadingStatus, setAuthStatus, commentsListLoad} from './action';
import { Offers, Offer } from '../types/offer';
import { Reviews, ReviewComment } from '../types/review';
import { PayloadAction } from '@reduxjs/toolkit/dist/createAction';
import {AuthorizationStatus, OffersTypesOfSort} from '../const';

type InitialState = {
  city: string;
  offersList: Offers;
  offer?:Offer;
  selectedOfferId: number | undefined;
  sortType: OffersTypesOfSort;
  commentsList: Reviews;
  authorizationStatus: AuthorizationStatus;
  error: string | null;
  isDataLoading: boolean;
  isAuthCompleted: boolean;
  nearbyOffers:Offers;
  commentPost?: ReviewComment;
};

const initialState: InitialState = {
  city: 'Paris',
  offersList: [],
  selectedOfferId: undefined,
  sortType: OffersTypesOfSort.Popular,
  commentsList: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
  isDataLoading: false,
  isAuthCompleted: false,
  nearbyOffers:[],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(cityChange, (state, action: PayloadAction<string>) => {
      state.city = action.payload;
    })
    .addCase(offersListLoad, (state, action: PayloadAction<Offers>) => {
      state.offersList = action.payload;
    })
    .addCase(setDatatLoadingStatus, (state, action: PayloadAction<boolean>) => {
      state.isDataLoading = action.payload;
    })
    .addCase(offerLoad, (state, action: PayloadAction<Offer>) => {
      state.offer = action.payload;
    })
    .addCase(nearbyOffersLoad, (state, action: PayloadAction<Offers>) => {
      state.nearbyOffers = action.payload;
    })
    .addCase(commentPost, (state, action: PayloadAction<ReviewComment>) => {
      state.commentPost = action.payload;
    })
    .addCase(focusCardId, (state, action: PayloadAction<number|undefined>) => {
      state.selectedOfferId = action.payload;
    })
    .addCase(sortCards, (state, action: PayloadAction<OffersTypesOfSort>) => {
      state.sortType = action.payload;
    })
    .addCase(commentsListLoad, (state, action: PayloadAction<Reviews>) => {
      state.commentsList = action.payload;
    })
    .addCase(requireAuthorization, (state, action: PayloadAction<AuthorizationStatus>) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setAuthStatus, (state, action: PayloadAction<boolean>) => {
      state.isAuthCompleted = action.payload;
    });
});

export { reducer};
