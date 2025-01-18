const normalizeMarkdownH2Title = (text: string) => {
  return text
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
};

export default normalizeMarkdownH2Title;
