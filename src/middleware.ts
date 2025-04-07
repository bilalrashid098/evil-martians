// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const token = req.cookies.get('accessToken')?.value;

  const isAuthPage = req.nextUrl.pathname === '/login' || req.nextUrl.pathname === '/signup';
  const isAuthenticated = Boolean(token);

  if (!isAuthenticated && !isAuthPage) {
    // Redirect unauthenticated user to login
    return NextResponse.redirect(new URL('/login', req.url));
  }

  if (isAuthenticated && isAuthPage) {
    // Redirect logged-in user away from login
    return NextResponse.redirect(new URL('/', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next|favicon.ico|public).*)'],
};
