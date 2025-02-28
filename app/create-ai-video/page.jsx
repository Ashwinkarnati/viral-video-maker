"use client"
import React, { useState } from 'react'
import Header from '../dashboard/_components/Header'
import { Textarea } from '@/components/ui/textarea'
import DropDown from '../editor/_components/DropDown'
import { Button } from '@/components/ui/button'

const CreateAiVideo = () => {
    const DurationOption= Array.from({length:10},(_,index)=>index*5);
    const [topic,setTopic] = useState('');
    const [duration,setDuration] = useState(10);
    const OnGenerateClick=()=>{
        // Create New record to DB

        // Generate Content for video Using AI
    }
  return (
    <div>
      <Header />
      <div className='flex flex-col items-center justify-center px-10 md:px-32 lg:px-48 mt-24'>
        <h2 className='font-bold text-3xl'>Generate Video Content for your Next Video</h2>
        <div className='w-full max-w-xl mt-7'>
            <label>Topic:</label>
            <Textarea className="w-full" onChange={(event) => setTopic(event?.target.value)}/>
        </div>
        <div className='w-full max-w-xl mt-7'>
            <label>Select Duration of Video (in seconds):</label>
            <DropDown defaultValue={10} handleChange={(value)=>setDuration(value)}
            options={DurationOption}/>
        </div>
        <Button className="mt-7 w-full max-w-xl" disabled = {topic?.length<=0 && duration.length==0 } onClick={OnGenerateClick}>Generate</Button>
      </div>
    </div>
  )
}

export default CreateAiVideo
