import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

function CreateButton() {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="w-full bg-black">+ Create New Video</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-center text-2xl">Let's create a new video</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            {/* AI Generation Option */}
            <Link href={"/create-ai-video"} className="w-full md:w-1/3">
              <div className="border rounded-xl p-6 shadow-lg hover:shadow-xl transition duration-300 hover:bg-gray-100 text-center cursor-pointer flex flex-col items-center h-[50vh]">
                <Image src={"/magic.jpg"} alt="magic" width={80} height={80} className="mb-4" />
                <h2 className="text-xl font-semibold text-gray-800">Generate with AI</h2>
                <p className="text-sm text-gray-600 mt-2">
                  Use AI tools to create amazing videos with ease.
                </p>
              </div>
            </Link>

            {/* Video Editing Option */}
            <Link href={"/editor"} className="w-full md:w-1/3">
              <div className="border rounded-xl p-6 shadow-lg hover:shadow-xl transition duration-300 hover:bg-gray-100 text-center cursor-pointer flex flex-col items-center h-[50vh]">
                <Image src={"/video-editing.png"} alt="edit" width={80} height={80} className="mb-4" />
                <h2 className="text-xl font-semibold text-gray-800">Create from Scratch</h2>
                <p className="text-sm text-gray-600 mt-2">
                  Build custom videos with our editing tools.
                </p>
              </div>
            </Link>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default CreateButton;
