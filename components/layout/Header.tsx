'use client'

import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'
import { ShoppingCart, User, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { cn } from '@/lib/utils'

export default function Header() {
  const { data: session } = useSession()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigation = [
    { name: 'Início', href: '/' },
    { name: 'Boxes', href: '/boxes' },
    { name: 'Histórias', href: '/historias' },
    { name: 'Sobre', href: '/sobre' },
  ]

  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-primary-600">Caiçoré</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-neutral-700 hover:text-primary-600 transition-colors font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Carrinho */}
            <Link
              href="/carrinho"
              className="relative p-2 text-neutral-700 hover:text-primary-600 transition-colors"
            >
              <ShoppingCart size={24} />
              <span className="absolute top-0 right-0 bg-primary-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </Link>

            {/* User Menu */}
            {session ? (
              <div className="hidden md:flex items-center space-x-2">
                <Link
                  href="/perfil"
                  className="flex items-center space-x-2 p-2 text-neutral-700 hover:text-primary-600 transition-colors"
                >
                  <User size={20} />
                  <span className="text-sm">{session.user.name}</span>
                </Link>
                <button
                  onClick={() => signOut()}
                  className="text-sm text-neutral-600 hover:text-neutral-900"
                >
                  Sair
                </button>
              </div>
            ) : (
              <div className="hidden md:flex items-center space-x-2">
                <Link
                  href="/auth/login"
                  className="text-sm text-neutral-700 hover:text-primary-600"
                >
                  Entrar
                </Link>
                <Link
                  href="/auth/register"
                  className="btn-primary text-sm"
                >
                  Cadastrar
                </Link>
              </div>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-neutral-700"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            'md:hidden overflow-hidden transition-all duration-300',
            mobileMenuOpen ? 'max-h-96' : 'max-h-0'
          )}
        >
          <div className="py-4 space-y-4 border-t border-neutral-200">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-neutral-700 hover:text-primary-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            {session ? (
              <div className="space-y-2 pt-4 border-t border-neutral-200">
                <Link
                  href="/perfil"
                  className="block text-neutral-700 hover:text-primary-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Meu Perfil
                </Link>
                <button
                  onClick={() => {
                    signOut()
                    setMobileMenuOpen(false)
                  }}
                  className="block text-neutral-700 hover:text-primary-600"
                >
                  Sair
                </button>
              </div>
            ) : (
              <div className="space-y-2 pt-4 border-t border-neutral-200">
                <Link
                  href="/auth/login"
                  className="block text-neutral-700 hover:text-primary-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Entrar
                </Link>
                <Link
                  href="/auth/register"
                  className="block text-primary-600 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Cadastrar
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  )
}

