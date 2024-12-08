import AxiosWP from "@/lib/AxiosWP";

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

type AuthorResponseData = {
  node: {
    name: string;
  };
};

type CategoriesResponseData = {
  edges: {
    node: {
      name: string;
    };
  }[];
};

type FeaturedImageResponseData = {
  node: {
    altText: string;
    link: string;
  };
};

type PostsResponseData = {
  data: {
    posts: {
      edges: {
        node: {
          id: string;
          title: string;
          excerpt: string;
          content: string;
          slug: string;
          date: string;
          author: AuthorResponseData;
          categories: CategoriesResponseData;
          featuredImage: FeaturedImageResponseData;
        };
      }[];
    };
  };
};

const getPosts = async (): Promise<PostData[]> => {
  const query = `
      query GetAllPosts {
        posts {
          edges {
            node {
              id
              title
              excerpt
              content
              slug
              date
              author {
                node {
                  name
                }
              }
              categories {
                edges {
                  node {
                    name
                  }
                }
              }
              featuredImage {
                node {
                  altText
                  link
                }
              }
            }
          }
        }
      }
    `;

  const response = await AxiosWP.post<PostsResponseData>("/", {
    query,
  });

  const postsDataEdges = response.data.data?.posts?.edges ?? [];

  const postsData: PostData[] = postsDataEdges.map((postEdge) => {
    const { author, categories, featuredImage, ...postData } = postEdge.node;

    const flatAuthorValue = author?.node?.name ?? "";

    const flatCategoryValue = categories?.edges[0]?.node?.name ?? null;

    const flatFeaturedImageLink = featuredImage?.node?.link;
    const flatFeaturedImageAltText = featuredImage?.node?.altText;

    const flatFeaturedImage = flatFeaturedImageLink
      ? {
          link: flatFeaturedImageLink,
          altText: flatFeaturedImageAltText ?? "",
        }
      : null;

    return {
      ...postData,
      author: flatAuthorValue,
      category: flatCategoryValue,
      featuredImage: flatFeaturedImage,
    };
  });

  return postsData;
};

export default getPosts;
