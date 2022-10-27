import { Offers } from '../types/offer';

export const offers: Offers = [
  {
    id: 1,
    isPremium: true,
    cost: 1200,
    previewImage:'https://picsum.photos/200/300',
    title:'Beautiful & luxurious studio at great location',
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    accommodation:'appartment',
    images: [
      'https://picsum.photos/200/300',
      'https://picsum.photos/200/300',
      'https://picsum.photos/200/300',
      'https://picsum.photos/200/300',
      'https://picsum.photos/200/300',
      'https://picsum.photos/200/300',
    ],
    rating: 5,
    bedrooms: 1,
    maxAdults: 2,
    goods: [
      'Breakfast',
      'Laptop friendly workspace'
    ],
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 1,
      isPro: true,
      name: 'Angelina',
    },
    city: {
      location: {
        latitude: 50.846557,
        longitude: 4.351697,
        zoom: 13,
      },
      name:  'Brussels',
    }
  },
  {
    id: 2,
    isPremium: false,
    cost: 700,
    previewImage:'https://picsum.photos/200/300',
    title:'Nice and cozy place',
    description: 'Peaceful studio in the most wanted area in town. Quiet house Near of everything. Completely renovated. Lovely neighbourhood, lot of trendy shops, restaurants and bars in a walking distance.',
    accommodation:'hotel',
    images: [
      'https://picsum.photos/200/300',
      'https://picsum.photos/200/300',
      'https://picsum.photos/200/300',
      'https://picsum.photos/200/300',
      'https://picsum.photos/200/300',
      'https://picsum.photos/200/300',
    ],
    rating: 4,
    bedrooms: 1,
    maxAdults: 2,
    goods: [
      'Breakfast',
      'Washer',
      'Air conditioning'
    ],
    host: {
      avatarUrl: 'img/avatar-max.jpg',
      id: 2,
      isPro: false,
      name: 'Max',
    },
    city: {
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13,
      },
      name:  'Paris',
    }
  },
  {
    id: 3,
    isPremium: true,
    cost: 1500,
    previewImage:'https://picsum.photos/200/300',
    title:'Beautiful & luxurious studio at great location',
    description: 'Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.',
    accommodation:'house',
    images: [
      'https://picsum.photos/200/300',
      'https://picsum.photos/200/300',
      'https://picsum.photos/200/300',
      'https://picsum.photos/200/300',
      'https://picsum.photos/200/300',
      'https://picsum.photos/200/300',
    ],
    rating: 5,
    bedrooms: 3,
    maxAdults: 6,
    goods: [
      'Air conditioning',
      'Baby seat',
      'Fridge',
      'Breakfast',
      'Towels',
      'Dishwasher',
      'Laptop friendly workspace',
      'Washer'
    ],
    host: {
      avatarUrl: 'img/avatar-max.jpg',
      id: 1,
      isPro: false,
      name: 'Max',
    },
    city: {
      location: {
        latitude: 50.938361,
        longitude: 6.959974,
        zoom: 13,
      },
      name:  'Cologne',
    }
  },
  {
    id: 4,
    isPremium: false,
    cost: 500,
    previewImage:'https://picsum.photos/200/300',
    title:'Quiet & beautiful apartment at center',
    description: 'Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.',
    accommodation:'room',
    images: [
      'https://picsum.photos/200/300',
      'https://picsum.photos/200/300',
      'https://picsum.photos/200/300',
      'https://picsum.photos/200/300',
      'https://picsum.photos/200/300',
      'https://picsum.photos/200/300',
    ],
    rating: 4,
    bedrooms: 1,
    maxAdults: 2,
    goods: [
      'Towels',
      'Dishwasher'
    ],
    host: {
      avatarUrl: 'img/avatar-max.jpg',
      id: 1,
      isPro: false,
      name: 'Max',
    },
    city: {
      location: {
        latitude: 53.550341,
        longitude: 10.000654,
        zoom: 13,
      },
      name:  'Hamburg',
    }
  },
];

