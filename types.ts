
export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: string;
  isBestseller?: boolean;
  image: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: string;
}

export interface GroundingMetadata {
  groundingChunks: Array<{
    maps?: {
      uri: string;
      title: string;
    };
    web?: {
      uri: string;
      title: string;
    };
  }>;
}
