import { useEffect, useState } from "react";
import { Search } from "./components/Search";
import { useSearch } from "./hooks/useSearch";
import json from "../notas_de_corte.json";
import type { MarkList } from "./types/markList";

function App() {
  const { data } = useSearch();
  const [list, setList] = useState<MarkList>(json as MarkList);

  useEffect(() => {
    if (data === 0) return;
    const marks = (json as MarkList)
      .filter((value) => parseFloat(value.mark.replace(",", ".")) <= data)
      .sort(
        (a, b) =>
          parseFloat(b.mark.replace(",", ".")) -
          parseFloat(a.mark.replace(",", ".")),
      );
    setList(marks);
  }, [data]);

  return (
    <>
      <Search />
      <main className={`overflow-auto max-h-[77dvh]`}>
        <table className="w-[98%] mx-auto overflow-auto font-medium">
          <thead>
            <tr>
              <th className="bg-indigo-500 rounded-tl-2xl text-white py-1">
                Universidad
              </th>
              <th className="bg-purple-700 border-x-4 border-x-slate-900 text-white py-1">
                Carrera
              </th>
              <th className="bg-violet-500 rounded-tr-2xl text-white py-1">
                Nota de corte
              </th>
            </tr>
          </thead>
          <tbody>
            {list.map((value, i) => (
              <tr key={i}>
                <td
                  className={`bg-indigo-500 px-1 border-y-4 border-y-slate-900 py-2 text-white text-center ${i === list.length - 1 && "rounded-bl-2xl"}`}
                >
                  {value.college}
                </td>
                <td className="bg-purple-700 border-y-4 border-y-slate-900 border-x-4 border-x-slate-900 px-1 text-white text-center">
                  {value.career}
                </td>
                <td
                  className={`bg-violet-500 border-y-4 border-y-slate-900 px-1 text-white text-center ${i === list.length - 1 && "rounded-br-2xl"}`}
                >
                  {value.mark}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </>
  );
}

export default App;
