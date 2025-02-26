"use client";
import React, { useContext, useEffect, useState } from 'react';
import TextAreaBox from './TextAreaBox';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { LetterText } from 'lucide-react';
import { VideoFrameContext } from '@/app/_context/VideoFramesContext';

const FrameConfig = () => {
  const { videoFrames, setVideoFrames } = useContext(VideoFrameContext);
  const [frame, setFrame] = useState({});

  // Initialize `frame` when `videoFrames` is available
  useEffect(() => {
    if (videoFrames?.frameList && videoFrames.selectedFrame !== undefined) {
      setFrame(videoFrames.frameList[videoFrames.selectedFrame]);
    }
  }, [videoFrames]);

  const handleInputChange = (field, value) => {
    const updatedFrame = { ...frame, [field]: value };
    setFrame(updatedFrame);

    if (videoFrames?.frameList?.length) {
      const updatedFrameList = [...videoFrames.frameList];
      updatedFrameList[videoFrames.selectedFrame] = updatedFrame;

      setVideoFrames(prev => ({
        ...prev,
        frameList: updatedFrameList,
      }));
    }
  };

  return (
    <div className='p-3 bg-gray-100 rounded-lg'>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <span className='flex gap-2 text-lg items-center'><LetterText /> Text</span>
          </AccordionTrigger>
          <AccordionContent>
            <TextAreaBox frame={frame} handleInputChange={handleInputChange} />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FrameConfig;