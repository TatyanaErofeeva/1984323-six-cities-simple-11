import { NameSpace, LoaderName } from '../../const';
import { createSlice } from '@reduxjs/toolkit';
import { fetchNearbyOffersAction} from '../api-actions/api-actions';
import { DataNearbyOffers } from '../../types/state';

const initialState: DataNearbyOffers = {
  nearbyOffers:[],
  loaders: {},
};

export const dataNearbyOffers = createSlice({
  name: NameSpace.DataNearbyOffers,
  initialState,
  reducers:{},
  extraReducers (builder) {
    builder
      .addCase(fetchNearbyOffersAction.pending, (state) => {
        state.loaders[LoaderName.NearbyOffersLoad] = true;
      })
      .addCase(fetchNearbyOffersAction.fulfilled, (state, action) => {
        state.nearbyOffers = action.payload;
        state.loaders[LoaderName.NearbyOffersLoad] = false;
      });
  }
});

