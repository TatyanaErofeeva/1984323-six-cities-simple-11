import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, DEFAULT_CITY, OffersTypesOfSort } from '../const';
import { AppProcess } from '../types/state';

const initialState: AppProcess = {
  city: DEFAULT_CITY,
  focusCardId: undefined,
  sortType: OffersTypesOfSort.Popular,
};

export const appProcess = createSlice({
  name: NameSpace.App,
  initialState,
  reducers: {
    cityChange: (state, action) => {
      state.city = action.payload;
    },
    focusCardId: (state, action) => {
      state.focusCardId = action.payload;
    },
    sortCards: (state, action) => {
      state.sortType = action.payload;
    },
  },
});

export const {cityChange, focusCardId, sortCards} = appProcess.actions;
