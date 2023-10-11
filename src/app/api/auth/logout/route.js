import { NextResponse } from "next/server";
import { adminConfig as admin } from "@/db/adminConfig";
import { cookies } from "next/headers";

export async function GET(request) {
  if(!request.cookies.has('uid' || !request.cookies.has('token') || !request.cookies.has('role'))) {
    return NextResponse.json({error: "Request Forbidden"}, {status: 403})
  }
  try {
    const uid = request.cookies.get('uid').value;
    await admin.auth().revokeRefreshTokens(uid)
    cookies().delete('uid')
    cookies().delete('token')
    cookies().delete('role')
    return NextResponse.json({message: "User has been logout successfully"})
  } catch(error) {
    if(error.code) {
      let errMsg = ''
      switch(error.code) {
        case 'auth/invalid-uid':
        errMsg = "Invalid user"
        break;
        default:
          errMsg = 'An error occurred. Please try again.'
      }
      return NextResponse.json({error: errMsg}, {status: 403})
    }
    
    return NextResponse.json({error: "Something went wrong. please try again later"}, {status: 500})
  }
}