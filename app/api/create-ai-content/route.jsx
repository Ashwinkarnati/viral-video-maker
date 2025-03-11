import { inngest } from "@/inngest/client";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { prompt, videoId } = await req.json();

    // Validate input
    if (!prompt || !videoId) {
      return NextResponse.json(
        { error: "prompt and videoId are required" },
        { status: 400 }
      );
    }

    // Send event to Inngest
    await inngest.send({
      name: "ai/generate-video-data",
      data: {
        prompt:prompt,
        videoId:videoId,
      },
    });

    return NextResponse.json({ result: "Event sent successfully" });
  } catch (error) {
    console.error("Error in API route:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}