import {render} from '@testing-library/react';
import {Spinner } from './spinner';
import {createMemoryHistory} from 'history';
import HistoryRouter from '../history-router';


describe('Component: Spinner', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    render(
      <HistoryRouter history={history}>
        <Spinner/>
      </HistoryRouter>,
    );

    expect(true).toBeTruthy();
  });
});
