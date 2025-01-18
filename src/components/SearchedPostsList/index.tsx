import React, { ReactElement } from "react";
import Image from "next/image";
import Link from "next/link";
import { PostData } from "@/types/postsActionsTypes";
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
            <div className={styles.imageWrapper}>
              <Image
                src={featuredImage.link}
                alt={featuredImage.altText}
                width={250}
                height={166}
                className={styles.image}
              />
            </div>
          ) : null}
        </Link>
      ))}
    </>
  );
};

export default SearchedPostsList;
