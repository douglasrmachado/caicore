import { getServerSession } from 'next-auth/next'
import { authOptions } from './auth'
import { redirect } from 'next/navigation'
import { UserRole } from '@prisma/client'

/**
 * Obtém a sessão do usuário no servidor
 */
export async function getSession() {
  return await getServerSession(authOptions)
}

/**
 * Obtém o usuário atual no servidor
 * Retorna null se não estiver autenticado
 */
export async function getCurrentUser() {
  const session = await getSession()
  return session?.user || null
}

/**
 * Requer autenticação. Redireciona para login se não autenticado
 */
export async function requireAuth() {
  const user = await getCurrentUser()
  if (!user) {
    redirect('/auth/login')
  }
  return user
}

/**
 * Requer role de admin. Redireciona se não for admin
 */
export async function requireAdmin() {
  const user = await requireAuth()
  if (user.role !== UserRole.ADMIN) {
    redirect('/')
  }
  return user
}

/**
 * Verifica se o usuário é admin
 */
export async function isAdmin() {
  const user = await getCurrentUser()
  return user?.role === UserRole.ADMIN
}

