"use server";

import axios from "axios";
import AxiosWP from "@/lib/AxiosWP";
import normalizeCategoriesResponseData from "@/helpers/normalizeCategoriesResponseData";
import { CategoriesResponseData } from "@/types/postsActionsTypes";

export type CategoriesResponseDataQuery = {
  data: {
    categories: CategoriesResponseData;
  };
};

export type CategoryData = {
  name: string;
  slug: string;
};

const getCategorieas = async (): Promise<CategoryData[]> => {
  const query = `
  query GetCategories {
    categories(where: {hideEmpty: true}) {
      edges {
        node {
          name
          slug
        }
      }
    }
  }
    `;

  try {
    const response = await AxiosWP.post<CategoriesResponseDataQuery>("/", {
      query,
    });

    return normalizeCategoriesResponseData(response.data);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(error.message);
    } else {
      console.error("Something wrong while get categories");
    }

    return [];
  }
};

export default getCategorieas;
