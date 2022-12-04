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
  {
    name: 'Paris',
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 10,
    }
  },
  {
    name: 'Cologne',
    location: {
      latitude: 50.938361,
      longitude: 6.959974,
      zoom: 10,
    }
  },
  {
    name: 'Brussels',
    location: {
      latitude: 50.846557,
      longitude: 4.351697,
      zoom: 10,
    }
  },
  {
    name: 'Amsterdam',
    location: {
      latitude: 52.37454,
      longitude: 4.897976,
      zoom: 10,
    }
  },
  {
    name: 'Hamburg',
    location: {
      latitude: 53.550341,
      longitude: 10.000654,
      zoom: 10,
    }
  },
  {
    name: 'Dusseldorf',
    location: {
      latitude: 51.225402,
      longitude: 6.776314,
      zoom: 10,
    }
  }
];

const URL_MARKER_DEFAULT = 'img/pin.svg';

const URL_MARKER_CURRENT = 'img/pin-active.svg';

export enum OffersTypesOfSort {
  Popular = 'Popular',
  PriceToHigh = 'Price: low to high',
  PriceToLow = 'Price: high to low',
  TopRatedFirst = 'Top rated first'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum APIRoute {
  OffersList = '/hotels',
  Login = '/login',
  Logout = '/logout',
  Offer = '/hotels/:hotelId',
  Comments ='/comments/:hotelId',
  NearBy = '/hotels/:hotelId/nearby',
}

export enum LoaderName {
  OffersLoad = 'offers-load',
  OfferLoad = 'offer-load',
  NearbyOffersLoad = 'nearbyOffers-load',
  CommentsLoad = 'comments-load',
  CommentPost ='comment-post',
}

export const TIMEOUT_SHOW_ERROR = 2000;

export const MIN_SYMBOLS_COUNT = 50;
export const MAX_SYMBOLS_COUNT = 300;

export enum NameSpace {
  DataOffers = 'OFFERS',
  DataOffer = 'OFFER',
  DataComments = 'REVIEWS',
  DataNearbyOffers = 'NEARBY_OFFERS',
  App = 'APP',
  User = 'USER',
}

export const DEFAULT_CITY = 'Paris';

export const ACCOMODATION = {
  house: 'House',
  apartment: 'Apartment',
  room: 'Private Room',
  hotel: 'Hotel'
};

export {URL_MARKER_CURRENT, URL_MARKER_DEFAULT};

