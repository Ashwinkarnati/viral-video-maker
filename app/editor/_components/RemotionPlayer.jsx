import React, { useContext, useEffect } from "react";
import { Player } from "@remotion/player";
import { MyComposition } from "@/remotion/Composition";
import RemotionComposition from "./RemotionComposition";
import { Fullscreen } from "lucide-react";
import { useState } from "react";
import { VideoFrameContext } from "@/app/_context/VideoFramesContext";
import { useRef } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const RemotionPlayer = () => {
    const {videoFrames,setVideoFrames} = useContext(VideoFrameContext)
    const [screenSize,setScreenSize] = useState({
        width:500,
        height:282
    })
    const playRef = useRef(null);
    useEffect(()=>{
      if(videoFrames?.selectedFrame){
        let skipDuration = 0;
        for(let i=0;i<videoFrames?.selectedFrame;i++){
          skipDuration+=videoFrames.frameList[i].duration;
        }
        playRef?.current?.seekTo(skipDuration*30);
      }
      if(videoFrames?.selectedFrame == 0){
        playRef?.current?.seekTo(0);
      }
    },[videoFrames?.selectedFrame])
  return (
    <div>
      <div className="flex justify-center items-center">
        {videoFrames?.totalDuration && <Player
          ref={playRef}
          component={RemotionComposition}
          durationInFrames={Number(videoFrames.totalDuration * 30)}
          compositionWidth={screenSize.width}
          compositionHeight={screenSize.height}
          fps={30}
          controls
          style={{ borderRadius: 6 , width: '100%',height:'340px' }}
          inputProps={
            {
                frameList : videoFrames.frameList
            }
          }
        />}
      </div>
      <div className="flex gap-2 items-center">
        <Fullscreen />
        <Select onValueChange={(v)=>setScreenSize(JSON.parse(v))} className="text-center">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="16:9" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value={JSON.stringify({width:400,height:400})}>1:1</SelectItem>
            <SelectItem value={JSON.stringify({width:500,height:282})}>16:9</SelectItem>
            <SelectItem value={JSON.stringify({width:282,height:500})}>9:16</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default RemotionPlayer;
