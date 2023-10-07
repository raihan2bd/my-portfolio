import { NextResponse, NextRequest } from "next/server";
import { cookies } from "next/headers";
import {auth } from "./db/dbconfig";

export async function middleware(request) {
  const path = request.nextUrl.pathname;

  const isPublicPath = path === "/login" || path === "/signup";

  // const cookieStore = cookies();
  // const hasToken = cookieStore.has('token')

  const hasToken = request.cookies.has("token");

  if (hasToken) {
    const token = request.cookies.get("token");
    console.log("i'm working")
    try {
      
      const decodedToken = await auth.verifyIdToken(token);
    } catch (error) {
      console.log(error)
    }
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    "/api/projects/:path*",
    "/api/create-project",
    "/api/auth/login",
    "/api/auth/signup",
  ],
};
