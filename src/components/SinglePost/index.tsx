import { ReactElement } from "react";
import normalizePostDate from "@/helpers/normalizePostDate";
import calendarIcon from "@/icons/calendar-black.svg";
import user from "@/icons/user-black.svg";
import { PostData } from "@/types/postsActionsTypes";
import CategoryElement from "../CategoryElement";
import FeaturedImage from "../FeaturedImage";
import PostDetailWithIcon from "../PostDetailWithIcon";
import SinglePostPlaceholder from "../SinglePostPlaceholder";
import StyledMarkdown from "../StyledMarkdown";
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
        <FeaturedImage
          link={featuredImage.mediaItemUrl}
          alt={featuredImage.altText}
          width={featuredImage.width}
          height={featuredImage.height}
          className={styles.featuredImage}
        />
      ) : null}

      <StyledMarkdown>{content}</StyledMarkdown>
    </div>
  );
};

export default SinglePost;
