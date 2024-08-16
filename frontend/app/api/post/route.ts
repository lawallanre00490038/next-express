import { NextResponse, NextRequest } from "next/server"

export async function GET(request: NextRequest) {
  console.log("This is the get api")
  return NextResponse.json({ message: "This is the post api" }, { status: 200 })
}