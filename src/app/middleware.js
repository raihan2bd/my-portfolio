import { NextResponse } from 'next/server'
 

export async function middleware(request) {
  const path = request.nextUrl.pathname

  const isPublicPath = path === '/login' || path === '/signup'

  const user = request.cookies.get('user').value

  
if(user) {
  console.log(user)
}

console.log("i'm working")
    
}

 
// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/',
    '/create-project',
    '/login',
    '/signup',
    '/projects',
    '/projects/feature'
  ]
}