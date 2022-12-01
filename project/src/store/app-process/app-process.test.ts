import { appProcess, cityChange, focusCardId, sortCards } from './app-process';
import { DEFAULT_CITY, OffersTypesOfSort } from '../../const';
import {makeFakeAppProcessData} from '../../utils/mocks';

const fakeAppData = makeFakeAppProcessData();

describe('Reducer: appProcess', () => {
  it('without additional parameters should return initial state', () => {
    expect(appProcess.reducer(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual({ city: DEFAULT_CITY,focusCardId: undefined, sortType: OffersTypesOfSort.Popular});
  });

  it('should update city by a given value', () => {
    const state = { city: DEFAULT_CITY,focusCardId: undefined, sortType: OffersTypesOfSort.Popular};
    expect(appProcess.reducer(state, { type: cityChange.type, payload:fakeAppData.city}))
      .toEqual({city: fakeAppData.city,focusCardId: undefined, sortType: OffersTypesOfSort.Popular});
  });

  it('should update sortType by chosen option', () => {
    const state = { city: DEFAULT_CITY,focusCardId: undefined, sortType: OffersTypesOfSort.Popular};
    expect(appProcess.reducer(state, { type: sortCards.type, payload:fakeAppData.sortType}))
      .toEqual({city: DEFAULT_CITY,focusCardId: undefined, sortType: fakeAppData.sortType});
  });

  it('should get cardId by focusing on this card', () => {
    const state = { city: DEFAULT_CITY,focusCardId: undefined, sortType: OffersTypesOfSort.Popular};
    expect(appProcess.reducer(state, { type: focusCardId.type, payload:fakeAppData.focusCardId}))
      .toEqual({city: DEFAULT_CITY,focusCardId: fakeAppData.focusCardId, sortType: OffersTypesOfSort.Popular});
  });

});

