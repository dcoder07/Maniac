import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch(
      `https://imdb232.p.rapidapi.com/api/news/get-by-category?limit=24&category=TOP`,
      {
        headers: {
          "Content-Type": "application/json",
          "X-RapidAPI-Key": process.env.RAPIDAPI_KEY!,
        },
        cache: "no-store",
      }
    );

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}
