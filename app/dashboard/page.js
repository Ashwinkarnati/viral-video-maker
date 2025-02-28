"use client"
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import VideoCreateOption from "./_components/VideoCreateOption";
import axios from "axios";
import { useUser } from "@clerk/nextjs";
import UserVideoList from "./_components/UserVideoList";

const Dashboard = () => {
  const [videoList,setVideoList] = useState([]);
  const {user} = useUser();
  useEffect(()=>{user&&GetUserVideoList()},[user]);
  const GetUserVideoList = async()=>{
    const result = await axios.get('/api/video?userEmail='+user?.primaryEmailAddress?.emailAddress);
    setVideoList(result.data)
  }
  return (
    <div className="p-5 bg-gray-50 min-h-screen">
      {/* Page Header */}
      <h2 className="text-5xl font-bold text-center text-gray-800 mb-8">
        Welcome to Your Dashboard
      </h2>

      {/* Options Section */}
      {videoList.length==0 ?<VideoCreateOption/> : <UserVideoList videoList={videoList} />}
    </div>
  );
};

export default Dashboard;
