import { useContext } from "react"
import { SearchContext } from "../context/Search.context"

export const useSearch = () => {
    const ctx = useContext(SearchContext);
    if (!ctx) throw new Error('This component is not under search provider');
    return ctx;
}