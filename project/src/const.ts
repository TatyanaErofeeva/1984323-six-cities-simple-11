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

const MAX_STARS = 5;

const URL_MARKER_DEFAULT = 'img/pin.svg';

const URL_MARKER_CURRENT = 'img/pin-active.svg';

export {MAX_STARS, URL_MARKER_CURRENT, URL_MARKER_DEFAULT};

