"use client";

import React, {
  BaseSyntheticEvent,
  ReactElement,
  useEffect,
  useState,
} from "react";
import Image from "next/image";
import { useDebounce } from "use-debounce";
import getPosts from "@/actions/getPosts";
import searchIcon from "@/icons/search-grey.svg";
import { PostData } from "@/types/postsActionsTypes";
import SearchedPostsList from "../SearchedPostsList";
import Overlay from "../Overlay";
import styles from "./searchElement.module.css";

const SearchElement = (): ReactElement => {
  const [searchPhrase, setSearchPhrase] = useState<string>("");
  const [debouncedSearchPhrase] = useDebounce(searchPhrase, 500);

  const [searchedPosts, setSearchedPosts] = useState<PostData[] | null>(null);
  const [isPostsLoading, setIsPostsLoading] = useState<boolean>(false);

  const handleOnChange = (event: BaseSyntheticEvent) =>
    setSearchPhrase(event.target.value);

  const getSearchedPosts = async (searchPhrase: string) => {
    setIsPostsLoading(true);

    const posts = await getPosts(10, undefined, searchPhrase);

    setSearchedPosts(posts);
    setIsPostsLoading(false);
  };

  useEffect(() => {
    if (debouncedSearchPhrase) {
      getSearchedPosts(debouncedSearchPhrase);
    }
  }, [debouncedSearchPhrase]);

  useEffect(() => {
    if (!searchPhrase) {
      setSearchedPosts(null);
    }
  }, [searchPhrase]);

  const hasVisibleResults = Array.isArray(searchedPosts) || isPostsLoading;

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.inputWrapper}>
          <Image
            src={searchIcon}
            alt={searchIcon}
            width={20}
            height={20}
            className={styles.searchIcon}
          />

          <input
            type="text"
            placeholder="Type search phrase"
            value={searchPhrase}
            onChange={handleOnChange}
            className={styles.input}
          />
        </div>

        {hasVisibleResults ? (
          <div className={styles.results}>
            <SearchedPostsList
              posts={searchedPosts ?? []}
              isLoading={isPostsLoading}
            />
          </div>
        ) : null}
      </div>

      {hasVisibleResults ? (
        <Overlay onClickOutside={() => setSearchPhrase("")} />
      ) : null}
    </>
  );
};

export default SearchElement;
