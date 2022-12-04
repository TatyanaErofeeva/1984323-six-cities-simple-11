import { AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../../types/state.js';
import { Offer, Offers } from '../../types/offer.js';
import { ReviewComment, Reviews} from '../../types/review.js';
import { UserData } from '../../types/user-data';
import {redirectToAnotherRoute} from '../action';
import {dropToken, saveToken} from '../../services/token';
import {APIRoute, AppRoute} from '../../const';
import {AuthData} from '../../types/auth-data';
import { generatePath } from 'react-router';

export const fetchOffersListAction = createAsyncThunk<Offers, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffersList',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Offers>(APIRoute.OffersList);
    return data;
  },
);

export const fetchOfferAction = createAsyncThunk<Offer, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffer',
  async (hotelId, {dispatch, extra: api}) => {
    const {data} = await api.get<Offer>(generatePath(APIRoute.Offer, {hotelId: String(hotelId)}));
    return data;
  },
);

export const fetchNearbyOffersAction = createAsyncThunk<Offers, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetcNearByOffers',
  async (hotelId, {dispatch, extra: api}) => {
    const {data} = await api.get<Offers>(generatePath(APIRoute.NearBy, {hotelId: String(hotelId)}));
    return data;
  },
);


export const fetchCommentsListAction = createAsyncThunk<Reviews, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchCommentsList',
  async (hotelId, {dispatch, extra: api}) => {
    const {data} = await api.get<Reviews>(generatePath(APIRoute.Comments, {hotelId: String(hotelId)}));
    return data;
  },
);

export const commentPostAction = createAsyncThunk<Reviews, ReviewComment, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/commentPost',
  async ({hotelId, comment, rating}, {dispatch, extra: api}) => {
    const {data} = await api.post<Reviews>(generatePath(APIRoute.Comments, {hotelId: String(hotelId)}),
      {comment, rating});
    return data;
  },
);

export const checkAuthAction = createAsyncThunk<string, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    const {data: {email}} = await api.get<UserData>(APIRoute.Login);
    return email;
  }
);


export const loginAction = createAsyncThunk<string, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({email, password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(redirectToAnotherRoute(AppRoute.Root));

    return email;
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(redirectToAnotherRoute(AppRoute.Login));
  },
);
