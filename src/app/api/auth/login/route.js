import { NextResponse } from "next/server";
import { doc, getDoc } from "firebase/firestore";
import { signInWithEmailAndPassword } from "firebase/auth";
import { db, auth } from "@/db/dbconfig";
import { cookies } from 'next/headers'

export async function POST(request) {
  try {
    const reqBody = await request.json();
    const { email, password } = reqBody;

    // Validate email and password
    if (!email || !password) {
      return NextResponse.error("Email and password are required fields.", {
        statusCode: 400,
      });
    }

    // Email format validation (basic check)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.error("Invalid email format.", { statusCode: 400 });
    }

    // Password length validation (for example, requiring at least 6 characters)
    if (password.length < 6) {
      return NextResponse.error(
        "Password must be at least 6 characters long.",
        { statusCode: 400 }
      );
    }

    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const { uid, stsTokenManager } = userCredential.user;
    const token = stsTokenManager.accessToken
    const expiryTime = stsTokenManager.expirationTime

    let role= 'client'
    const docRef = doc(db, "userRoles", uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      if(docSnap.data() && docSnap.data().role !=="") {
        role = docSnap.data().role
      }
    }

    const user = {
      uid: uid,
      token,
      expiryTime,
      role
    }

    const cookieOptions = {
      expires: new Date(user.expiryTime),
      sameSite: 'strict',
      path: '/',
      httpOnly: false,
    };
    
    cookies().set('token', user.token, cookieOptions);
    cookies().set('role', user.role, cookieOptions);
    cookies().set('uid', user.uid, cookieOptions);

    return NextResponse.json({ message: "You have successfully logged in.", user });
  } catch (error) {
    if(error.code) {
      let errorMessage = "";
      switch (error.code) {
        case "auth/invalid-login-credentials":
          errorMessage = "User not found. Please check your email or password and try again.";
          break;
        case "auth/user-not-found":
          errorMessage = "User not found. Please check your email and try again.";
          break;
        case "auth/wrong-password":
          errorMessage = "Invalid password. Please try again.";
          break;
        default:
          errorMessage = "An error occurred. Please try again later.";
          break;
      }

      return NextResponse.json({error: errorMessage}, {status: 403})
    }
    return NextResponse.json({error: "Something went wrong please try again"}, {status: 500});
  }
}
