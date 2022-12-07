import {render, screen} from '@testing-library/react';
import SortCardsForm from './sort-form';
import {createMemoryHistory} from 'history';
import HistoryRouter from '../history-router';
import { Provider } from 'react-redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { fakeAppData } from '../../store/app-process/app-process.test';

const history = createMemoryHistory();

const mockStore = configureMockStore();

const store = mockStore({
  APP:{city: fakeAppData.city, focusCardId: fakeAppData.focusCardId,sortType: fakeAppData.sortType}
});

describe('Component: SortCardsForm', () => {
  it('should render correctly', () => {

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <SortCardsForm/>
        </HistoryRouter>,
      </Provider>
    );

    expect(screen.getByText(new RegExp('Sort by', 'i'))).toBeInTheDocument();
  });
});
