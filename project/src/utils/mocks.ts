import {address, internet, datatype, company, image, random} from 'faker';
import { Offer } from '../types/offer';
import { Review, ReviewComment } from '../types/review';

export const fakeEmail = internet.email();
export const fakePassword = internet.password();

export const makeFakeOffer = (): Offer => ({
  id: datatype.number(),
  isPremium: datatype.boolean(),
  price: datatype.number(),
  previewImage: image.image(),
  city: {
    location: {
      latitude: datatype.number(),
      longitude: datatype.number(),
      zoom: datatype.number(),
    },
    name:address.direction(),
  },
  title:random.word(),
  description: company.catchPhraseDescriptor(),
  type:random.word(),
  images: company.suffixes(),
  rating: datatype.number(),
  bedrooms: datatype.number(),
  maxAdults: datatype.number(),
  goods: company.suffixes(),
  host: {
    avatarUrl: internet.url(),
    id: datatype.number(),
    isPro: datatype.boolean(),
    name: internet.avatar(),
  },
  location: {
    latitude: datatype.number(),
    longitude: datatype.number(),
    zoom: datatype.number(),
  },
});

export const fakeOffersList = new Array(10).map(() => makeFakeOffer());

export const makeFakeReview = ():Review => ({
  hotelId: datatype.number(),
  comment: random.word(),
  date: random.word(),
  id: datatype.number(),
  rating: datatype.number(),
  user: {
    avatarUrl: internet.url(),
    id: datatype.number(),
    isPro: datatype.boolean(),
    name: random.word(),
  }
});

export const fakeReviewList = new Array(10).map(() => makeFakeReview());


export const makeFakeComment = ():ReviewComment => ({
  hotelId: datatype.number(),
  comment: random.word(),
  rating: datatype.number(),
});

export const makeFakeAppProcessData = () => ({
  city: random.word(),
  focusCardId: datatype.number(),
  sortType: random.word(),
});


