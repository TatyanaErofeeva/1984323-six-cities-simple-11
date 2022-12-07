import {render, screen} from '@testing-library/react';
import MainHeader from './main-header';
import {createMemoryHistory} from 'history';
import HistoryRouter from '../history-router';
import {Provider} from 'react-redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import {AuthorizationStatus} from '../../const';
import { fakeEmail} from '../../utils/mocks';

const mockStore = configureMockStore();

const store = mockStore({
  USER: {authorizationStatus: AuthorizationStatus.Auth, email: fakeEmail},
});

describe('Component: MainHeader', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <MainHeader/>
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByText(`${fakeEmail}`)).toBeInTheDocument();
  });
});
