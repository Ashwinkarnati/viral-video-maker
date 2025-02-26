"use client"
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import VideoCreateOption from "./_components/VideoCreateOption";

const Dashboard = () => {
  const [videoList,setVideoList] = useState([]);
  return (
    <div className="p-5 bg-gray-50 min-h-screen">
      {/* Page Header */}
      <h2 className="text-5xl font-bold text-center text-gray-800 mb-8">
        Welcome to Your Dashboard
      </h2>

      {/* Options Section */}
      {videoList.length==0 && <VideoCreateOption/>}
    </div>
  );
};

export default Dashboard;
