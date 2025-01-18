import React, { ReactElement } from "react";
import Image from "next/image";
import styles from "./featuredImage.module.css";

type FeaturedImageProps = {
  link: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
};

const FeaturedImage = ({
  link,
  alt,
  width,
  height,
  className,
}: FeaturedImageProps): ReactElement<FeaturedImageProps> => {
  return (
    <div className={`${styles.imageWrapper} ${className ? className : ""}`}>
      <Image
        src={link}
        alt={alt}
        width={width}
        height={height}
        className={styles.image}
      />
    </div>
  );
};

export default FeaturedImage;
