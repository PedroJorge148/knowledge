import { Books, Eye, EyeSlash, SignIn } from "phosphor-react";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod';
import { useState } from "react";

const loginValidationSchema = z.object({
  user: z.string().min(1, 'Campo obrigatório.').max(12, 'Usuário inválido.'),
  pass: z.string().min(1, 'Campo obrigatório.').max(12, 'Usuário inválido.'),
})

type LoginData = z.infer<typeof loginValidationSchema>

export function Login() {
  const [passwordView, setPasswordView] = useState(false)

  const { register, handleSubmit } = useForm<LoginData>({
    resolver: zodResolver(loginValidationSchema),
  })

  function handleLoginSubmit(data: LoginData) {
    console.log(data)
  }

  return (
    <div className="fixed bg-[#202024] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px]">
      <form className="flex flex-col gap-5 justify-center" onSubmit={handleSubmit(handleLoginSubmit)}>
        <div className="flex flex-col items-center justify-center gap-2 mb-3">
          <Books size={82} weight="duotone" className="text-brand-500" />
          <h1 className="mb-3 font-semibold text-3xl text-center">Painel Knowledge</h1>
        </div>
        <div className="flex flex-col gap-2">
          <input 
            type="text" 
            id="user" 
            placeholder="Usuário" 
            className="bg-zinc-900 px-4 py-3 rounded placeholder:bg-zin-400"
            required 
            {...register('user')}
          />
        </div>
        <div className="flex flex-col gap-2 relative">
          <input 
            type={passwordView ? 'text' : 'password'}
            id="pass" 
            placeholder="Senha"
            className="bg-zinc-900 px-4 py-3 rounded placeholder:text-zinc-400" 
            required 
            {...register('pass')}
          />
          <div className="text-2xl absolute inset-y-3.5 right-3 text-blue-500 hover:text-brand-500 transition-colors">
            {passwordView? (
              <EyeSlash onClick={() => {setPasswordView(!passwordView)}} /> 
            ) : (
              <Eye onClick={() => {setPasswordView(!passwordView)}} /> 
            )}
          </div>
        </div>
        
        <footer className="flex justify-end">
          <button 
            type="submit"
            className="flex items-center gap-1 justify-end px-6 py-3 w-fit rounded-md font-semibold bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            <SignIn size={18} weight="bold" />
            Entrar
          </button>
        </footer>
        
      </form>
    </div>
  )
}