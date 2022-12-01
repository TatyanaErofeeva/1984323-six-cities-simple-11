import { dataNearbyOffers } from './data-nearbyoffers';
import { fetchNearbyOffersAction} from '../api-actions/api-actions';
import {fakeOffersList} from '../../utils/mocks';

describe('Reducer: dataNearbyOffers', () => {
  it('without additional parameters should return initial state', () => {
    expect(dataNearbyOffers.reducer(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual({ nearbyOffers:[], loaders: {}});
  });

  it('should update LoaderName.NearbyOffersLoad to "true" if fetchNearbyOffersAction pending', () => {
    const state = { nearbyOffers:[], loaders: {}};
    expect(dataNearbyOffers.reducer(state, { type: fetchNearbyOffersAction.pending.type }))
      .toEqual({nearbyOffers:[], loaders: {'nearbyOffers-load': true}});
  });

  it('should show offers and update LoaderName.OffersLoad to "false" if fetchNearbyOffersAction fulfilled', () => {
    const state = {nearbyOffers: [], loaders: {}};
    expect(dataNearbyOffers.reducer(state, { type: fetchNearbyOffersAction.fulfilled.type, payload:fakeOffersList }))
      .toEqual({nearbyOffers: fakeOffersList, loaders: {'nearbyOffers-load': false}});
  });

});
