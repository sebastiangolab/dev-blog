import { ReactElement } from "react";
import { Metadata } from "next";
import getPosts from "@/actions/getPosts";
import getCategorieas from "@/actions/getCategories";
import { LoadingPostsStateProvider } from "@/providers/LoadingPostsStateProvider";
import { POSTS_NUMBER } from "@/variables";
import TwoColumnsLayout from "@/components/TwoColumnsLayout/TwoColumnsLayout";
import CategoriesFilters from "@/components/CategoriesFilters";
import PostsList from "@/components/PostsList";

type HomePageProps = {
  searchParams?: Promise<{
    category?: string;
  }>;
};

export const metadata: Metadata = {
  title: "ImDevBlog",
  description:
    "Blog about programming, javascript, react, nextjs, good practices and others.",
  openGraph: {
    title: "Programming Blog | ImDevBlog",
    description:
      "Blog about programming, javascript, react, nextjs, good practices and others.",
  },
};

const HomePage = async ({
  searchParams,
}: HomePageProps): Promise<ReactElement<HomePageProps>> => {
  const allParams = await searchParams;
  const categoryParam = allParams?.category;

  const initPosts = await getPosts(POSTS_NUMBER, categoryParam);
  const categories = await getCategorieas();

  return (
    <LoadingPostsStateProvider>
      <TwoColumnsLayout secondColumnContent={null}>
        <CategoriesFilters categories={categories} />

        <PostsList initPosts={initPosts} categoryParam={categoryParam} />
      </TwoColumnsLayout>
    </LoadingPostsStateProvider>
  );
};

export default HomePage;
