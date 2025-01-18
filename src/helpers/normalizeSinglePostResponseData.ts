import {
  AuthorResponseData,
  CategoriesResponseData,
  FeaturedImageResponseData,
  PostData,
} from "@/types/postsActionsTypes";

const normalizeSinglePostResponseData = (
  data: PostData & {
    author: AuthorResponseData;
    categories: CategoriesResponseData;
    featuredImage: FeaturedImageResponseData;
  },
): PostData => {
  const { author, categories, featuredImage, ...postData } = data ?? {};

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
};

export default normalizeSinglePostResponseData;
