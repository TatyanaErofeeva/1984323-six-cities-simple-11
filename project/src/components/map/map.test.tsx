import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { fakeOffersList, makeFakeOfferCity} from '../../utils/mocks';
import {Map} from './map';
import { fakeAppData } from '../../store/app-process/app-process.test';

const mockStore = configureMockStore();
const fakeCity = makeFakeOfferCity();

const store = mockStore({
  APP:{city: fakeAppData.city, focusCardId: fakeAppData.focusCardId,sortType: fakeAppData.sortType}
});

describe('Component: Map', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <Map classMap={'cities__map map'} city ={fakeCity} points = {fakeOffersList} selectedPointId = {1} />
      </Provider>
    );

    expect(screen.getByTestId('leaflet-map')).toBeInTheDocument();
    expect(screen.getByTestId('leaflet-map')).toHaveClass('leaflet-container');
  });
});
