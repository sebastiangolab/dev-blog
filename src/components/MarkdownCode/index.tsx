"use client";

import { cloneElement, ReactElement, ReactNode, useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import styles from "../MarkdownContent/markdownContent.module.css";

type MarkdownContentProps = {
  children: ReactNode;
  className?: string;
};

const MarkdownCode = ({
  children,
  className,
  ...restProps
}: MarkdownContentProps): ReactElement<MarkdownContentProps> => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const codeComponent: ReactElement | null =
    Array.isArray(children) && children.length > 0 ? children[0] : null;

  if (!codeComponent) {
    return <></>;
  }

  const classNames = className ?? "";
  const classNamesArray = classNames.split(" ");

  let codeComponentWithAdditionalClasses = cloneElement(codeComponent, {
    className:
      classNamesArray.length > 1 ? classNamesArray[1] : "language-javascript",
  });

  return (
    <pre {...restProps} className={`${styles.code} ${styles.element}`}>
      {codeComponentWithAdditionalClasses}
    </pre>
  );
};

export default MarkdownCode;
