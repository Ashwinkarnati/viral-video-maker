"use client"
import React, { useContext, useEffect } from 'react'
import TextAreaBox from './TextAreaBox'
import { useState } from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { LetterText } from 'lucide-react'
import { VideoFrameContext } from '@/app/_context/VideoFramesContext'
  
const FrameConfig = () => {
    const {videoFrames,setVideoFrames} = useContext(VideoFrameContext)
    const [frame,setFrame] = useState([]);

    useEffect(()=>{
        if(videoFrames?.frameList){
            setFrame(videoFrames.frameList[videoFrames?.selectedFrame])
            
        }
    },[videoFrames])

    const handleInputChange =(field,value)=>{
        setFrame(prev=>({
            [field]:value
        }))
    }
    useEffect(()=>{
        if(videoFrames?.frameList?.length && frame){
            const frameList = videoFrames?.frameList;
            frameList[videoFrames?.selectedFrame]= frame;
            setVideoFrames(prev=>({
                ...prev,
                frameList:frameList
            }))
        }
    },[frame])
  return (
    <div className='p-3 bg-gray-100 rounded-lg'>
      <Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>
        <span className='flex gap-2 text-lg items-center'><LetterText/> Text</span>
    </AccordionTrigger>
    <AccordionContent>
      <TextAreaBox frame={frame} handleInputChange={(value)=>handleInputChange('text',value)}/>
    </AccordionContent>
  </AccordionItem>
</Accordion>

    </div>
  )
}

export default FrameConfig
