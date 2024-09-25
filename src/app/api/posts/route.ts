import { NextResponse } from "next/server";

export async function GET() {
  const posts = [
    {
      nome: "post 1",
    },
    {
      nome: "post 2",
    }
  ]

  return new NextResponse(JSON.stringify(posts), {
    status: 200,
    statusText: "OK"
  });
}