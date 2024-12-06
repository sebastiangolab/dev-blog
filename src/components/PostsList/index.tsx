import { ReactElement } from "react";
import getPosts from "@/actions/getPosts";
import PostTile from "../PostTile";

const PostsList = async (): Promise<ReactElement> => {
  const posts = await getPosts();

  return (
    <div>
      {posts.map((post) => {
        const { id, ...postData } = post;

        return <PostTile key={id} {...postData} />;
      })}
    </div>
  );
};

export default PostsList;
