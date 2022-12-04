import { dataOffers } from './data-offers';
import { fetchOffersListAction} from '../api-actions/api-actions';
import {fakeOffersList} from '../../utils/mocks';

describe('Reducer: dataOffers', () => {
  it('without additional parameters should return initial state', () => {
    expect(dataOffers.reducer(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual({offersList: [], loaders: {}});
  });

  it('should update LoaderName.OffersLoad to "true" if fetchOffersListAction pending', () => {
    const state = {offersList: [], loaders: {}};
    expect(dataOffers.reducer(state, { type: fetchOffersListAction.pending.type }))
      .toEqual({offersList: [], loaders: {'offers-load': true}});
  });

  it('should show offers and update LoaderName.OffersLoad to "false" if fetchOffersListAction fulfilled', () => {
    const state = {offersList: [], loaders: {}};
    expect(dataOffers.reducer(state, { type: fetchOffersListAction.fulfilled.type, payload:fakeOffersList }))
      .toEqual({offersList: fakeOffersList, loaders: {'offers-load': false}});
  });

});

