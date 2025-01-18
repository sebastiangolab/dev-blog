import { ReactElement } from "react";
import Markdown from "markdown-to-jsx";
import MarkdownContent, { MarkdownContentType } from "../MarkdownContent";
import MarkdownTitle, { MarkdownTitleType } from "../MarkdownTitle";
import MarkdownCode from "../MarkdownCode";

type StyledMarkdownProps = {
  children: string;
};

const markdownOverrides = {
  h2: {
    component: MarkdownTitle,
    props: {
      type: MarkdownTitleType.H2,
    },
  },
  h3: {
    component: MarkdownTitle,
    props: {
      type: MarkdownTitleType.H3,
    },
  },
  p: {
    component: MarkdownContent,
    props: {
      type: MarkdownContentType.PARAGRAPH,
    },
  },
  pre: {
    component: MarkdownCode,
    props: {
      type: MarkdownContentType.CODE,
    },
  },
  figure: {
    component: MarkdownContent,
    props: {
      type: MarkdownContentType.IMAGE,
    },
  },
  ul: {
    component: MarkdownContent,
    props: {
      type: MarkdownContentType.LIST,
    },
  },
  blockquote: {
    component: MarkdownContent,
    props: {
      type: MarkdownContentType.BLOCKQUOTE,
    },
  },
};

const StyledMarkdown = ({
  children,
}: StyledMarkdownProps): ReactElement<StyledMarkdownProps> => {
  return (
    <Markdown options={{ forceBlock: true, overrides: markdownOverrides }}>
      {children}
    </Markdown>
  );
};

export default StyledMarkdown;
