"use client";
import React, { useState } from "react";
import Header from "../dashboard/_components/Header";
import { Textarea } from "@/components/ui/textarea";
import DropDown from "../editor/_components/DropDown";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import { v4 as uuidv4 } from "uuid"; // Correct import for UUID
import { Prompt } from "../_data/Prompt";
import { useRouter } from "next/navigation";

const CreateAiVideo = () => {
  const DurationOption = Array.from({ length: 10 }, (_, index) => (index + 1) * 5); // Generate options: [5, 10, 15, ..., 50]
  const { user } = useUser();
  const router = useRouter();
  const [topic, setTopic] = useState("");
  const [duration, setDuration] = useState(10);
  const [isLoading, setIsLoading] = useState(false); // Loading state for the button

  const OnGenerateClick = async () => {
    if (!topic || !duration) {
      alert("Please fill in all fields.");
      return;
    }

    setIsLoading(true); // Disable button and show loading state

    try {
      // Create a new record in the database
      const videoId = uuidv4(); // Generate a unique video ID
      const result = await axios.post("/api/video", {
        videoId: videoId,
        userEmail: user?.primaryEmailAddress?.emailAddress,
        topic: topic,
        duration: duration,
      });


      // Generate content for the video using AI
      const PROMPT = Prompt.replace("{userTopic}", topic).replace("{userDuration}", duration);
      const aiResult = await axios.post("/api/create-ai-content", {
        videoId: videoId,
        prompt: PROMPT,
      });
      alert("Video generation started successfully!");
      router.replace('/dashboard')

    } catch (error) {
      console.error("Error creating video:", error);
      alert("An error occurred while generating the video. Please try again.");
    } finally {
      setIsLoading(false); // Re-enable button
    }
  };

  return (
    <div>
      <Header />
      <div className="flex flex-col items-center justify-center px-10 md:px-32 lg:px-48 mt-24">
        <h2 className="font-bold text-3xl text-center">
          Generate Video Content for Your Next Video
        </h2>

        {/* Topic Input */}
        <div className="w-full max-w-xl mt-7">
          <label>Topic:</label>
          <Textarea
            className="w-full"
            placeholder="Enter the topic for your video"
            value={topic}
            onChange={(event) => setTopic(event.target.value)}
          />
        </div>

        {/* Duration Dropdown */}
        <div className="w-full max-w-xl mt-7">
          <label>Select Duration of Video (in seconds):</label>
          <DropDown
            defaultValue={10}
            handleChange={(value) => setDuration(Number(value))} // Ensure duration is a number
            options={DurationOption}
          />
        </div>

        {/* Generate Button */}
        <Button
          className="mt-7 w-full max-w-xl"
          disabled={!topic || isLoading} // Disable if topic is empty or loading
          onClick={OnGenerateClick}
        >
          {isLoading ? "Generating..." : "Generate"}
        </Button>
      </div>
    </div>
  );
};

export default CreateAiVideo;