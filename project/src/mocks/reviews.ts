import { Reviews } from '../types/review';

export const reviews: Reviews = [
  {
    hotelId: 1,
    comment: 'We loved it so much, the house, the veiw, the location just great.. Highly reccomend :)',
    date: '2022-06-13T12:25:36.938Z',
    id: 1,
    rating: 4,
    user: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 1,
      isPro: true,
      name: 'Angelina',
    }
  },
  {
    hotelId: 2,
    comment: 'Home is amazing. It\'s like staying in a museum. The rooms, furnishings and artworks are incredible. The views of My Vesuvius',
    date: '2022-05-25T12:25:36.939Z',
    id: 2,
    rating: 5,
    user: {
      avatarUrl: 'img/avatar-max.jpg',
      id: 2,
      isPro: false,
      name: 'Max',
    }
  },
  {
    hotelId: 3,
    comment: 'Bathed in the nature. Completely unplugged. Unforgettable.',
    date: '2022-06-13T12:25:36.939Z',
    id: 3,
    rating: 4,
    user: {
      avatarUrl: 'img/avatar-max.jpg',
      id: 2,
      isPro: false,
      name: 'Max',
    }
  },
  {
    hotelId: 4,
    comment: 'The room was spacious and clean. The pool looked nothing like the photos and desparately needs a clean. The sauna and spa were closed for lunar new year holiday.',
    date: '2022-06-06T12:25:36.939Z',
    id: 4,
    rating: 5,
    user: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 1,
      isPro: true,
      name: 'Angelina',
    }
  }
];
