import { zodResolver } from "@hookform/resolvers/zod"
import * as Dialog from '@radix-ui/react-dialog'
import { Check } from "phosphor-react"
import { useForm } from "react-hook-form"
import { z } from "zod"

const addBookFormSchema = z.object({
  name: z.string().min(1, 'Informe um nome.'),
  author: z.string().min(1, 'Informe o autor.'),
  vol: z.number().min(1, 'Qtd. de volumes inválida.')
})

type AddBookModalFromInputs = z.infer<typeof addBookFormSchema>

export function AddBookModal() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset
  } = useForm<AddBookModalFromInputs>({
    resolver: zodResolver(addBookFormSchema),
  })

  async function handleAddNewBook(data: AddBookModalFromInputs) {
    await new Promise(resolve => setTimeout(resolve, 1000));

    console.log(data)

    reset()
  }

  return(
    <div>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/60 inset-0 fixed" />

        <Dialog.Content className="fixed bg-[#121214] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg">
          <Dialog.Title className="text-3xl font-black">Adicionar livro</Dialog.Title>

          <form className="flex flex-col gap-4 mt-8" onSubmit={handleSubmit(handleAddNewBook)}>    
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="font-semibold">Nome do livro</label>
              <input 
                type="text"
                id="name" 
                placeholder="É assim que acaba" 
                className="bg-zinc-900 py-3 px-4 rounded placeholder:text-zinc-400"
                required 
                {...register('name')}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="author" className="font-semibold">Autor do livro</label>
              <input 
                type="text"
                id="author" 
                placeholder="Colleen Hoover"
                className="bg-zinc-900 py-3 px-4 rounded placeholder:text-zinc-400"
                required 
                {...register('author')}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="font-semibold">Quantos volumes?</label>
              <input 
                type="number"
                id="vol"
                placeholder="1" 
                className="bg-zinc-900 py-3 px-4 rounded placeholder:text-zinc-400"
                min={1} 
                required 
                {...register('vol', { valueAsNumber: true })}
              />
            </div>
              
            <div className="flex flex-col flex-1 mx-4">
              <label className="text-sm font-semibold">
                Arquivo do documento
              </label>
              <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                <div className="space-y-1 text-center">
                  <svg
                    className="mx-auto h-12 w-12 text-gray-400"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="flex text-sm">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md font-medium text-blue-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 hover:text-blue-500"
                    >
                      <span>Envie um arquivo</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="sr-only"
                      />
                    </label>
                    <p className="pl-1">ou arraste e solte</p>
                  </div>
                  <p className="text-xs">
                    PNG ou JPG até 2MB
                  </p>
                </div>
              </div>
            </div>
            
            <footer className="mt-4 flex justify-end gap-4">
              <Dialog.Close className="bg-zinc-600 px-5 h-12 rounded-md font-semibold hover:bg-zinc-700 transition-colors">Cancelar</Dialog.Close>
              <button
                type="submit"
                className="flex items-center gap-2 bg-blue-600 px-5 h-12 rounded-md font-semibold enabled:hover:bg-blue-700 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                disabled={isSubmitting}
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