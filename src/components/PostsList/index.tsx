"use client";

import { ReactElement, useContext, useEffect, useState } from "react";
import PostTile from "../PostTile";
import { PostData } from "@/types/postsActionsTypes";
import getPosts from "@/actions/getPosts";
import PostTilePlaceholder from "../PostTilePlaceholder";
import { LoadingPostsStateContext } from "@/providers/LoadingPostsStateProvider";
import { useInView } from "react-intersection-observer";
import BarLoader from "react-spinners/BarLoader";
import styles from "./postsList.module.css";

type PostsListProps = {
  initPosts: PostData[];
  categoryParam?: string;
};

const PostsList = ({
  initPosts,
  categoryParam,
}: PostsListProps): ReactElement<PostsListProps> => {
  const [posts, setPosts] = useState<PostData[]>(initPosts);
  const [postsNumberVisible, setPostsNumberVisible] = useState<number>(3);

  const { ref: postsEndRef, inView: postsEndView } = useInView();

  const [isLoadPosts, setIsLoadPosts] = useState<boolean>(false);
  const { isPostsLoading, setIsPostsLoading } = useContext(
    LoadingPostsStateContext,
  );

  const loadMorePosts = async () => {
    const newPosts = await getPosts(postsNumberVisible, categoryParam);
    setPosts(newPosts);

    setIsPostsLoading(false);
    setIsLoadPosts(false);
  };

  useEffect(() => {
    setPostsNumberVisible(3);

    loadMorePosts();
  }, [categoryParam]);

  useEffect(() => {
    loadMorePosts();
  }, [postsNumberVisible]);

  useEffect(() => {
    if (posts.length < postsNumberVisible) {
      return;
    }

    if (!postsEndView) {
      setIsLoadPosts(false);

      return;
    }

    setIsLoadPosts(true);
    setPostsNumberVisible((prevValue) => prevValue + 3);
  }, [postsEndView]);

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

      {isLoadPosts ? <BarLoader /> : null}

      <div ref={postsEndRef} className={styles.postsEndElement}></div>
    </div>
  );
};

export default PostsList;
