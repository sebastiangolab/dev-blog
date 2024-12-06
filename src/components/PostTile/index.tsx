import { ReactElement } from "react";
import Image from "next/image";
import { PostData } from "@/actions/getPosts";
import calendarIcon from "@/icons/calendar.svg";
import user from "@/icons/user.svg";
import "./postTile.styles.css";

type PostTileProps = Omit<PostData, "id" | "content">;

const PostTile = ({
  title,
  excerpt,
  category,
  date,
  author,
  featuredImage,
}: PostTileProps): ReactElement<PostTileProps> => {
  return (
    <div className="post-tile__wrapper">
      <div className="post-tile__content">
        {category ? <p className="post-tile__category">{category}</p> : null}

        <h1 className="post-tile__title">{title}</h1>

        <p className="post-tile__excerpt">{excerpt}</p>

        <div className="post-tile__details">
          <p className="post-tile__details-item grey-color">
            <Image
              priority
              src={calendarIcon}
              alt="date icon"
              width={19}
              height={19}
              className="post-tile__details-item-icon"
            />
            {date}
          </p>

          <p className="post-tile__details-item grey-color">
            <Image
              priority
              src={user}
              alt="author icon"
              width={19}
              height={19}
              className="post-tile__details-item-icon"
            />
            {author}
          </p>
        </div>
      </div>

      {featuredImage ? (
        <div className="post-tile__image-wrapper">
          <Image
            src={featuredImage.link}
            alt={featuredImage.altText}
            width={250}
            height={166}
            className="post-tile__featured-image"
          />
        </div>
      ) : null}
    </div>
  );
};

export default PostTile;
