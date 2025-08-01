import { useContext } from "react";
import { SearchContext } from "../context/Searchcontext";

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context)
    throw new Error("useSearch must be used within a SearchProvider");
  return context;
};
