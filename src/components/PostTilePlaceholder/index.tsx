import { ReactElement } from "react";
import styles from "./postTilePlaceholder.module.css";

const PostTilePlaceholder = (): ReactElement => {
  return (
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
};

export default PostTilePlaceholder;
