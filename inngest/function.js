import { db } from "@/configs/db";
import { inngest } from "./client";
import { GenerateAIVideoData_AiModel } from "@/configs/AiModel";
import { VIDEO_RAW_TABLE } from "@/configs/schema";
import { eq } from "drizzle-orm";

export const GenerateAIVideoData = inngest.createFunction(
  { id: "generate-ai-video-data" },
  { event: "ai/generate-video-data" },
  async ({ event, step }) => {
    const { prompt, videoId } = event.data;

    // Step 1: Generate AI video data using Gemini API
    const generateVideoData = await step.run("Generate AI Video Data", async () => {
      const result = await GenerateAIVideoData_AiModel.sendMessage(prompt);

      // Parse response text from Gemini API
      const responseText = result.response.text();
      const parsedResponse = JSON.parse(responseText);

      // Ensure the response contains unique frame data
      if (!parsedResponse || !parsedResponse.frameList || !parsedResponse.frameList.length) {
        throw new Error("Invalid response from Gemini API: Missing frameList or data.");
      }

      // Transform the frame data into unique frames
      const uniqueFrames = parsedResponse.frameList.map((frame, index) => ({
        ...frame,
        text: `${frame.text}`, // Add unique identifier to each frame's text
      }));

      return {
        ...parsedResponse,
        frameList: uniqueFrames, // Replace with unique frames
      };
    });

    // Step 2: Update or record data in the database
    const updateRecord = await step.run("Update record using videoId", async () => {
      const result = await db
        .update(VIDEO_RAW_TABLE)
        .set({
          videoData: generateVideoData, // Use the modified video data with unique frames
        })
        .where(eq(VIDEO_RAW_TABLE.videoId, videoId))
        .returning(VIDEO_RAW_TABLE);
      return result;
    });

    return updateRecord;
  }
);
