import { Trash } from "phosphor-react";

export function DeleteBookButton() {
  return (
    <button
      title="Deletar este registro"
      type="button"
      className="flex items-center group h-8 focus:outline-none text-gray-50 bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-red-800 font-medium rounded-lg text-sm px-3 py-4 mr-2 mb-2 transition-colors"
  > 
    <Trash weight="duotone" size={17} />
  </button>
  )
}