import React from 'react';
import { Drawer } from 'antd';
import './Sidebar.css';
import { BsPencilSquare } from "react-icons/bs";
import { IoBookmarksOutline,IoSettingsOutline,IoExitOutline,IoTrendingUpSharp } from "react-icons/io5";
import { PiClockCountdown } from "react-icons/pi";
import { SlBadge } from "react-icons/sl"
import { GoPerson } from "react-icons/go"

const Sidebar = ({sidebarOpen,setSidebarOpen}) => {
  const onClose = () => {
    setSidebarOpen(false);
  };
  return (
    <>
      <Drawer title="enigma" onClose={onClose} open={sidebarOpen} width={280}>
        <div className='no-scrollbar h-full flex flex-col gap-4 p-[1rem]'>
            <div className='flex items-center text-blackTertiary gap-2 cursor-pointer'>
                <BsPencilSquare className='text-[1.3rem] text-blackTertiary'/>
                <h1 className='text-[1rem]'>Write</h1>
            </div>
            <div className='h-[1px] bg-graySecondary w-full mb-6'></div>
            <div className='flex flex-col gap-8'>
                <div className='flex items-center text-blackTertiary gap-2 cursor-pointer'>
                    <IoTrendingUpSharp className='text-[1.3rem] text-blackTertiary'/>
                    <h1 className='text-[1rem]'>Trending Posts</h1>
                </div>                
                <div className='flex items-center text-blackTertiary gap-2 cursor-pointer'>
                    <SlBadge className='text-[1.3rem] text-blackTertiary'/>
                    <h1 className='text-[1rem]'>Top Authors</h1>
                </div>                
                <div className='flex items-center text-blackTertiary gap-2 cursor-pointer'>
                    <PiClockCountdown className='text-[1.3rem] text-blackTertiary'/>
                    <h1 className='text-[1rem]'>Recent Posts</h1>
                </div>                
                <div className='flex items-center text-blackTertiary gap-2 cursor-pointer'>
                    <IoBookmarksOutline className='text-[1.3rem] text-blackTertiary'/>
                    <h1 className='text-[1rem]'>Saved Posts</h1>
                </div>                
            </div>
            <div className='h-[1px] bg-graySecondary w-full mb-6'></div>
            <div className='flex flex-col gap-8'>
                <div className='flex items-center text-blackTertiary gap-2 cursor-pointer'>
                    <IoExitOutline className='text-[1.3rem] text-blackTertiary transform -rotate-180'/>
                    <h1 className='text-[1rem]'>Sign Out</h1>
                </div>                
                <div className='flex items-center text-blackTertiary gap-2 cursor-pointer'>
                    <IoSettingsOutline className='text-[1.3rem] text-blackTertiary'/>
                    <h1 className='text-[1rem]'>Settings</h1>
                </div>                                
                <div className='flex items-center text-blackTertiary gap-2 cursor-pointer'>
                    <GoPerson className='text-[1.3rem] text-blackTertiary'/>
                    <h1 className='text-[1rem]'>Profile</h1>
                </div>                                
            </div>
        </div>
      </Drawer>
    </>
  )
}

export default Sidebar