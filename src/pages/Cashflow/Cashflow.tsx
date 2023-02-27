import { Money } from "phosphor-react";
import { SearchForm } from "./components/SearchForm";
import { Summary } from "./components/Summary";

export function Cashflow() {
  return (
    <>
      <Summary />
      
      <main className="w-full max-w-6xl mx-auto mt-12 px-6">
        <SearchForm />
        <div className="overflow-x-auto relative mb-4">
          <table className="w-full border-separate border-spacing-y-1 mt-6">
            <tbody>
              <tr className="bg-zinc-800 hover:bg-zinc-900">
                <td className="py-5 px-8 rounded-tl-lg">Box</td>
                <td className="py-5 px-8 text-green-600">R$ 1200,00</td>
                <td className="py-5 px-8">Venda</td>
                <td className="py-5 px-8 rounded-tr-lg">13/01/2023</td>
              </tr>
              <tr className="bg-zinc-800 hover:bg-zinc-900">
                <td className="py-5 px-8 rounded-bl-lg">Embalagens</td>
                <td className="py-5 px-8  text-red-600">- R$ 200,00</td>
                <td className="py-5 px-8">Logística</td>
                <td className="py-5 px-8 rounded-br-lg">13/01/2023</td>
              </tr>
            </tbody>
          </table>
        </div>

      </main>

    </>
  )
}