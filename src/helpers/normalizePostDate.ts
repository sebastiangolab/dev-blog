const normalizePostDate = (date: string): string => {
  const dateFormatOptions: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return new Date(date).toLocaleDateString(undefined, dateFormatOptions);
};

export default normalizePostDate;
