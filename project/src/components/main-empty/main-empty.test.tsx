import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import HistoryRouter from '../history-router';
import { MainEmpty } from './main-empty';

describe('Component: MainEmpty', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    render(
      <HistoryRouter history={history}>
        <MainEmpty cityName = {'Paris'}/>
      </HistoryRouter>,
    );

    const headerElement = screen.getByText('No places to stay available');
    const linkElement = screen.getByText('We could not find any property available at the moment in Paris');

    expect(headerElement).toBeInTheDocument();
    expect(linkElement).toBeInTheDocument();
  });
});
