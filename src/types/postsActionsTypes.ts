export type PostData = {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  slug: string;
  date: string;
  author: string;
  category: string | null;
  featuredImage: {
    link: string;
    altText: string;
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
    link: string;
  };
};
