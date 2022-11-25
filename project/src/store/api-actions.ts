import {AxiosError, AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state.js';
import { Offer, Offers } from '../types/offer.js';
import { ReviewComment, Reviews} from '../types/review.js';
import { UserData } from '../types/user-data';
import {setLoaderState, setOfferLoadingError, redirectToAnotherRoute} from './action';
import {dropToken, saveToken} from '../services/token';
import {APIRoute, AppRoute, LoaderName} from '../const';
import {AuthData} from '../types/auth-data';
import { generatePath } from 'react-router';
import { toast } from 'react-toastify';

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
    try{
      const {data} = await api.get<Offer>(generatePath(APIRoute.Offer, {hotelId: String(hotelId)}));
      return data;
    } catch(error: unknown){
      if (error instanceof AxiosError ){
        if(error.response?.status === 404){
          dispatch(setOfferLoadingError(true));
        }
      }
    }
    finally{
      dispatch(setLoaderState([LoaderName.OfferLoad, false]));
    }
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
    try{
      dispatch(setLoaderState([LoaderName.CommentsLoad, true]));
      const {data} = await api.get<Reviews>(generatePath(APIRoute.Comments, {hotelId: String(hotelId)}));
      return data;
    } catch{
      toast.error('Ошибка загрузки коммента');
    }
    finally{
      dispatch(setLoaderState([LoaderName.CommentsLoad, false]));
    }

  },
);

export const commentPostAction = createAsyncThunk<boolean, ReviewComment, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/commentPost',
  async ({hotelId, comment, rating}, {dispatch, extra: api}) => {
    try{
      dispatch(setLoaderState([LoaderName.CommentPost, true]));
      const {data} = await api.post<Reviews>(generatePath(APIRoute.Comments, {hotelId: String(hotelId)}),
        {comment, rating});
      dispatch(commentsListLoad(data));
      return false;
    } catch (error) {
      toast.error('Ошибка отправки коммента');
      return true;
    }
    finally{
      dispatch(setLoaderState([LoaderName.CommentPost, false]));
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
    await api.get(APIRoute.Login);
  }
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
    dispatch(redirectToAnotherRoute(AppRoute.Login));
  },
);
