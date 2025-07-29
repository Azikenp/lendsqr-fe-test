export const formatDate = (rawDate: string) => {
  const formattedDate = new Date(rawDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return formattedDate;
};
