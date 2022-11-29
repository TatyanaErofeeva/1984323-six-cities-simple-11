import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { dataOffer } from '../data-offer';
import { dataOffers } from '../data-offers';
import { dataComments } from '../data-comments';
import { dataNearbyOffers } from '../data-nearbyoffers';
import { appProcess } from '../app-process';
import { userProcess } from '../user-process';


export const rootReducer = combineReducers({
  [NameSpace.DataOffer]: dataOffer.reducer,
  [NameSpace.DataOffers]: dataOffers.reducer,
  [NameSpace.DataNearbyOffers]: dataNearbyOffers.reducer,
  [NameSpace.DataComments]: dataComments.reducer,
  [NameSpace.App]: appProcess.reducer,
  [NameSpace.User]: userProcess.reducer,
});
