import { useUser } from '@clerk/nextjs';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import { useRouter } from 'next/navigation';
import axios from 'axios';
const VideoCreateOption = () => {
  const {user} = useUser();
  const router = useRouter();

  const CreateNewScratchVideo = async () => {
    const videoId = uuidv4(); 
    const result = await axios.post('/api/video',{
      videoId: videoId,
      userEmail : user?.primaryEmailAddress?.emailAddress

    });
    console.log(result);
    router.push('/editor/'+videoId);
  }
  return (
    <div className="flex flex-col gap-8 justify-center items-center bg-gradient-to-r from-blue-100 to-green-100 p-8 rounded-3xl shadow-lg w-fit mx-auto">
        <h2 className="text-2xl font-semibold text-gray-700">
          Let's Create Your First Video!
        </h2>

        {/* Options */}
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          {/* AI Generation Option */}
          <Link href={"/create-ai-video"} className="w-full md:w-1/3">
            <div className="border border-blue-500 rounded-xl p-6 shadow-lg hover:shadow-2xl transition duration-300 bg-white hover:bg-blue-50 text-center cursor-pointer flex flex-col items-center h-[40vh]">
              <Image
                src={"/magic.jpg"}
                alt="magic"
                width={100}
                height={100}
                className="mb-4 rounded-full border-2 border-blue-300"
              />
              <h2 className="text-xl font-semibold text-gray-800">
                Generate with AI
              </h2>
              <p className="text-sm text-gray-600 mt-2">
                Use AI tools to create stunning videos effortlessly.
              </p>
            </div>
          </Link>

          {/* Video Editing Option */}
          <div onClick={CreateNewScratchVideo} className="w-full md:w-1/3">
            <div className="border border-green-500 rounded-xl p-6 shadow-lg hover:shadow-2xl transition duration-300 bg-white hover:bg-green-50 text-center cursor-pointer flex flex-col items-center h-[40vh]">
              <Image
                src={"/video-editing.png"}
                alt="edit"
                width={100}
                height={100}
                className="mb-4 rounded-full border-2 border-green-300"
              />
              <h2 className="text-xl font-semibold text-gray-800">
                Create from Scratch
              </h2>
              <p className="text-sm text-gray-600 mt-2">
                Build custom videos with our intuitive editing tools.
              </p>
            </div>
          </div>
        </div>
      </div>
  );
}

export default VideoCreateOption
