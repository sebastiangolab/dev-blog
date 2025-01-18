import { ReactElement } from "react";
import Image from "next/image";
import normalizePostDate from "@/helpers/normalizePostDate";
import calendarIcon from "@/icons/calendar-black.svg";
import user from "@/icons/user-black.svg";
import { PostData } from "@/types/postsActionsTypes";
import StyledMarkdown from "../StyledMarkdown";
import PostDetailWithIcon from "../PostDetailWithIcon";
import CategoryElement from "../CategoryElement";
import postyDetailWithIconStyles from "../PostDetailWithIcon/postDetailWithIcon.module.css";
import styles from "./singlePost.module.css";

const SinglePost = ({
  title,
  category,
  date,
  author,
  featuredImage,
  content,
}: PostData): ReactElement<PostData> => {
  return (
    <div>
      <h1 id="intro" className={styles.title}>
        {title}
      </h1>

      <div className={styles.details}>
        {category ? (
          <div className={postyDetailWithIconStyles.wrapper}>
            <CategoryElement categoryName={category} />
          </div>
        ) : null}

        <PostDetailWithIcon icon={calendarIcon} iconAlt="author icon" isBig>
          {normalizePostDate(date)}
        </PostDetailWithIcon>

        <PostDetailWithIcon icon={user} iconAlt="author icon" isBig>
          {author}
        </PostDetailWithIcon>
      </div>

      {featuredImage ? (
        <div className={styles.imageWrapper}>
          <Image
            src={featuredImage.link}
            alt={featuredImage.altText}
            width={864}
            height={500}
            className={styles.featuredImage}
          />
        </div>
      ) : null}

      <StyledMarkdown>{content}</StyledMarkdown>
    </div>
  );
};

export default SinglePost;
