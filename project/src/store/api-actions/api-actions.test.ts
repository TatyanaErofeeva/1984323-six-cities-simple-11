import {Action} from 'redux';
import MockAdapter from 'axios-mock-adapter';
import thunk, {ThunkDispatch} from 'redux-thunk';
import {createAPI} from '../../services/api';
import {APIRoute} from '../../const';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {State} from '../../types/state';
import {checkAuthAction,fetchOffersListAction,fetchOfferAction,fetchNearbyOffersAction, fetchCommentsListAction, commentPostAction, loginAction, logoutAction} from './api-actions';
import {redirectToAnotherRoute} from '../action';
import {AuthData} from '../../types/auth-data';
import {fakeEmail, fakePassword, fakeOffersList, makeFakeOffer} from '../../utils/mocks';
import {datatype} from 'faker';

describe('Async actions', () => {
  const api = createAPI();
  const mockAPI = new MockAdapter(api);
  const middlewares = [thunk.withExtraArgument(api)];

  const mockStore = configureMockStore<
      State,
      Action<string>,
      ThunkDispatch<State, typeof api, Action>
    >(middlewares);

  it('should authorization status is «auth» when server return 200', async () => {
    const store = mockStore();
    mockAPI
      .onGet(APIRoute.Login)
      .reply(200, []);

    expect(store.getActions()).toEqual([]);

    await store.dispatch(checkAuthAction());

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      checkAuthAction.pending.type,
      checkAuthAction.fulfilled.type
    ]);
  });

  it('should dispatch RequriedAuthorization and RedirectToRoute when POST /login', async () => {
    const fakeUser: AuthData = {email: fakeEmail, password: fakePassword};

    mockAPI
      .onPost(APIRoute.Login)
      .reply(200, {token: 'secret'});


    const store = mockStore();
    Storage.prototype.setItem = jest.fn();

    await store.dispatch(loginAction(fakeUser));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      loginAction.pending.type,
      redirectToAnotherRoute.type,
      loginAction.fulfilled.type
    ]);

    expect(Storage.prototype.setItem).toBeCalledTimes(1);
    expect(Storage.prototype.setItem).toBeCalledWith('six-cities', 'secret');
  });

  it('should dispatch Logout when Delete /logout', async () => {
    mockAPI
      .onDelete(APIRoute.Logout)
      .reply(204);

    const store = mockStore();
    Storage.prototype.removeItem = jest.fn();

    await store.dispatch(logoutAction());

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      logoutAction.pending.type,
      redirectToAnotherRoute.type,
      logoutAction.fulfilled.type
    ]);

    expect(Storage.prototype.removeItem).toBeCalledTimes(1);
    expect(Storage.prototype.removeItem).toBeCalledWith('six-cities');
  });

  it('should dispatch Load_Offers when GET /hotels', async () => {
    mockAPI
      .onGet(APIRoute.OffersList)
      .reply(200, fakeOffersList);

    const store = mockStore();

    await store.dispatch(fetchOffersListAction());

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchOffersListAction.pending.type,
      fetchOffersListAction.fulfilled.type
    ]);
  });

  it('should dispatch Load_Offer when GET /hotels/:hotelId', async () => {
    const fakeOffer = makeFakeOffer();
    const fakeHotelId = datatype.number();
    mockAPI
      .onGet(APIRoute.Offer)
      .reply(200, fakeOffer);

    const store = mockStore();

    await store.dispatch(fetchOfferAction(fakeHotelId));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchOfferAction.pending.type,
      fetchOfferAction.fulfilled.type,
      fetchOfferAction.rejected.type,
    ]);
  });




});
