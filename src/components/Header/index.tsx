import { ReactElement } from "react";
import Link from "next/link";
import SearchElement from "../SearchElement";
import styles from "./header.module.css";

const Header = (): ReactElement => {
  return (
    <div className={styles.wrapper}>
      <Link href="/" title="main page" className={styles.logo}>
        ImDevBlog<span className="primary-color">.</span>
      </Link>

      <SearchElement />

      <Link href="/" title="contact" className={styles.menuLink}>
        Contact
      </Link>
    </div>
  );
};

export default Header;
