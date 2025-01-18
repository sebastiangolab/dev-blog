import { ReactElement, ReactNode } from "react";
import normalizeMarkdownH2Title from "@/helpers/normalizeMarkdownH2Title";
import styles from "../MarkdownContent/markdownContent.module.css";

export enum MarkdownTitleType {
  H2 = "h2",
  H3 = "h3",
}

type MarkdownTitleProps = {
  children: ReactNode;
  type: MarkdownTitleType;
};

const MarkdownTitle = ({
  children,
  type,
  ...restProps
}: MarkdownTitleProps): ReactElement<MarkdownTitleProps> | null => {
  if (type === MarkdownTitleType.H2) {
    if (!children) {
      return null;
    }

    return (
      <h2
        {...restProps}
        className={styles.h2}
        id={normalizeMarkdownH2Title(children.toString())}
      >
        {children}
      </h2>
    );
  }

  if (type === MarkdownTitleType.H3) {
    return (
      <h3 {...restProps} className={styles.h3}>
        {children}
      </h3>
    );
  }

  return <></>;
};

export default MarkdownTitle;
