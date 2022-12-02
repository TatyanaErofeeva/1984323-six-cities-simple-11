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
import {fakeEmail, fakePassword, fakeOffersList, makeFakeOffer, makeFakeComment, fakeReviewList} from '../../utils/mocks';
import {datatype} from 'faker';

describe('Async actions', () => {
  const fakeUser: AuthData = {email: fakeEmail, password: fakePassword};
  const fakeHotelId = datatype.number();
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
    mockAPI
      .onGet(`/hotels/${fakeHotelId}`)
      .reply(200, fakeOffer);

    const store = mockStore();

    await store.dispatch(fetchOfferAction(fakeHotelId));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchOfferAction.pending.type,
      fetchOfferAction.fulfilled.type,
    ]);
  });


  it('should dispatch Nearby_Offers when GET /hotels/:hotelId/nearby', async () => {
    mockAPI
      .onGet(`/hotels/${fakeHotelId}/nearby`)
      .reply(200, fakeOffersList);

    const store = mockStore();

    await store.dispatch(fetchNearbyOffersAction(fakeHotelId));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchNearbyOffersAction.pending.type,
      fetchNearbyOffersAction.fulfilled.type,
    ]);
  });

  it('should dispatch Load_Comments when GET /comments/:hotelId', async () => {
    mockAPI
      .onGet(`/comments/${fakeHotelId}`)
      .reply(200, fakeReviewList);

    const store = mockStore();

    await store.dispatch(fetchCommentsListAction(fakeHotelId));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchCommentsListAction.pending.type,
      fetchCommentsListAction.fulfilled.type,
    ]);
  });

  it('should dispatch Add_Comments when POST /comments/:hotelId', async () => {
    const fakeComment = makeFakeComment();
    mockAPI
      .onPost(`/comments/${fakeComment.hotelId}`)
      .reply(200, []);

    const store = mockStore();
    await store.dispatch(commentPostAction(fakeComment));
    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      commentPostAction.pending.type,
      commentPostAction.fulfilled.type,
    ]);
  });


});
