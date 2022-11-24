import {createReducer} from '@reduxjs/toolkit';
import { cityChange, offersListLoad, offerLoad, setOfferLoadingError, focusCardId, setLoaderState, nearbyOffersLoad, sortCards, requireAuthorization, setAuthStatus, commentsListLoad} from './action';
import { Offers, Offer } from '../types/offer';
import { Reviews} from '../types/review';
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
  isAuthCompleted: boolean;
  nearbyOffers:Offers;
  isOfferLoadedError:boolean;
  loaders:{[key:string]: boolean};
};

const initialState: InitialState = {
  city: 'Paris',
  offersList: [],
  selectedOfferId: undefined,
  sortType: OffersTypesOfSort.Popular,
  commentsList: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
  isAuthCompleted: false,
  nearbyOffers:[],
  isOfferLoadedError:false,
  loaders:{},
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(cityChange, (state, action: PayloadAction<string>) => {
      state.city = action.payload;
    })
    .addCase(offersListLoad, (state, action: PayloadAction<Offers>) => {
      state.offersList = action.payload;
    })
    .addCase(offerLoad, (state, action: PayloadAction<Offer>) => {
      state.offer = action.payload;
    })
    .addCase(setOfferLoadingError, (state, action: PayloadAction<boolean>) => {
      state.isOfferLoadedError = action.payload;
    })
    .addCase(nearbyOffersLoad, (state, action: PayloadAction<Offers>) => {
      state.nearbyOffers = action.payload;
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
    .addCase(setLoaderState, (state, action: PayloadAction<[string, boolean]>) => {
      state.loaders[action.payload[0]] = action.payload[1];
    })
    .addCase(setAuthStatus, (state, action: PayloadAction<boolean>) => {
      state.isAuthCompleted = action.payload;
    });
});

export { reducer};
