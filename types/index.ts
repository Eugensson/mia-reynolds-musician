export type Event = {
  id: string;
  date: {
    month: string;
    day: string;
  };
  location: {
    city: string;
    country: string;
    address: string;
  };
  priceRange: string;
};

export type Album = {
  id: string;
  img: string;
  title: string;
  tracks: Track[];
};

export type Track = {
  title: string;
  src: string;
};

export type Post = {
  id: string;
  date: string;
  title: string;
  description: string;
};
