import { ReactElement } from "react";
import Link from "next/link";
import { decode } from "html-entities";
import Markdown from "markdown-to-jsx";
import normalizePostDate from "@/helpers/normalizePostDate";
import calendarIcon from "@/icons/calendar-grey.svg";
import userIcon from "@/icons/user-grey.svg";
import { PostData } from "@/types/postsActionsTypes";
import CategoryElement from "../CategoryElement";
import FeaturedImage from "../FeaturedImage";
import PostDetailWithIcon from "../PostDetailWithIcon";
import styles from "./postTile.module.css";

type PostTileProps = Omit<PostData, "id" | "content">;

const PostTile = ({
  title,
  excerpt,
  category,
  date,
  author,
  featuredImage,
  slug,
}: PostTileProps): ReactElement<PostTileProps> => {
  return (
    <Link className={styles.wrapper} href={`/${slug}`}>
      <div className={styles.content}>
        {category ? (
          <div className={styles.category}>
            <CategoryElement categoryName={category} />
          </div>
        ) : null}

        <h1 className={styles.title}>{title}</h1>

        <Markdown className={styles.excerpt} options={{ forceBlock: true }}>
          {decode(excerpt)}
        </Markdown>

        <div className={styles.details}>
          <PostDetailWithIcon icon={calendarIcon} iconAlt="calendar icon">
            {normalizePostDate(date)}
          </PostDetailWithIcon>

          <PostDetailWithIcon icon={userIcon} iconAlt="user icon">
            {author}
          </PostDetailWithIcon>
        </div>
      </div>

      {featuredImage ? (
        <FeaturedImage
          link={featuredImage.mediaItemUrl}
          alt={featuredImage.altText}
          width={250}
          height={166}
          className={styles.featuredImage}
        />
      ) : null}
    </Link>
  );
};

export default PostTile;
