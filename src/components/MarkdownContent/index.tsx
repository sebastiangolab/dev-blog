import { ReactElement, ReactNode } from "react";
import styles from "./markdownContent.module.css";

export enum MarkdownContentType {
  PARAGRAPH = "paragraph",
  CODE = "code",
  BLOCKQUOTE = "blockquote",
  IMAGE = "image",
  LIST = "list",
}

type MarkdownContentProps = {
  children: ReactNode;
  type: MarkdownContentType;
};

const MarkdownContent = ({
  children,
  type,
  ...restProps
}: MarkdownContentProps): ReactElement<MarkdownContentProps> => {
  if (type === MarkdownContentType.PARAGRAPH) {
    return (
      <p {...restProps} className={`${styles.p} ${styles.element}`}>
        {children}
      </p>
    );
  }

  if (type === MarkdownContentType.LIST) {
    return (
      <ul {...restProps} className={`${styles.list} ${styles.element}`}>
        {children}
      </ul>
    );
  }

  if (type === MarkdownContentType.BLOCKQUOTE) {
    return (
      <blockquote
        {...restProps}
        className={`${styles.blockquote} ${styles.element}`}
      >
        {children}
      </blockquote>
    );
  }

  if (type === MarkdownContentType.IMAGE) {
    return (
      <figure {...restProps} className={`${styles.image} ${styles.element}`}>
        {children}
      </figure>
    );
  }

  return <></>;
};

export default MarkdownContent;
