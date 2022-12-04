import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import HistoryRouter from '../history-route';
import {AuthorizationStatus, AppRoute} from '../../const';
import App from './app';
import { fakeEmail, fakeOffersList, fakeReviewList, makeFakeComment} from '../../utils/mocks';
import { fakeOffer } from '../../store/data-offer/data-offer.test';
import { fakeAppData } from '../../store/app-process/app-process.test';
import thunk from 'redux-thunk';

const fakeComment = makeFakeComment();
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const store = mockStore({
  USER: {authorizationStatus: AuthorizationStatus.Auth, email: fakeEmail},
  OFFERS:{ offersList:fakeOffersList, loaders: {'offers-load': false}},
  OFFER:{offer: fakeOffer, loaders: {'offer-load': false}, isOfferLoadedError:false},
  REVIEWS:{commentsList: fakeReviewList, loaders: {'comments-load': false}},
  NEARBY_OFFERS:{ nearbyOffers: fakeOffersList, loaders: {'nearbyOffers-load': false}},
  APP:{city: fakeAppData.city, focusCardId: fakeAppData.focusCardId,sortType: fakeAppData.sortType}
});

const history = createMemoryHistory();

const fakeApp = (
  <Provider store={store}>
    <HistoryRouter history={history}>
      <App />
    </HistoryRouter>
  </Provider>
);

describe('Application Routing', () => {
  it('should render "MainPage" when user navigate to "/"', () => {
    history.push(AppRoute.Root);

    render(fakeApp);

    expect(screen.getByText(new RegExp('places to stay in', 'i'))).toBeInTheDocument();
  });

  it('should render "AuthScreen" when user navigate to "/login"', () => {
    history.push(AppRoute.Login);

    render(fakeApp);

    expect(screen.getByText('E-mail')).toBeInTheDocument();
    expect(screen.getByText('Password')).toBeInTheDocument();
  });

  it('should render "PropertyPage" when user navigate to "/offer/:id"', () => {
    history.push(`/offer/${fakeComment.hotelId}`);

    render(fakeApp);


    expect(screen.getByText(`${fakeOffer.title}`)).toBeInTheDocument();
  });

  it('should render "NotFoundScreen" when user navigate to non-existent route', () => {
    history.push('/non-existent-route');

    render(fakeApp);

    expect(screen.getByText('404')).toBeInTheDocument();
    expect(screen.getByText('Вернуться на главную страницу')).toBeInTheDocument();
  });
});


