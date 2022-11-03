type LocationCoordinates = {
    latitude: number;
    longitude: number;
    zoom: number;
};

export type OfferCity = {
  location: LocationCoordinates;
  name:string;
}


export type Offer = {
  id: number;
  isPremium: boolean;
  cost: number;
  previewImage: string;
  city: OfferCity;
  title:string;
  description: string;
  accommodation:string;
  images: string[];
  rating: number;
  bedrooms: number;
  maxAdults: number;
  goods: string[];
  host: {
    avatarUrl: string;
    id: number;
    isPro: boolean;
    name: string;
  };
  location: LocationCoordinates;
}

export type Offers = Offer[];
