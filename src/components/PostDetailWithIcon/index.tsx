import { ReactElement, ReactNode } from "react";
import Image from "next/image";
import styles from "./postDetailWithIcon.module.css";

type PostDetailWithIconProps = {
  children: ReactNode;
  icon: any;
  iconAlt: string;
  isBig?: boolean;
};

const PostDetailWithIcon = ({
  children,
  icon,
  iconAlt,
  isBig,
}: PostDetailWithIconProps): ReactElement<PostDetailWithIconProps> => {
  return (
    <div className={styles.wrapper}>
      <Image
        priority
        src={icon}
        alt={iconAlt}
        width={isBig ? 21 : 19}
        height={isBig ? 21 : 19}
        className="post-detail-with-icon__detail-icon"
      />

      <p>{children}</p>
    </div>
  );
};

export default PostDetailWithIcon;
