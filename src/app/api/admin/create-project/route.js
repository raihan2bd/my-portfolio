import { NextResponse } from "next/server";
import { getDoc, doc } from "firebase/firestore";
import { adminConfig, adminDB } from "@/db/adminConfig";
import { db } from "@/db/dbconfig";

export async function POST(request) {
  if (!request.cookies.has("token"))
    return NextResponse.json({ error: "Failed to authorization." });

  const token = request.cookies.get("token");
  try {
    const decodedToken = await adminConfig.auth().verifyIdToken(token.value);
    const uid = decodedToken.user_id;

    const docRef = doc(db, "userRoles", uid);
    const docSnap = await getDoc(docRef);


    if(docSnap.exists()) {
      if (docSnap.data().role !== "admin") {
        return NextResponse.json({
          error:
            "Access denied. You don't have permission to perform this action.",
        });
    }
    } else {
      return NextResponse.json({
        error:
          "Access denied. You don't have permission to perform this action.",
      });
    }

    // add project to the database
    const reqBody = await request.json();
    if (reqBody.length > 0) {
      console.log("I'm working");
    }
    console.log(reqBody);

    const collectionRef = adminDB.collection("projects");

    const projectRef = await collectionRef.add(reqBody);

    const response = {
      project_id: projectRef.id,
      message: "Successfully added new project!",
    };

    return NextResponse.json(response, { status: 201 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({
      error: "Failed to create the project. Something went wrong.",
    });
  }
}
