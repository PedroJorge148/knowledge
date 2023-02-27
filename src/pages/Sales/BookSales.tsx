import { Trash } from "phosphor-react";
import { SearchForm } from "./components/SearchForm";

export function BookSales() {
  return (
    <div className="flex flex-col gap-4 overflow-x-auto relative rounded-lg m-2 my-3">
      <SearchForm />
      <table className="w-full text-sm text-center text-gray-300">
        <thead className="bg-gray-700 text-gray-100">
          <tr>
            <th scope="col" className="py-3 px-2">
              #
            </th>
            <th scope="col" className="py-3 px-4">
              Nome - Autor
            </th>
            <th scope="col" className="py-3 px-6">
              Data de Venda
            </th>
            <th scope="col" className="py-3 px-6">
              Qtd
            </th>
            <th scope="col" className="py-3 px-6">
              PC
            </th>
            <th scope="col" className="py-3 px-6">
              PV
            </th>
            <th scope="col" className="py-3 px-6">
              Lucro p/L
            </th>
            <th scope="col" className="py-3 px-6">
              Lucro total
            </th>
            <th scope="col" className="py-3 px-6">
              -
            </th>
          </tr>
        </thead>
        
        <tbody>
          <tr className="border-b bg-gray-800 border-gray-700 hover:bg-gray-700">
            <td className="py-4 px-2">
              1
            </td>
            <th scope="row" className="py-4 px-6 font-medium whitespace-nowrap text-white">
              A Abadia de Northanger - Jane Austen
            </th>
            <td className="py-4 px-6">
              15/06/2021
            </td>
            <td className="py-4 px-6">
              2
            </td>
            <td className="py-4 px-6">
              R$ 11.43
            </td>
            <td className="py-4 px-6">
              R$ 15.00
            </td>
            <td className="py-4 px-6">
              R$ 3.57
            </td>
            <td className="py-4 px-6">
              R$ 7.14
            </td>
            <td className="py-4 px-6">
              <button
                type="submit"
                onClick={() => {if(window.confirm('Deletar esse registro?')){}}}
                className="flex items-center justify-center h-8 px-3 py-4 rounded-lg  text-gray-50 bg-red-600 hover:bg-red-700 focus:outline-none"
              >
                <Trash size={17} />
              </button>
            </td>
          </tr>

          {/* End Line */}
          <tr className="border-b text-center bg-zinc-800 border-gray-700 hover:bg-gray-600">
              <td className="py-4 px-2">
                -
              </td>
              <td className="py-4 px-2"> 
              - 
              </td>
              <td className="py-4 px-6 text-right">
                Total:
              </td>
              <td className="py-4 px-6">
                4
              </td>
              <td className="py-4 px-6">
                R$ 22.86
              </td>
              <td className="py-4 px-6">
                R$ 30.00
              </td>
              <td className="py-4 px-6">
                R$ 7.14
              </td>
              <td> R$ 7.14 </td>
              <td> - </td>
            </tr>
        </tbody>
      </table>
    </div>
  )
}