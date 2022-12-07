import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { createMemoryHistory } from 'history';
import HistoryRouter from '../history-router';
import { AuthorizationStatus} from '../../const';
import { fakeReviewList, fakeEmail } from '../../utils/mocks';
import {PropertyReview} from './property-review';

const history = createMemoryHistory();

const mockStore = configureMockStore();

const store = mockStore({
  USER: {authorizationStatus: AuthorizationStatus.Auth, email: fakeEmail},
  REVIEWS:{commentsList: fakeReviewList, loaders: {'comments-load': false}},
});

describe('Component: PropertyReview', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <PropertyReview offerId={1} />
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByText(/Reviews/i)).toBeInTheDocument();
    expect(screen.getAllByRole('img')).toHaveLength(fakeReviewList.length);
    expect(screen.getAllByText(/Rating/i)).toHaveLength(fakeReviewList.length + 1);
  });
});
