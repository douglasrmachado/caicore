import { Metadata } from 'next'
import LoginForm from '@/components/auth/LoginForm'

export const metadata: Metadata = {
  title: 'Login - Caiçoré',
  description: 'Faça login na sua conta Caiçoré',
}

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-4xl font-bold text-neutral-900">
            Bem-vindo de volta
          </h2>
          <p className="mt-2 text-center text-sm text-neutral-600">
            Faça login para continuar sua jornada cultural
          </p>
        </div>
        <LoginForm />
      </div>
    </div>
  )
}

