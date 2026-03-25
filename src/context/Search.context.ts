import { createContext, type Dispatch, type SetStateAction } from "react";

type SearchContextProps = {
    data: number;
    setData: Dispatch<SetStateAction<number>>
}

export const SearchContext = createContext<SearchContextProps | undefined>(undefined);