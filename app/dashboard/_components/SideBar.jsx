"use client";

import React, { useContext } from 'react';
import Image from 'next/image';
import { Progress } from "@/components/ui/progress"
import { Dancing_Script } from 'next/font/google';
import { Coins, Grid2X2, UserCircle } from 'lucide-react';
import { UserDetailContext } from '@/app/_context/UserDetailContext';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import CreateButton from './CreateButton';

const madimi = Dancing_Script({
  subsets: ['latin'],
  weight: ['400'], // Include styles you need
});


const SideBar = () => {
  const menuOption = [
    {
      name: 'Dashboard',
      icon: Grid2X2,
      path: '/dashboard',
    },
    {
      name: 'Profile',
      icon: UserCircle,
      path: '/dashboard/profile',
    },
  ];

  const path = usePathname();
  console.log(path);
  
  const {userDetail , setUserDetail} = useContext(UserDetailContext)
  return (
    <div className="w-60 fixed h-screen shadow-md bg-gray-200">
      {/* Logo and Title */}
      <div className="flex gap-1 items-center justify-center py-4">
        <Image src={'/logo.jpg'} alt="logo" width={50} height={50} className='ml-4'/>
        <h2 className={`${madimi.className} font-bold text-3xl text-center`}>Viral Video Maker</h2>
      </div>

      {/* Menu Options */}
      <ul className="space-y-4 px-4">
        <CreateButton/>
        {menuOption.map((item, index) => {
          return (
            <Link href={item.path} key={index}>
            <li className={`flex items-center gap-2 text-lg cursor-pointer hover:text-red-600 ml-5 m-3 ${path==item.path&&'bg-primary text-white p-2 rounded-lg w-fit hover:text-white'}`}>
              <item.icon className="w-5 h-5" />
              <span>{item.name}</span>
            </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default SideBar;
