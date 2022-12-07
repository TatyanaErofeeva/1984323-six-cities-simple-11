import {render, screen} from '@testing-library/react';
import { ReviewCard } from './review-card';
import {createMemoryHistory} from 'history';
import HistoryRouter from '../history-router';
import {makeFakeReview} from '../../utils/mocks';

const fakeReview = makeFakeReview();

describe('Component: ReviewCard', () => {
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

