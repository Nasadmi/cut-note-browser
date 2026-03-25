import { useState, type ReactNode } from "react";
import { SearchContext } from "../context/Search.context";

export const SearchProvider = ({ children }: { children: ReactNode }) => {
    const [data, setData] = useState<number>(0)

    return (
        <SearchContext.Provider value={{ data, setData }}>
            { children }
        </SearchContext.Provider>
    )
}