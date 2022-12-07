import { render, screen } from '@testing-library/react';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';
import HistoryRouter from '../history-router';
import {ReviewForm} from './review-form';
import { fakeReviewList} from '../../utils/mocks';

const history = createMemoryHistory();

const mockStore = configureMockStore();

const store = mockStore({
  REVIEWS:{commentsList: fakeReviewList, loaders: {'comments-load': false}},
});

describe('Component: ReviewForm', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <ReviewForm offerId={1} />
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByLabelText(/Your review/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Tell how was your stay, what you like and what can be improved/i)).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByText('Submit')).toBeInTheDocument();
  });
});
