import { ReactElement } from "react";
import Link from "next/link";
import "./header.styles.css";

const Header = (): ReactElement => {
  return (
    <div className="wrapper">
      <Link href="/" title="front page" className="logo">
        ImDevBlog<span className="primary-color">.</span>
      </Link>

      <Link href="/" title="contact" className="menu-link">
        Contact
      </Link>
    </div>
  );
};

export default Header;
