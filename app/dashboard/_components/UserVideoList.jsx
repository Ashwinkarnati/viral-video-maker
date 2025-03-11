import { DownloadIcon, Edit, Trash } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const UserVideoList = ({ videoList }) => {
  return (
    <div className="mt-5">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
        {videoList.map((video, index) => {
          // Safely retrieve frameList[0] or provide default values
          const frame = video?.videoData?.frameList?.[0] || {};
          const bgColor = frame.bgColor || '#aaa';
          const textColor = frame.textColor || '#000';
          const text = frame.text || 'Hello World!';
          
          return (
            <div key={index}>
              <Link href={'/editor/' + video?.videoId}>
                <div
                  className="w-full h-[170px] rounded-xl border flex items-center justify-center relative group"
                  style={{ background: bgColor }}
                >
                  <h2 style={{ color: textColor }}>{text}</h2>
                  <div className="absolute top-0 w-full h-full opacity-0 group-hover:opacity-50 flex items-center justify-center bg-black rounded-xl cursor-pointer">
                    <Edit className="z-20" />
                  </div>
                </div>
              </Link>
              <div className="flex gap-4 mt-2 items-center justify-end">
                <Link href={'/editor/' + video?.videoId}>
                  <Edit className="h-4 w-4 cursor-pointer" />
                </Link>
                <DownloadIcon className="h-4 w-4 cursor-pointer" />
                <Trash className="h-4 w-4 cursor-pointer" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UserVideoList;
