"use client";

import { ReactElement, useContext, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import BarLoader from "react-spinners/BarLoader";
import getPosts from "@/actions/getPosts";
import { LoadingPostsStateContext } from "@/providers/LoadingPostsStateProvider";
import { PostData } from "@/types/postsActionsTypes";
import { POSTS_NUMBER } from "@/variables";
import PostTile from "../PostTile";
import PostTilePlaceholder from "../PostTilePlaceholder";
import styles from "./postsList.module.css";

type PostsListProps = {
  initPosts: PostData[];
  categoryParam?: string;
};

const PostsList = ({
  initPosts,
  categoryParam,
}: PostsListProps): ReactElement<PostsListProps> => {
  const [firstRender, setIsFirstRender] = useState<boolean>(true);
  const [posts, setPosts] = useState<PostData[]>(initPosts);
  const [postsNumberVisible, setPostsNumberVisible] =
    useState<number>(POSTS_NUMBER);

  const { ref: postsEndRef, inView: isPostsEndView } = useInView();
  const [isMorePostsLoading, setIsMorePostsLoading] = useState<boolean>(false);

  const { isPostsLoading, setIsPostsLoading } = useContext(
    LoadingPostsStateContext,
  );

  console.log(POSTS_NUMBER);

  const loadPosts = async () => {
    const newPosts = await getPosts(postsNumberVisible, categoryParam);
    setPosts(newPosts);

    setIsPostsLoading(false);
    setIsMorePostsLoading(false);
  };

  useEffect(() => {
    if (!firstRender) {
      setPostsNumberVisible(POSTS_NUMBER);

      loadPosts();
    }
  }, [categoryParam]);

  useEffect(() => {
    if (posts.length < postsNumberVisible) {
      return;
    }

    if (!isPostsEndView) {
      setIsMorePostsLoading(false);

      return;
    }

    setIsMorePostsLoading(true);
    setPostsNumberVisible((prevValue) => prevValue + POSTS_NUMBER);
  }, [isPostsEndView]);

  useEffect(() => {
    if (!firstRender) {
      loadPosts();
    }
  }, [postsNumberVisible]);

  useEffect(() => {
    setIsFirstRender(false);
  }, []);

  if (isPostsLoading) {
    return (
      <>
        <PostTilePlaceholder />
        <PostTilePlaceholder />
        <PostTilePlaceholder />
      </>
    );
  }

  return (
    <div>
      {posts.map((post) => {
        const { id, ...postData } = post;

        return <PostTile key={id} {...postData} />;
      })}

      {isMorePostsLoading ? <BarLoader /> : null}

      <div ref={postsEndRef} className={styles.postsEndElement}></div>
    </div>
  );
};

export default PostsList;
