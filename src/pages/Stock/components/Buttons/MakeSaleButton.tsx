import * as Dialog from'@radix-ui/react-dialog'
import { MakeSaleModal } from "../MakeSaleModal";
import { ShoppingCart } from "phosphor-react";

export function MakeSaleButton() {
  return (
    <Dialog.Root>
      <Dialog.Trigger
        title="Vender este livro"
        type="button"
        className="flex items-center group h-8 focus:outline-none text-gray-50 bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-800 font-medium rounded-lg text-sm px-3 py-4 mr-2 mb-2 transition-colors"
      >
        <ShoppingCart weight="duotone" size={17} />
      </Dialog.Trigger>

      <MakeSaleModal />
    </Dialog.Root>
  )
}