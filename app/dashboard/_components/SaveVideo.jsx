"use client";

import React, { useContext, useEffect } from "react";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { usePathname } from "next/navigation";
import { VideoFrameContext } from "@/app/_context/VideoFramesContext";
import { toast } from "sonner";

const SaveVideo = () => {
  const pathname = usePathname(); // Get the full pathname
  const videoId = pathname?.split("/")[2]; // Extract the second segment as videoId

  const { videoFrames ,setVideoFrames} = useContext(VideoFrameContext);

  useEffect(()=>{
    videoId && GetVideoData();
  },[videoId])
  
  const saveVideo = async () => {
    if (!videoId || !videoFrames) {
      toast.error("Invalid video data or ID.");
      return;
    }

    try {
      const result = await axios.put("/api/video", {
        videoId: videoId,
        videoData: videoFrames,
      });
      console.log("Save result:", result);
      toast.success("Video saved successfully!");
    } catch (error) {
      console.error("Error saving video:", error.response?.data || error);
      toast.error("Failed to save video.");
    }
  };
  
  const GetVideoData = async () => {
    const result = await axios.get('/api/video?videoId='+videoId);
    setVideoFrames(result?.data?.videoData);
  }

  return (
    <div>
      <Button
        variant="outline"
        className="bg-green-800 text-white"
        onClick={saveVideo}
      >
        Save
      </Button>
    </div>
  );
};

export default SaveVideo;
