import {
  CategoriesResponseDataQuery,
  CategoryData,
} from "@/actions/getCategories";

const normalizeCategoriesResponseData = (
  data: CategoriesResponseDataQuery,
): CategoryData[] => {
  const categoriesDataEdges = data.data?.categories?.edges ?? [];

  const categoriesData: CategoryData[] = categoriesDataEdges.map(
    (categoryData) => ({
      name: categoryData.node.name,
      slug: categoryData.node.slug,
    }),
  );

  return categoriesData;
};

export default normalizeCategoriesResponseData;
