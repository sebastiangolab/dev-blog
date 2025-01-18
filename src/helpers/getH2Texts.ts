const getH2Texts = (htmlString: string) => {
  const regex = /<h2[^>]*>(.*?)<\/h2>/g;
  const matches = htmlString.matchAll(regex);
  const h2Texts = Array.from(matches, (match) => match[1].trim());

  return h2Texts;
};

export default getH2Texts;
