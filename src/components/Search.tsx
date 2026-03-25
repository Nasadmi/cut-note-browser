import { type ChangeEvent } from "react"
import { useSearch } from "../hooks/useSearch";

export const Search = () => {
    const { setData } = useSearch();

    const onChange = (e: ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
        const value = parseFloat(e.target.value.replace(',', '.'));
        if (isNaN(value) || value > 14 || value < 5) {
            return;
        }
        setData(value)
    }
    
    return (
        <div className="flex flex-col items-center my-6 justify-center gap-3">
            <h1 className="text-slate-100 font-bold border-b-2 border-b-indigo-600 w-90 text-center">Buscar por tu nota de corte</h1>
            <input type="text" name="mark" id="mark" onChange={onChange} className="bg-white p-1 rounded-2xl text-center w-120 outline-0 focus:border-indigo-400 border-2 border-transparent duration-200 ease-in-out"/>
        </div>
    )
}