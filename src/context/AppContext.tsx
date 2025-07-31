import { useState, ReactNode } from "react";
import { SearchContext } from "./Searchcontext";

export const SearchProvider = ({ children }: { children: ReactNode }) => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <SearchContext.Provider value={{ searchValue, setSearchValue }}>
      {children}
    </SearchContext.Provider>
  );
};
