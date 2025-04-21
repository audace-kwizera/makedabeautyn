import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  try {
    const route = request.nextUrl.pathname
    const token = request.cookies.get('token')?.value

    const isPrivateRoute = route.startsWith('/user') || route.startsWith('/salon-spa-owner')

    // Si la route est privé, mais l'utilisateur n'est pas authentifié puis redirigé vers la page login
    if (isPrivateRoute && !token) {
        return NextResponse.redirect(new URL('/login', request.url))
    }

    // Si la route est privé, et l'utilisateur authentifié puis redirigé vers la page dashboard
    if (!isPrivateRoute && token) {
      const role = request.cookies.get('role')?.value
        return NextResponse.redirect(new URL(`/${role}/dashboard`, request.url))
    }

    return NextResponse.next()
  } catch (error) {
    return NextResponse.error()
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
}
