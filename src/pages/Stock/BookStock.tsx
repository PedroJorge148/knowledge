import { PlusCircle, ListPlus, ShoppingCart, Pencil, Trash } from 'phosphor-react';
import * as Dialog from '@radix-ui/react-dialog'
import { AddBookModal } from "./components/AddBookModal";
import { AddPriceModal } from "./components/AddPriceModal";
import { AddCatalogButton } from "./components/Buttons/AddCatalogButton";
import { MakeSaleButton } from "./components/Buttons/MakeSaleButton";
import { EditBookButton } from "./components/Buttons/EditBookButton";
import { DeleteBookButton } from "./components/Buttons/DeleteBookButton";
import { SearchForm } from "./components/SearchForm";

export function BookStock() {
  return (
    <div className="flex flex-col gap-4 overflow-x-auto relative rounded-lg m-2 my-3">
      <SearchForm />
      <table className="w-full text-sm text-gray-400">
        <thead className="bg-gray-700 text-gray-400">
            <tr>
                <th scope="col" className="py-3 px-2">
                  #
                </th>
                <th scope="col" className="py-3 px-6">
                  Nome do Livro
                </th>
                <th scope="col" className="py-3 px-6">
                  Data de Compra
                </th>
                <th scope="col" className="py-3 px-6">
                  Est
                </th>
                <th scope="col" className="py-3 px-6">
                  PC
                </th>
                <th scope="col" className="py-3 px-6">
                  PV
                </th>
                <th scope="col" className="py-3 px-6">
                  Lucro P/L
                </th>
                <th scope="col" className="py-3">
                  <div className="flex items-center justify-center group ">
                    <Dialog.Root>
                      <Dialog.Trigger 
                        type="button" 
                        className="flex items-center group h-8 focus:outline-none text-gray-50 bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 transition-colors"
                      >
                        <PlusCircle size={17} weight="bold" />
                        <span className="pl-1">Livro</span>
                      </Dialog.Trigger>

                      <AddBookModal />
                    </Dialog.Root>
                    
                    <Dialog.Root>
                      <Dialog.Trigger 
                        type="button" 
                        className="flex items-center group h-8 focus:outline-none text-gray-50 bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 transition-colors"
                      >
                        <PlusCircle size={17} weight="bold" />
                        <span className="pl-1">Preço</span>
                      </Dialog.Trigger>
                      
                      <AddPriceModal />
                    </Dialog.Root>
                  </div>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="border-b text-center bg-gray-800 border-gray-700 hover:bg-gray-600">
                <td className="py-4 px-2">
                  1
                </td>
                <th scope="row" className="py-4 px-6 font-medium whitespace-nowrap text-white">
                  A Abadia de Northanger - Jane Austen
                </th>
                <td className="py-4 px-6">
                  10/06/2021
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
                <td className="py-4 px-6 flex items-center justify-center group gap-2">
                  <AddCatalogButton />
                  <MakeSaleButton />

                  <EditBookButton />
                  <DeleteBookButton />
                </td>
            </tr>
            <tr className="border-b text-center bg-gray-800 border-gray-700 hover:bg-gray-600">
                <td className="py-4 px-2">
                  2
                </td>
                <th scope="row" className="py-4 px-6 font-medium whitespace-nowrap text-white">
                  A Abadia de Northanger - Jane Austen
                </th>
                <td className="py-4 px-6">
                  10/06/2021
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
                <td className="py-4 px-6 flex items-center justify-center group gap-2">
                  <AddCatalogButton />
                  <MakeSaleButton />

                  <EditBookButton />
                  <DeleteBookButton />
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
              <td> - </td>
            </tr>
            
        </tbody>
      </table>
    </div>
  )
}