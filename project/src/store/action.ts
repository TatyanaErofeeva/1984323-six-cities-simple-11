import {createAction} from '@reduxjs/toolkit';
import {AppRoute} from '../const';

export const setOfferLoadingError = createAction<boolean>('data/setOffersLoadingError');

export const setAuthStatus = createAction<boolean>('user/setAuthStatus');

export const redirectToAnotherRoute = createAction<AppRoute>('login/redirectToAnotherRoute');

