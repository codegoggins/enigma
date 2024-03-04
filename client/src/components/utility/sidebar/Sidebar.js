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

  const iconStyle = 'text-[1.3rem] text-blackTertiary';
  const itemStyle = 'flex items-center text-blackTertiary gap-2 cursor-pointer';

  const postsItems = [
    {
        title:'Trending Posts',
        icon:<IoTrendingUpSharp className={iconStyle}/>
    },
    {
        title:'Top Authors',
        icon:<SlBadge className={iconStyle}/>
    },
    {
        title:'Recent Posts',
        icon:<PiClockCountdown className={iconStyle}/>
    },
    {
        title:'Saved Posts',
        icon:<IoBookmarksOutline className={iconStyle}/>
    },
  ]


  return (
    <>
      <Drawer title="enigma" onClose={onClose} open={sidebarOpen} width={280}>
        <div className='no-scrollbar h-full flex flex-col p-[1rem] gap-4'>
            <div className={itemStyle + ` md:hidden`}>
                <BsPencilSquare className={iconStyle}/>
                <h1 className='text-[1rem]'>Write</h1>
            </div>
            <div className='h-[1px] bg-graySecondary w-full my-2 md:hidden'></div>
            <div className='flex flex-col gap-8'>
                {
                    postsItems.map((item,index)=>(
                        <div className={itemStyle} key={index}>
                            {item.icon}
                            <h1 className='text-[1rem]'>{item.title}</h1>
                        </div>  
                    ))
                }              
            </div>
            <div className='h-[1px] bg-graySecondary w-full my-2'></div>
            <div className='flex flex-col gap-8'>
                <div className={itemStyle}>
                    <IoExitOutline className={iconStyle + ` transform -rotate-180`}/>
                    <h1 className='text-[1rem]'>Sign Out</h1>
                </div>                
                <div className={itemStyle}>
                    <IoSettingsOutline className={iconStyle}/>
                    <h1 className='text-[1rem]'>Settings</h1>
                </div>                                
                <div className={itemStyle}>
                    <GoPerson className={iconStyle}/>
                    <h1 className='text-[1rem]'>Profile</h1>
                </div>                                
            </div>
        </div>
      </Drawer>
    </>
  )
}

export default Sidebar