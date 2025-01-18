import { ReactElement } from "react";
import styles from "./singlePostPlaceholder.module.css";

const SinglePostPlaceholder = (): ReactElement => {
  return (
    <div>
      <div className={`${styles.title} ${styles.element}`}></div>

      <div className={styles.details}>
        <div className={styles.element}></div>
        <div className={styles.element}></div>
        <div className={styles.element}></div>
      </div>

      <div className={`${styles.image} ${styles.element}`}></div>

      <div className={styles.text}>
        <div className={styles.element}></div>
        <div className={styles.element}></div>
        <div className={styles.element}></div>
        <div className={styles.element}></div>
        <div className={styles.element}></div>
        <div className={styles.element}></div>
      </div>
    </div>
  );
};

export default SinglePostPlaceholder;
