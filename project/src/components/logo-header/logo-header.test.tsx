import {render, screen} from '@testing-library/react';
import LogoHeader from './logo-header';
import {createMemoryHistory} from 'history';
import HistoryRouter from '../history-router';
import userEvent from '@testing-library/user-event';
import { Routes, Route } from 'react-router-dom';
import NotFound from '../../pages/not-found/not-found';

const history = createMemoryHistory();
describe('Component: LogoHeader', () => {
  it('should render correctly', () => {
    render(
      <HistoryRouter history={history}>
        <LogoHeader/>
      </HistoryRouter>,
    );
    //expect(true).toBeTruthy();
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveClass('header__logo');
    expect(screen.getByAltText(/six cities logo/i)).toBeInTheDocument();

    expect(screen.getByRole('link')).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveClass('header__logo-link');
  });

  it('should redirect to root URL when user clicked to link', async () => {
    history.push('/fake');

    render(
      <HistoryRouter history={history}>
        <Routes>
          <Route path="/" element={<h1>This is main page</h1>} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </HistoryRouter>
    );

    expect(screen.queryByText(/This is main page/i)).not.toBeInTheDocument();
    await userEvent.click(screen.getByRole('link'));
    expect(screen.getByText(/This is main page/i)).toBeInTheDocument();
  });
});
