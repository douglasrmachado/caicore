import { withAuth } from 'next-auth/middleware'
import { NextResponse } from 'next/server'

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token
    const isAdmin = token?.role === 'ADMIN'
    const isAuthPage = req.nextUrl.pathname.startsWith('/auth')
    const isAdminPage = req.nextUrl.pathname.startsWith('/admin')
    const isLogoutPage = req.nextUrl.pathname === '/auth/logout'

    // Se estiver na página de admin e não for admin, redirecionar
    if (isAdminPage && !isAdmin) {
      return NextResponse.redirect(new URL('/', req.url))
    }

    // Se estiver autenticado e tentar acessar páginas de auth (exceto logout), redirecionar
    if (token && isAuthPage && !isLogoutPage) {
      return NextResponse.redirect(new URL('/', req.url))
    }

    return NextResponse.next()
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        const isAuthPage = req.nextUrl.pathname.startsWith('/auth')
        const isAdminPage = req.nextUrl.pathname.startsWith('/admin')
        const isApiRoute = req.nextUrl.pathname.startsWith('/api')
        const isLogoutPage = req.nextUrl.pathname === '/auth/logout'

        // Permitir acesso a páginas públicas, API e logout
        if (isAuthPage || isApiRoute || isLogoutPage) {
          return true
        }

        // Páginas de admin requerem autenticação e role ADMIN
        if (isAdminPage) {
          return token?.role === 'ADMIN'
        }

        // Permitir acesso público à home e outras rotas públicas
        // As rotas protegidas serão verificadas individualmente
        return true
      },
    },
  }
)

export const config = {
  matcher: [
    '/admin/:path*',
    '/auth/:path*',
    '/perfil/:path*',
    '/checkout/:path*',
  ],
}

