export const formatDate = (rawDate: string | undefined) => {
  if (!rawDate) {
    return "";
  }

  const formattedDate = new Date(rawDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return formattedDate;
};
