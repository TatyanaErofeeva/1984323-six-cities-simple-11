import { OfferCity } from './types/offer';

export enum AppRoute {
  Login= '/login',
  Property= '/offer/:id',
  Root= '/'
}

export enum CardPage {
  MainPage = 'cities',
  PropertyPage = 'near-places',
  PropertyPageMap = 'property'
}

export const CitiesList: OfferCity[] = [
  {name: 'Paris',
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 10,
    }},
  {name: 'Cologne',
    location: {
      latitude: 50.938361,
      longitude: 6.959974,
      zoom: 10,
    }},
  {name: 'Brussels',
    location: {
      latitude: 50.846557,
      longitude: 4.351697,
      zoom: 10,
    }},
  {name: 'Amsterdam',
    location: {
      latitude: 52.37454,
      longitude: 4.897976,
      zoom: 10,
    }},
  {name: 'Hamburg',
    location: {
      latitude: 53.550341,
      longitude: 10.000654,
      zoom: 10,
    }},
  {name: 'Dusseldorf',
    location: {
      latitude: 51.225402,
      longitude: 6.776314,
      zoom: 10,
    }}
];

const MAX_STARS = 5;

const URL_MARKER_DEFAULT = 'img/pin.svg';

const URL_MARKER_CURRENT = 'img/pin-active.svg';

export {MAX_STARS, URL_MARKER_CURRENT, URL_MARKER_DEFAULT};

