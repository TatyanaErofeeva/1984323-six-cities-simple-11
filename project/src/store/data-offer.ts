import { NameSpace, LoaderName } from '../const';
import { createSlice } from '@reduxjs/toolkit';
import { fetchOfferAction} from './api-actions';
import { DataOffer } from '../types/state';

const initialState: DataOffer = {
  isOfferLoadedError:false,
  loaders: {},
};

export const dataOffer = createSlice({
  name: NameSpace.DataOffer,
  initialState,
  reducers:{},
  extraReducers (builder) {
    builder
      .addCase(fetchOfferAction.pending, (state) => {
        state.isOfferLoadedError = false;
        state.loaders[LoaderName.OfferLoad] = true;
      })
      .addCase(fetchOfferAction.fulfilled, (state, action) => {
        state.offer = action.payload;
        state.loaders[LoaderName.OfferLoad] = false;
      })
      .addCase(fetchOfferAction.rejected, (state) => {
        state.isOfferLoadedError = true;
        state.loaders[LoaderName.OfferLoad] = false;
      });
  }
});

