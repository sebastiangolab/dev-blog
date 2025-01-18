"use server";

import normalizeSinglePostResponseData from "@/helpers/normalizeSinglePostResponseData";
import AxiosWP from "@/lib/AxiosWP";
import {
  AuthorResponseData,
  CategoriesResponseData,
  FeaturedImageResponseData,
  PostData,
} from "@/types/postsActionsTypes";
import axios from "axios";

export type PostsResponseData = {
  data: {
    posts: {
      edges: {
        node: PostData & {
          author: AuthorResponseData;
          categories: CategoriesResponseData;
          featuredImage: FeaturedImageResponseData;
        };
      }[];
    };
  };
};

const getPosts = async (
  count: number,
  categoryParam?: string,
  searchParam?: string,
): Promise<PostData[]> => {
  const countQuery = `first: ${count}`;
  const searchParamQuery = `search: "${searchParam || ""}"`;
  const categoryParamQuery = `categoryName: "${categoryParam || ""}"`;

  const query = `
      query GetAllPosts {
        posts(${countQuery}, where: {${categoryParamQuery}, ${searchParamQuery}}) {
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

  try {
    const response = await AxiosWP.post<PostsResponseData>("/", {
      query,
    });

    const postsDataEdges = response.data.data?.posts?.edges ?? [];

    const postsData: PostData[] = postsDataEdges.map((postEdge) =>
      normalizeSinglePostResponseData(postEdge.node),
    );

    return postsData;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(error.message);
    } else {
      console.error("Something wrong while get posts");
    }

    return [];
  }
};

export default getPosts;
