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

  const flatFeaturedImageLink = featuredImage?.node?.mediaItemUrl;
  const flatFeaturedImageAltText = featuredImage?.node?.altText;
  const flatFeaturedImageWidth = featuredImage?.node?.mediaDetails.width;
  const flatFeaturedImageHeight = featuredImage?.node?.mediaDetails.height;

  const flatFeaturedImage = flatFeaturedImageLink
    ? {
        mediaItemUrl: flatFeaturedImageLink,
        altText: flatFeaturedImageAltText ?? "",
        width: flatFeaturedImageWidth ?? 0,
        height: flatFeaturedImageHeight ?? 0,
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
