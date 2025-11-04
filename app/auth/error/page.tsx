import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Erro de Autenticação - Caiçoré',
}

export default function AuthErrorPage({
  searchParams,
}: {
  searchParams: { error?: string }
}) {
  const errorMessages: Record<string, string> = {
    Configuration: 'Há um problema com a configuração do servidor.',
    AccessDenied: 'Você não tem permissão para acessar esta página.',
    Verification: 'O token de verificação expirou ou é inválido.',
    Default: 'Ocorreu um erro inesperado. Tente novamente.',
  }

  const error = searchParams.error || 'Default'
  const message = errorMessages[error] || errorMessages.Default

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-50 py-12 px-4">
      <div className="max-w-md w-full space-y-8 text-center">
        <div>
          <h2 className="text-4xl font-bold text-neutral-900 mb-4">Ops!</h2>
          <p className="text-neutral-600 mb-8">{message}</p>
        </div>
        <div className="space-y-4">
          <Link href="/auth/login" className="btn-primary inline-block">
            Tentar novamente
          </Link>
          <div>
            <Link href="/" className="text-primary-600 hover:text-primary-500">
              Voltar para a página inicial
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

