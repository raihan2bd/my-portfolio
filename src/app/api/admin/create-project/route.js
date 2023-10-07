import { NextResponse } from "next/server";

export async function POST(request) {
  return NextResponse.json({message: "i'm from create new post working"})
}