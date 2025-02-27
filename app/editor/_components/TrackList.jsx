"use client";
import React, { useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Trash2 } from 'lucide-react';
import { VideoFrameContext } from '@/app/_context/VideoFramesContext';
import { fontFamily } from '@remotion/google-fonts/Bungee';

const defaultFrame = {
  image: '/footage.png',
  text: 'Hello World',
  textColor: 'black',
  fontSize: 20,
  duration: 2,
  fontFamily: 'bungee'
};

const TrackList = () => {
  const [frameList, setFrameList] = useState([defaultFrame]);
  const [selectedFrame, setSelectedFrame] = useState(0);
  const { videoFrames, setVideoFrames } = useContext(VideoFrameContext);

  const addNewFrame = () => {
    setFrameList(prev => [...prev, defaultFrame]);
  };

  const removeFrame = (indexToRemove) => {
    const updatedFrameList = frameList?.filter((_, index) => index !== indexToRemove);
    setFrameList(updatedFrameList);
  };

  useEffect(() => {
    let totalDuration = 0;
    frameList?.forEach((frame) => {
      totalDuration += frame.duration;
    });
    frameList && setVideoFrames({
      totalDuration: totalDuration,
      frameList: frameList,
      selectedFrame: selectedFrame
    });
  }, [frameList, selectedFrame]);

  useEffect(() => {
    if (videoFrames && videoFrames.frameList !== frameList) {
      setFrameList(videoFrames?.frameList);
    }
  }, [videoFrames]);

  return (
    <div className="p-3 bg-gray-100 rounded-lg">
      <div className='h-[65vh] overflow-scroll scrollbar-hide'>
        {
          frameList?.map((frame, index) => {
            const imageSrc = frame.image || '/footage.png'; // Ensure a valid src
            return (
              <div
                key={index}
                className={`flex flex-col items-center border-b p-2 m-2 hover:bg-blue-200 hover:rounded-2xl hover:cursor-pointer ${
                  selectedFrame == index && 'bg-blue-200 rounded-2xl'
                }`}
                onClick={() => setSelectedFrame(index)}
              >
                <Image src={imageSrc} alt={`Frame ${index}`} width={40} height={40} className="w-full h-[40px] object-contain rounded-lg mt-2" />
                <h2 className="text-xs line-clamp-2 mt-1">{frame.text}</h2>
                {selectedFrame == index && (
                  <Trash2 className="mt-1 h-5 w-5 text-red-500" onClick={() => removeFrame(index)} />
                )}
              </div>
            );
          })
        }
        <Button size="sm" onClick={addNewFrame} className="mt-5 w-full">Add New Frame</Button>
      </div>
    </div>
  );
};

export default TrackList;