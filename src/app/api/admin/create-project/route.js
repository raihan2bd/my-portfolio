import { NextResponse } from "next/server";
import { getDoc, doc } from "firebase/firestore";
import { adminConfig, adminAuth } from "@/db/adminConfig";
import { db } from "@/db/dbconfig";

export async function POST(request) {
  if (!request.cookies.has('token')) return NextResponse.json({error: "Failed to authorization."})

  const token = request.cookies.get('token')
  try {
    const decodedToken = await adminConfig.auth().verifyIdToken(token.value);
    const uid = decodedToken.user_id;

    const docRef = doc(db, "userRoles", uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists() && docSnap.data().role ==='admin') {
      await adminAuth.setCustomUserClaims(uid, {role: 'admin'})
    } else {
      return NextResponse.json({error: "Access denied. You don't have permission to perform this action."})
    }

    // new project validation
    

    return NextResponse.json({message: "i'm from create new post working"})

    
  } catch (err) {
    console.log(err)
    return NextResponse.json({error: "Failed to create the project. Something went wrong."})
  }

}