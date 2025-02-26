"use client";

import React, { useContext } from 'react';
import { Button } from '@/components/ui/button';
import axios from 'axios';
import { useParams } from 'next/navigation';
import { VideoFrameContext } from '@/app/_context/VideoFramesContext';
import { toast } from 'sonner';

const SaveVideo = () => {
  const { videoId } = useParams();
  const { videoFrames } = useContext(VideoFrameContext);

  const saveVideo = async () => {
    try {
      const result = await axios.put('/api/video', {
        videoId: videoId,
        videoData: videoFrames,
      });
      console.log(result);
      toast.success('Video saved successfully!');
    } catch (error) {
      console.error('Error saving video:', error);
      toast.error('Failed to save video.');
    }
  };

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
