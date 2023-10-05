import { NextResponse, NextRequest } from 'next/server';
import { cookies } from 'next/headers';

export async function middleware(request) {
  const path = request.nextUrl.pathname;

  const isPublicPath = path === '/login' || path === '/signup';

  const cookieStore = cookies();
  const userCookie = cookieStore.get('user');

  if (userCookie) {
    const user = JSON.parse(userCookie);

    console.log(user);
  }

  console.log('i\'m working');

  return NextResponse.json(userCookie?.value);
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/api/projects/:path*',
    '/api/create-project',
    '/api/auth/login',
    '/api/auth/signup',
  ],
};