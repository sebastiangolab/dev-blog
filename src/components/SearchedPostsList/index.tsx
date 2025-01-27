import React, { ReactElement } from "react";
import Link from "next/link";
import { PostData } from "@/types/postsActionsTypes";
import FeaturedImage from "../FeaturedImage";
import styles from "./searchedPostsList.module.css";

type SearchedPostsProps = {
  posts: PostData[];
  isLoading: boolean;
};

const SearchedPostsList = ({
  posts,
  isLoading,
}: SearchedPostsProps): ReactElement<SearchedPostsProps> => {
  if (isLoading) {
    return <p className={styles.placeholder}>Loading...</p>;
  }

  if (posts.length === 0) {
    return <p className={styles.placeholder}>No searched posts...</p>;
  }

  return (
    <>
      {posts.map(({ slug, title, featuredImage }) => (
        <Link
          key={slug}
          href={`/${slug}`}
          title={title}
          className={styles.post}
        >
          <div className={styles.title}>{title}</div>

          {featuredImage ? (
            <FeaturedImage
              link={featuredImage.link}
              alt={featuredImage.altText}
              width={90}
              height={60}
              className={styles.featuredImage}
            />
          ) : null}
        </Link>
      ))}
    </>
  );
};

export default SearchedPostsList;
