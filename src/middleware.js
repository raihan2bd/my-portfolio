import { NextResponse } from "next/server";

export async function middleware(request) {
  const path = request.nextUrl.pathname;

  const isAdminPath = path === "/api/admin/create-project"
  if(isAdminPath) {
    const hasToken = request.cookies.has("token");
    const hasRole = request.cookies.has('role')
    if(!hasToken || !hasRole) {
      return NextResponse.json({error: "Failed to authorize"}, {status: 401})
    }

    if (!request.cookies.get('token') || request.cookies.get('role').value !== 'admin') {
      return NextResponse.json({error: "Request forbidden"}, {status: 403})
    }
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    "/api/projects/:path*",
    "/api/admin/create-project",
    "/api/auth/login",
    "/api/auth/signup",
  ],
};
