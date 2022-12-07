import { render, screen } from '@testing-library/react';
import { makeFakeOffer } from '../../utils/mocks';
import HistoryRouter from '../history-router';
import { createMemoryHistory } from 'history';
import CardInList from './card';
import {CardPage } from '../../const';
import { Route, Routes } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { store } from '../../store';

const fakeOffer = makeFakeOffer();
const history = createMemoryHistory();
const onMouseOver = jest.fn();
const onMouseLeave = jest.fn();

describe('Component: CardInList', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <CardInList className={CardPage.MainPage} offer={fakeOffer} onMouseOver = {onMouseOver} onMouseLeave = {onMouseLeave} />
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveClass('place-card__image');
    expect(screen.getByText(/Rating/i)).toBeInTheDocument();
    expect(screen.getByText(`€${fakeOffer.price}`)).toBeInTheDocument();
    expect(screen.getByText(fakeOffer.title)).toBeInTheDocument();
  });

  describe('should redirect to Property page', () => {
    const id = fakeOffer.id;

    it('when user clicked to link on image', async () => {
      history.push('/fake');

      render(
        <Provider store={store}>
          <HistoryRouter history={history}>
            <Routes>
              <Route path={`/offer/${id}`} element={<h1>This is Property page</h1>} />
              <Route path='*' element={
                <CardInList className={CardPage.MainPage} offer={fakeOffer} onMouseOver = {onMouseOver} onMouseLeave = {onMouseLeave} />
              }
              />
            </Routes>
          </HistoryRouter>
        </Provider>
      );

      expect(screen.queryByText(/This is Property page/i)).not.toBeInTheDocument();
      await userEvent.click(screen.getByTestId('link-card__image'));
      expect(screen.getByText(/This is Property page/i)).toBeInTheDocument();
    });

    it('when user clicked to link on title', async () => {
      history.push('/fake');

      render(
        <Provider store={store}>
          <HistoryRouter history={history}>
            <Routes>
              <Route path={`/offer/${id}`} element={<h1>This is Property page</h1>} />
              <Route path='*' element={
                <CardInList className={CardPage.MainPage} offer={fakeOffer} onMouseOver = {onMouseOver} onMouseLeave = {onMouseLeave} />
              }
              />
            </Routes>
          </HistoryRouter>
        </Provider>
      );

      expect(screen.queryByText(/This is Property page/i)).not.toBeInTheDocument();
      await userEvent.click(screen.getByTestId('link-card__title'));
      expect(screen.getByText(/This is Property page/i)).toBeInTheDocument();
    });
  });
});
