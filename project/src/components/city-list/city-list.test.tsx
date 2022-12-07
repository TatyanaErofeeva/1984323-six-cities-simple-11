import {render, screen} from '@testing-library/react';
import CityList from './city-list';
import {createMemoryHistory} from 'history';
import HistoryRouter from '../history-router';
import {getRandomCity} from '../../utils/mocks';

const fakeCity = getRandomCity();

describe('Component: CityList', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    render(
      <HistoryRouter history={history}>
        <CityList selectedCity = {fakeCity} onCityChange = {() => ''}/>
      </HistoryRouter>,
    );

    const headerElement = screen.getByText(`${fakeCity}`);

    expect(headerElement).toBeInTheDocument();
  });
});
