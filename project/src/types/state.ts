import {store} from '../store/index.js';
import {Offers, Offer} from './offer';
import {Reviews} from './review';
import { AuthorizationStatus } from '../const.js';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type DataOffers = {
  offersList: Offers;
  loaders: {[key:string]: boolean};
};

export type DataComments = {
  commentsList: Reviews;
  loaders: {[key:string]: boolean};
};

export type DataOffer = {
  offer?: Offer;
  isOfferLoadedError:boolean;
  loaders: {[key:string]: boolean};
};

export type DataNearbyOffers = {
  nearbyOffers: Offers;
  loaders: {[key:string]: boolean};
};

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
};

export type AppProcess = {
  city: string;
  focusCardId: number | undefined;
  sortType: string;
};
