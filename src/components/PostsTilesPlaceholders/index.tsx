import { ReactElement } from "react";
import styles from "./PostsTilesPlaceholders.module.css";

const PostsTilesPlaceholders = (): ReactElement => {
  const placeholderElement = (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={`${styles.category} ${styles.element}`}></div>

        <div className={`${styles.title} ${styles.element}`}></div>

        <div className={styles.text}>
          <div className={styles.element}></div>
          <div className={styles.element}></div>
          <div className={styles.element}></div>
        </div>

        <div className={styles.details}>
          <div className={styles.element}></div>
          <div className={styles.element}></div>
        </div>
      </div>

      <div className={`${styles.image} ${styles.element}`}></div>
    </div>
  );

  return (
    <>
      {placeholderElement}
      {placeholderElement}
      {placeholderElement}
    </>
  );
};

export default PostsTilesPlaceholders;
