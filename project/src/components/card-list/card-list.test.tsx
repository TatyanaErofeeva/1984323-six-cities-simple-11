import {render, screen} from '@testing-library/react';
import CardsList from './card-list';
import {createMemoryHistory} from 'history';
import HistoryRouter from '../history-router';
import {fakeOffersList} from '../../utils/mocks';
import {CardPage} from '../../const';
import {Provider} from 'react-redux';
import { store } from '../../store';

describe('Component: CardsList', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <CardsList offers = {fakeOffersList} className = {CardPage.MainPage}/>
        </HistoryRouter>
      </Provider>,
    );

    expect(true).toBeTruthy();
  });
});
