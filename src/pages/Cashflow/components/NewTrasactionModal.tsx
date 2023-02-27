import { zodResolver } from "@hookform/resolvers/zod"
import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group'
import { ArrowCircleDown, ArrowCircleUp, Check } from "phosphor-react"
import { useState } from "react"
import { Controller, useForm } from "react-hook-form"
import * as z from "zod"

const newTransactionFormSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum(['income', 'outcome']),
})

type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>

export function NewTransactionModal() {
  const [transactionType, setTransactionType] = useState<'income' | 'outcome' >('income')

  const {
    register,
    handleSubmit,
    control
  } = useForm<NewTransactionFormInputs>({
    resolver: zodResolver(newTransactionFormSchema)
  })

  function handleCreateNewTransaction(data: NewTransactionFormInputs) {
    console.log(data)
  }

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/60 inset-0 fixed" />

      <Dialog.Content className="fixed bg-[#121214] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg">
        <Dialog.Title className="text-3xl font-black">Nova Transação</Dialog.Title>

        <form className="flex flex-col gap-4 mt-8" onSubmit={handleSubmit(handleCreateNewTransaction)}>
          <div className="flex flex-col gap-2">
            <label htmlFor="description" className="font-semibold">Descrição</label>
            <input 
              type="text"
              id="description" 
              placeholder="Descreva a transação"
              className="bg-zinc-900 py-3 px-4 rounded placeholder:text-zinc-400"
              required
              {...register('description')}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="price" className="font-semibold">Preço</label>
            <input 
              type="number"
              id="price" 
              placeholder="Valor da transação"
              className="bg-zinc-900 py-3 px-4 rounded placeholder:text-zinc-400"
              required
              {...register('price', {valueAsNumber: true})}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="category" className="font-semibold">Categoria</label>
            <input 
              type="text"
              id="category"
              placeholder="O que se trata a transação"
              className="bg-zinc-900 py-3 px-4 rounded placeholder:text-zinc-400"
              required 
              {...register('category')}
            />
          </div>
          <Controller
            control={control}
            name="type"
            render={({ field }) => {
              return (
                <RadioGroup.Root
                  onValueChange={field.onChange}
                  value={field.value}
                  className="grid grid-cols-2 gap-4 mt-2"
                >
                  <RadioGroup.Item 
                    value="income"
                    className={`flex items-center justify-center gap-2 p-4 border-0 rounded-md  transition-colors ${field.value === 'income' ? 'bg-green-600 text-white hover:bg-green-700' : 'bg-zinc-900  text-green-600 hover:text-white'} `}
                  >
                    <ArrowCircleUp size={24} />
                    Entrada
                  </RadioGroup.Item>
                  <RadioGroup.Item  
                    value="outcome"
                    className={`flex items-center justify-center gap-2 p-4 border-0 rounded-md transition-colors ${field.value === 'outcome' ? 'bg-red-600 text-white hover:bg-red-700' : 'bg-zinc-900 text-red-500 hover:text-white' } `}
                  >
                    <ArrowCircleDown size={24}  />
                    Saída
                  </RadioGroup.Item>
                </RadioGroup.Root>
              )
            }}
          />
           <footer className="mt-4 flex justify-end gap-4">
              <Dialog.Close
                className="bg-zinc-600 px-5 h-12 rounded-md font-semibold hover:bg-zinc-700 transition-colors"
              >
                Cancelar
              </Dialog.Close>
              <button 
                type="submit"
                className="flex items-center gap-2 bg-green-600 px-5 h-12 rounded-md font-semibold enabled:hover:bg-green-700 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <Check size={18} weight="bold" />
                Registrar
              </button>
            </footer>
        </form>
      </Dialog.Content>
    </Dialog.Portal>
  )
}