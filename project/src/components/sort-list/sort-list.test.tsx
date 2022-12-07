import {render, screen} from '@testing-library/react';
import { SortCards } from './sort-list';
import {createMemoryHistory} from 'history';
import HistoryRouter from '../history-router';
import { OffersTypesOfSort } from '../../const';

describe('Component: SortCards', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    render(
      <HistoryRouter history={history}>
        <SortCards selectedSortType = {OffersTypesOfSort.Popular} onChangeSortType = {() => OffersTypesOfSort.Popular} isSortingOpened/>
      </HistoryRouter>,
    );

    const headerElement = screen.getByText(`${OffersTypesOfSort.Popular}`);

    expect(headerElement).toBeInTheDocument();
  });
});
