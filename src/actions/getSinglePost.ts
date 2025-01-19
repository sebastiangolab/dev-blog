"use server";

import axios from "axios";
import AxiosWP from "@/lib/AxiosWP";
import normalizeSinglePostResponseData from "@/helpers/normalizeSinglePostResponseData";
import {
  AuthorResponseData,
  CategoriesResponseData,
  FeaturedImageResponseData,
  PostData,
} from "@/types/postsActionsTypes";

export type SinglePostResponseData = {
  data: {
    post: PostData & {
      author: AuthorResponseData;
      categories: CategoriesResponseData;
      featuredImage: FeaturedImageResponseData;
    };
  };
};

const getSinglePost = async (slug: string): Promise<PostData | null> => {
  const query = `
    query GetSinglePost {
      post(idType: SLUG, id: "${slug}") {
        id
        title
        excerpt
        content
        date
        modified
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
            mediaDetails {
              height
              width
            }
          }
        }
      }
    }
    `;

  try {
    const response = await AxiosWP.post<SinglePostResponseData>("/", {
      query,
    });

    const responsePostData = response.data.data?.post;

    return responsePostData
      ? normalizeSinglePostResponseData(responsePostData)
      : null;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(error.message);
    } else {
      console.error("Something wrong while get single post data");
    }

    return null;
  }
};

export default getSinglePost;
