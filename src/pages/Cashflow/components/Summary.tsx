import * as Dialog from '@radix-ui/react-dialog'
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar, Money } from "phosphor-react";
import { NewTransactionModal } from "./NewTrasactionModal";

export function Summary() {
  return (
    <>
    <header>
    <header className="flex justify-end items-center max-w-6xl m-6">
      <Dialog.Root>
        <Dialog.Trigger
          type="button"
          className="flex items-center gap-2 p-4 text-zinc-50 bg-green-700 border-green-300 rounded-md cursor-pointer transition-colors disabled:opacity-60 disabled:cursor-not-allowed hover:bg-green-800 disabled:hover:bg-green-700"
        >
          <Money weight="duotone" size={20} />
          <span className="text-xs font-semibold">Nova Transação</span>
        </Dialog.Trigger>

        <NewTransactionModal />
      </Dialog.Root>
      </header>
    </header>
      <section className="grid grid-cols-1 gap-8 w-full max-w-6xl mx-auto px-6 md:grid-cols-3">
        
        <div className="bg-zinc-800 rounded-md p-8">
          <header className="flex justify-between items-center text-zinc-100">
            <span>Entradas</span>
            <ArrowCircleUp size={32} className="text-green-500" />
          </header>
          <strong className="block mt-4 text-2xl">R$ 1.200,00</strong>
        </div>

        <div className="bg-zinc-800 rounded-md p-8">
          <header className="flex justify-between items-center text-zinc-100">
            <span>Saídas</span>
            <ArrowCircleDown size={32} className="text-red-500" />
          </header>
          <strong className="block mt-4 text-2xl">R$ 200,00</strong>
        </div>

        <div className="bg-green-800 rounded-md p-8">
          <header className="flex justify-between items-center text-zinc-100">
            <span>Total</span>
            <CurrencyDollar size={32} className="text-white" />
          </header>
          <strong className="block mt-4 text-2xl">R$ 1.000,00</strong>
        </div>
      </section>
    </>
  )
}