import { Metadata } from 'next'
import RegisterForm from '@/components/auth/RegisterForm'

export const metadata: Metadata = {
  title: 'Cadastro - Caiçoré',
  description: 'Crie sua conta na Caiçoré',
}

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-4xl font-bold text-neutral-900">
            Crie sua conta
          </h2>
          <p className="mt-2 text-center text-sm text-neutral-600">
            Junte-se à nossa comunidade e descubra experiências culturais únicas
          </p>
        </div>
        <RegisterForm />
      </div>
    </div>
  )
}

