import { Pencil } from "phosphor-react";

export function EditBookButton() {
  return(
    <button
      title="Editar este livro"
      type="button"
      className="flex items-center group h-8 focus:outline-none text-gray-50 bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-800 font-medium rounded-lg text-sm px-3 py-4 mr-2 mb-2 transition-colors"
    >
      <Pencil weight="duotone" size={17} />
    </button>
  )
}