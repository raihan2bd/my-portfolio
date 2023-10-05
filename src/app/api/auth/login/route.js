import { NextResponse } from "next/server";
import { doc, getDoc } from "firebase/firestore";
import { signInWithEmailAndPassword } from "firebase/auth";
import { db, auth } from "@/dbconfig";
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
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }

    const user = {
      uid: uid,
      token,
      expiryTime,
      role
    }

    cookies().set('token', user.token, { expires: new Date(user.expiryTime) })
    cookies().set('role', user.role, { expires: new Date(user.expiryTime) })

    return NextResponse.json({ message: "You have successfully logged in.", user });
  } catch (error) {
    console.error("Error in API route:", error.message);
    let errMsg = "Something went wrong! please try again";
    if (error.message) {
      errMsg = error.message;
    }
    return NextResponse.error(errMsg, { statusCode: 500 });
  }
}
