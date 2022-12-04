import { dataOffer } from './data-offer';
import { fetchOfferAction} from '../api-actions/api-actions';
import { makeFakeOffer } from '../../utils/mocks';

export const fakeOffer = makeFakeOffer();

describe('Reducer: dataOffer', () => {
  it('without additional parameters should return initial state', () => {
    expect(dataOffer.reducer(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual({isOfferLoadedError:false, loaders: {}});
  });

  it('should update LoaderName.OfferLoad to "true" if fetchOfferAction pending', () => {
    const state = {isOfferLoadedError:false, loaders: {}};
    expect(dataOffer.reducer(state, { type: fetchOfferAction.pending.type }))
      .toEqual({isOfferLoadedError:false, loaders: {'offer-load': true}});
  });

  it('should show offer and update LoaderName.OfferLoad to "false" if fetchOfferAction fulfilled', () => {
    const state = {isOfferLoadedError:false, loaders: {}};
    expect(dataOffer.reducer(state, { type: fetchOfferAction.fulfilled.type, payload: fakeOffer}))
      .toEqual({offer: fakeOffer, loaders: {'offer-load': false}, isOfferLoadedError:false });
  });

  it('should update isOfferLoadedError to "true" if fetchOfferAction rejected', () => {
    const state = {isOfferLoadedError:false, loaders: {}};
    expect(dataOffer.reducer(state, { type: fetchOfferAction.rejected.type}))
      .toEqual({isOfferLoadedError:true, loaders: {'offer-load': false}});
  });

});
