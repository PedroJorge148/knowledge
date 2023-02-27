import * as z from 'zod'
import { MagnifyingGlass } from "phosphor-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const searchFormSchema = z.object({
  query: z.string().optional(),
  interval: z.number()
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors }
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema)
  })

  async function handleSearchTransactions(data: SearchFormInputs) {
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log(data)
  }

  return (
    <form className="flex gap-4" onSubmit={handleSubmit(handleSearchTransactions)}>
      <input 
        type="text" 
        placeholder="Busque por transações"
        className="flex-1 rounded-md border-0 bg-zinc-900 text-zinc-100 p-4"
        {...register('query')}
      />

      <div className="flex justify-between gap-4 mx-auto">
        <select 
          id="interval"
          className="border-0 text-sm rounded-lg bg-zinc-900 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
          {...register('interval', {valueAsNumber: true})}
        >
          <option value="0">Todos os registros</option>  
          <option value="7">Últimos 7 dias</option>  
          <option value="30">Últimos 30 dias</option>
          <option value="60">Últimos 60 dias</option>  
        </select>

        <button
          type="submit"
          disabled={isSubmitting}
          className="flex items-center gap-2 p-4 text-zinc-100 bg-green-700 border-green-300 font-semibold rounded-md cursor-pointer transition-colors disabled:opacity-60 disabled:cursor-not-allowed hover:bg-green-800 disabled:hover:bg-green-700"
        >
          <MagnifyingGlass size={20} />
          Buscar
        </button>
      </div>
    </form>
  )
}