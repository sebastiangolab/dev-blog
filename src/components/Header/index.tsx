import { ReactElement } from "react";
import Link from "next/link";
import "./header.styles.css";

const Header = (): ReactElement => {
  return (
    <div className="header__wrapper">
      <Link href="/" title="front page" className="header__logo">
        ImDevBlog<span className="primary-color">.</span>
      </Link>

      <Link href="/" title="contact" className="header__menu-link">
        Contact
      </Link>
    </div>
  );
};

export default Header;
