import { NextResponse } from "next/server";
import { setDoc, doc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { db, auth } from "@/db/dbconfig";

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

    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const { uid } = userCredential.user;

    await setDoc(doc(db, "userRoles", uid), { role: "client" });

    return NextResponse.json({ message: "Successfully signup", user_id: uid });
  } catch (error) {
    console.error("Error in API route:", error.message);
    let errMsg = "";
    if (error.code) {
      switch (error.code) {
        case "auth/email-already-in-use":
          errMsg = "The provided email is already in use by an existing user. Each user must have a unique email."
          break;
        case "auth/email-already-exists":
          errMsg =
            "The provided email is already in use by an existing user. Each user must have a unique email.";
          break;
        case "auth/invalid-email":
          errMsg =
            "The provided value for the email user property is invalid. It must be a string email address.";
          break;
        default:
          errMsg = "An error occurred. Please try again later.";
          break;
      }
      return NextResponse.json({error: errMsg}, {status: 400})
    }

    return NextResponse.json({error: "Something went wrong! please try again"}, { status: 500 });
  }
}
