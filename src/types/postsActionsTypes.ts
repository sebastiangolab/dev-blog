export type PostData = {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  slug: string;
  date: string;
  modified: string;
  author: string;
  category: string | null;
  featuredImage: {
    mediaItemUrl: string;
    altText: string;
    height: number;
    width: number;
  } | null;
};

export type AuthorResponseData = {
  node: {
    name: string;
  };
};

export type CategoriesResponseData = {
  edges: {
    node: {
      name: string;
      slug: string;
    };
  }[];
};

export type FeaturedImageResponseData = {
  node: {
    altText: string;
    mediaItemUrl: string;
    mediaDetails: {
      height: number;
      width: number;
    };
  };
};
