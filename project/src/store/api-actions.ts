import {AxiosError, AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state.js';
import { Offers, Offer } from '../types/offer.js';
import { ReviewComment, Reviews } from '../types/review.js';
import { UserData } from '../types/user-data';
import {offersListLoad, requireAuthorization, setLoaderState, setOfferLoadingError, redirectToAnotherRoute, offerLoad, commentsListLoad, nearbyOffersLoad} from './action';
import {dropToken, saveToken} from '../services/token';
import {APIRoute, AppRoute, AuthorizationStatus} from '../const';
import {AuthData} from '../types/auth-data';
import { generatePath } from 'react-router';
import { toast } from 'react-toastify';

export const fetchOffersListAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffersList',
  async (_arg, {dispatch, extra: api}) => {

    dispatch(setLoaderState(['offers-load', true]));
    const {data} = await api.get<Offers>(APIRoute.OffersList);
    dispatch(offersListLoad(data));
    dispatch(setLoaderState(['offers-load', false]));
  },
);

export const fetchOfferAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffer',
  async (hotelId, {dispatch, extra: api}) => {
    try{
      dispatch(setOfferLoadingError(false));
      dispatch(setLoaderState(['offer-load', true]));
      const {data} = await api.get<Offer>(generatePath(APIRoute.Offer, {hotelId: String(hotelId)}));
      dispatch(offerLoad(data));
    } catch(error: unknown){
      if (error instanceof AxiosError ){
        if(error.response?.status === 404){
          dispatch(setOfferLoadingError(true));
        }
      }
    }
    finally{
      dispatch(setLoaderState(['offer-load', false]));
    }
  },
);

export const fetchNearbyOffersAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetcNearByOffers',
  async (hotelId, {dispatch, extra: api}) => {
    dispatch(setLoaderState(['nearbyOffers-load', true]));
    const {data} = await api.get<Offers>(generatePath(APIRoute.NearBy, {hotelId: String(hotelId)}));
    dispatch(nearbyOffersLoad(data));
    dispatch(setLoaderState(['nearbyOffers-load', false]));
  },
);


export const fetchCommentsListAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchCommentsList',
  async (hotelId, {dispatch, extra: api}) => {
    try{
      dispatch(setLoaderState(['comments-load', true]));
      const {data} = await api.get<Reviews>(generatePath(APIRoute.Comments, {hotelId: String(hotelId)}));
      dispatch(commentsListLoad(data));
    } catch{
      toast.error('Ошибка загрузки коммента');
    }
    finally{
      dispatch(setLoaderState(['comments-load', false]));
    }

  },
);

export const commentPostAction = createAsyncThunk<void, ReviewComment, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/commentPost',
  async ({hotelId, comment, rating, resetFormData}, {dispatch, extra: api}) => {
    try{
      dispatch(setLoaderState(['comment-post', true]));
      const {data} = await api.post<ReviewComment>(generatePath(APIRoute.Comments, {hotelId: String(hotelId)}),
        {comment, rating});
      dispatch(fetchCommentsListAction(hotelId));
      resetFormData();
    } catch {
      toast.error('Ошибка отправки коммента');
    }
    finally{
      dispatch(setLoaderState(['comment-post', false]));
    }
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
      dispatch(redirectToAnotherRoute(AppRoute.Login));
    }
  },
);


export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({email, password}, {dispatch, extra: api}) => {

    const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(redirectToAnotherRoute(AppRoute.Root));
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
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    dispatch(redirectToAnotherRoute(AppRoute.Login));
  },
);
