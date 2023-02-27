import { zodResolver } from "@hookform/resolvers/zod"
import * as Checkbox from "@radix-ui/react-checkbox"
import * as Dialog from '@radix-ui/react-dialog'
import { Check } from "phosphor-react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"

const makeSaleFormSchema = z.object({
  client: z.string(),
  location: z.string(),
  qtd: z.number().min(1, 'Quantidade inválida.'),
  saleData: z.date(),
  method: z.string(),
  discount_value: z.number().optional()
})

type MakeSaleModalFromInputs = z.infer<typeof makeSaleFormSchema>

export function MakeSaleModal() {
  const [discountSale, setDiscountSale ] = useState(false)

  const {
    register,
    handleSubmit,
    watch
  } = useForm<MakeSaleModalFromInputs>({
    resolver: zodResolver(makeSaleFormSchema)
  })

  function handleMakeSale(data: MakeSaleModalFromInputs) {
    console.log(data)
  }

  return (
    <div>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/60 inset-0 fixed" />
        <Dialog.Content className="fixed bg-[#202024] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg">
          <Dialog.Title className="flex flex-col text-3xl font-black" id="reg-venda">
            Registrar venda
            <span className="text-xl">A Abadia de Northanger - Jane Austen</span>
          </Dialog.Title>
          {/* <pre>{JSON.stringify(watch(), null, 2)}</pre> */}
          <form className="flex flex-col gap-4 mt-8" onSubmit={handleSubmit(handleMakeSale)}>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="client" className="font-semibold">Nome do cliente</label>
                <input 
                  type="text"
                  id="client"
                  placeholder="Pedro Jorge"
                  className="bg-zinc-900 py-3 px-4 rounded placeholder:text-zinc-400"
                  required 
                  {...register('client')}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="location" className="font-semibold">Bairro de entrega</label>
                <input 
                  type="text"
                  id="location"
                  placeholder="Marambaia"
                  className="bg-zinc-900 py-3 px-4 rounded placeholder:text-zinc-400"
                  required 
                  {...register('location')}
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="qtd" className="font-semibold">Quantos vendidos?</label>
                <input 
                  type="number"
                  id="qtd" 
                  min={1}
                  // max={}
                  placeholder="1" 
                  className="bg-zinc-900 py-3 px-4 rounded placeholder:text-zinc-400"
                  required 
                  {...register('qtd', { valueAsNumber: true })}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="date_sale" className="font-semibold">Data da venda</label>
                <input 
                  type="date"
                  id="data" 
                  placeholder="Data de compra" 
                  className="bg-zinc-900 py-3 px-4 rounded placeholder:text-zinc-400"
                  required 
                  {...register('saleData', {valueAsDate: true})}
                />
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="method" className="font-semibold">Forma de Pagamento</label>
              <select 
                id="method"
                className="border text-sm rounded-lg block w-full p-2.5 bg-zinc-900 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                {...register('method')}
              >
                <option value="0">Selecione a forma de pagamento</option>
                <option value="À vista">À vista</option>
                <option value="Pag. por Pix">Pag. por Pix</option>
                <option value="Pag. por Cartão">Pag. por Cartão</option>
              </select>
            </div>
            {/* DESCONTO */}
            <div className="grid grid-cols-2">
              <label className="flex items-center gap-2 text-sm">
                <Checkbox.Root
                  className="w-6 h-6 p-1 rounded bg-zinc-900"
                  checked={discountSale}
                  onCheckedChange={(checked) => {
                    if (checked === true) {
                      setDiscountSale(true)
                    } else {
                      setDiscountSale(false)
                    }
                  }}
                >
                  <Checkbox.Indicator>
                    <Check className="w-4 h-4 text-emerald-400" />
                  </Checkbox.Indicator>
                </Checkbox.Root>
                Venda com desconto?
              </label>

              {discountSale && (
                <div className="flex flex-col gap-2">
                  {/* <label htmlFor="discount_price" className="font-semibold">Valor descontado</label> */}
                    <input 
                      type="number"
                      id="discount_price" 
                      placeholder="Valor descontado" 
                      className="bg-zinc-900 py-3 px-4 rounded placeholder:text-zinc-400"
                      required 
                      {...register('discount_value', {valueAsNumber: true, shouldUnregister: true})}
                    />
                </div>
              )}
              
            </div>
            
            
            
            <footer className="mt-4 flex justify-end gap-4">
              <Dialog.Close
                className="bg-zinc-600 px-5 h-12 rounded-md font-semibold hover:bg-zinc-700 transition-colors"
              >
                Cancelar
              </Dialog.Close>
              <button 
                type="submit"
                className="flex items-center gap-2 bg-blue-600 px-5 h-12 rounded-md font-semibold enabled:hover:bg-blue-700 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <Check size={18} weight="bold" />
                Registrar
              </button>
            </footer>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </div>
  )
}