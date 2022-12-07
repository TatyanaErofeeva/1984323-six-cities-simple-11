import {render, screen} from '@testing-library/react';
import { ReviewFormRating } from './review-form-rating';
import {createMemoryHistory} from 'history';
import HistoryRouter from '../history-router';

describe('Component: ReviewFormRating', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    render(
      <HistoryRouter history={history}>
        <ReviewFormRating index = {5} onChange = {() => ''} rating = {5}/>
      </HistoryRouter>,
    );

    expect(screen.getByDisplayValue('5')).toBeInTheDocument();
  });
});
