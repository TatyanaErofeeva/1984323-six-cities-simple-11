import {createReducer} from '@reduxjs/toolkit';
import { setOfferLoadingError, setAuthStatus} from './action';
import { PayloadAction } from '@reduxjs/toolkit/dist/createAction';

type InitialState = {
  error: string | null;
  isAuthCompleted: boolean;
  isOfferLoadedError:boolean;
};

const initialState: InitialState = {
  error: null,
  isAuthCompleted: false,
  isOfferLoadedError:false,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setOfferLoadingError, (state, action: PayloadAction<boolean>) => {
      state.isOfferLoadedError = action.payload;
    })
    .addCase(setAuthStatus, (state, action: PayloadAction<boolean>) => {
      state.isAuthCompleted = action.payload;
    });
});

export { reducer};
