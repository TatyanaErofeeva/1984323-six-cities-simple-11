export type Offer = {
  id: number;
  isPremium: boolean;
  cost: number;
  previewImage: string;
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
  city: {
    location: {
      latitude: number;
      longitude: number;
      zoom: number;
    };
    name: string;
  };
}

export type Offers = Offer[];
