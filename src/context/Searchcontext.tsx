import { createContext } from "react";
import { SearchContextType } from "../types/allTypes";

export const SearchContext = createContext<SearchContextType | undefined>(
  undefined
);
