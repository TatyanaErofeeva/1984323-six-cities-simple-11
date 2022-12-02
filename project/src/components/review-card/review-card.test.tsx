import {render, screen} from '@testing-library/react';
import { ReviewCard } from './review-card';
import {createMemoryHistory} from 'history';
import HistoryRouter from '../../components/history-route';
import {makeFakeReview} from '../../utils/mocks';

const fakeReview = makeFakeReview();

describe('Component: NotFound', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    render(
      <HistoryRouter history={history}>
        <ReviewCard review = {fakeReview}/>
      </HistoryRouter>,
    );

    const headerElement = screen.getByText(`${fakeReview.comment}`);

    expect(headerElement).toBeInTheDocument();
  });
});

