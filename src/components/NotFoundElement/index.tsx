import React, { ReactElement } from "react";
import Link from "next/link";
import styles from "./notFoundElement.module.css";

const NotFoundElement = (): ReactElement => {
  return (
    <>
      <h1 className={styles.title}>
        <strong>Page not found</strong>
      </h1>{" "}
      <p className={styles.text}>
        Current page not exist. Please check url or{" "}
        <Link href="/" title="home page" className={styles.link}>
          click here
        </Link>{" "}
        to redirect on home page.
      </p>
    </>
  );
};

export default NotFoundElement;
