import { NameSpace, LoaderName } from '../../const';
import { createSlice } from '@reduxjs/toolkit';
import { fetchOffersListAction} from '../api-actions/api-actions';
import { DataOffers } from '../../types/state';

const initialState: DataOffers = {
  offersList: [],
  loaders: {},
};

export const dataOffers = createSlice({
  name: NameSpace.DataOffers,
  initialState,
  reducers:{},
  extraReducers (builder) {
    builder
      .addCase(fetchOffersListAction.pending, (state) => {
        state.loaders[LoaderName.OffersLoad] = true;
      })
      .addCase(fetchOffersListAction.fulfilled, (state, action) => {
        state.offersList = action.payload;
        state.loaders[LoaderName.OffersLoad] = false;
      });
  }
});

