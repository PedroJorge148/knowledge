import { zodResolver } from "@hookform/resolvers/zod";
import * as Dialog from '@radix-ui/react-dialog'
import * as Select from '@radix-ui/react-select';
import { CaretDown, Check } from "phosphor-react";
import { FormEvent } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const addPriceFormSchema = z.object({
  book: z.string(),
  date: z.date(),
  description: z.string(),
  qtd: z.number(),
  PC: z.number(),
  PV: z.number(),
})

type AddPriceModalFromInputs = z.infer<typeof addPriceFormSchema>

function handleAddPrice(data: AddPriceModalFromInputs) {
  console.log(data)
}

export function AddPriceModal() {
  const {
    register,
    handleSubmit
  } = useForm<AddPriceModalFromInputs>({
    resolver: zodResolver(addPriceFormSchema)
  })

  return(
    <div>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/60 inset-0 fixed" />

        <Dialog.Content className="fixed bg-[#202024] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg">
          <Dialog.Title className="text-3xl font-black">Adicionar preço</Dialog.Title>

          <form className="flex flex-col gap-4 mt-8" onSubmit={handleSubmit(handleAddPrice)}>
            <div className="flex flex-col gap-2">
              <label htmlFor="book" className="font-semibold">Qual livro?</label>
              <select 
                id="book"
                className="border text-sm rounded-lg block w-full p-2.5 bg-zinc-900 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                {...register('book')}
              >
                <option value="0">Livro que deseja cadastrar</option>
                <option value="Diário de Anne Frank">Diário de Anne Frank</option>
                <option value="Os Quatro Compromissos">Os Quatro Compromissos</option>
                <option value="Pai Rico Pai Pobre">Pai Rico Pai Pobre</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="description" className="font-semibold">Descrição: (opcional)</label>
              <input 
                type="text"
                id="description"
                placeholder="Acompanha marcador"
                className="bg-zinc-900 py-3 px-4 rounded placeholder:text-zinc-400"
                {...register('description', {shouldUnregister: true})}
              />
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="data" className="font-semibold">Data da chegada</label>
                <input 
                  type="date" 
                  id="data" 
                  placeholder="Data de chegada" 
                  className="bg-zinc-900 py-3 px-4 rounded placeholder:text-zinc-400"
                  required 
                  {...register('date', {valueAsDate: true})}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="qtd" className="font-semibold">Quantos livros?</label>
                <input 
                  type="number"
                  id="qtd" 
                  min={1}
                  placeholder="1" 
                  className="bg-zinc-900 py-3 px-4 rounded placeholder:text-zinc-400"
                  required 
                  {...register('qtd', {valueAsNumber: true})}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="PC" className="font-semibold">Preço de compra</label>
                <input 
                  type="number"
                  id="PC" 
                  placeholder="00,00" 
                  step={0.01}
                  className="bg-zinc-900 py-3 px-4 rounded placeholder:text-zinc-400"
                  required 
                  {...register('PC', {valueAsNumber: true})}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="PV" className="font-semibold">Preço de venda</label>
                <input 
                  type="number"
                  id="PV" 
                  placeholder="00,00" 
                  step={0.01}
                  className="bg-zinc-900 py-3 px-4 rounded placeholder:text-zinc-400"
                  required 
                  {...register('PV', {valueAsNumber: true})}
                />
              </div>
            </div>
           

            <footer className="mt-4 flex justify-end gap-4">
              <Dialog.Close className="bg-zinc-600 px-5 h-12 rounded-md font-semibold hover:bg-zinc-700 transition-colors">Cancelar</Dialog.Close>
              <button
                type="submit"
                className="flex items-center gap-2 bg-blue-600 px-5 h-12 rounded-md font-semibold enabled:hover:bg-blue-700 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <Check size={18} weight="bold" />
                Adicionar
              </button>
            </footer>

          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </div>
  )
}