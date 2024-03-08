import React from 'react';
import { Drawer } from 'antd';
import '../../utility/styles/Sidebar.css';
import { BsPencilSquare } from "react-icons/bs";
import { IoBookmarksOutline,IoSettingsOutline,IoExitOutline,IoTrendingUpSharp } from "react-icons/io5";
import { PiClockCountdown } from "react-icons/pi";
import { SlBadge } from "react-icons/sl"
import { GoPerson } from "react-icons/go"
import Divider from '../../utility/divider/Divider';

const Comment = ({commentSectionOpen,setCommentSectionOpen}) => {
  const onClose = () => {
    setCommentSectionOpen(false);
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
      <Drawer title="enigma" className='comment' onClose={onClose} open={commentSectionOpen} width={340} placement='left'>
        <div className='no-scrollbar h-full flex flex-col p-[1rem] gap-4'>
           <div className='flex flex-col items-start p-2 shadow-md gap-3 rounded-md'>
                {/* LOGGED IN USER TO COMMENT */}
                <div className='flex items-center gap-2'>
                    <img className='h-[3rem] w-[3rem] rounded-full' src="https://images.unsplash.com/photo-1682686581551-867e0b208bd1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <h1 className='text-blackTertiary'>Nilay Singh</h1>
                </div>
                <textarea type="text" placeholder='What are your thoughts ?' className='p-2 font-brygada w-full focus:outline-none h-[8rem] resize-none'/>
                <div className='w-full flex items-center justify-end'>
                    <div className='bg-blackPrimary text-white rounded-[5rem] p-1 px-6 flex items-center w-[8rem] cursor-pointer'>
                      <h1>Add Review</h1>
                    </div>
                </div>                
           </div>
           {/* COMMENT SECTION */}
           <div className='flex flex-col gap-4'>
                <h1 className='font-600 font-brygada text-[1rem]'>Reviews (34)</h1>
                {/* COMMENT CARD */}
                <div>
                    <div className='flex flex-col items-start p-2 gap-3'>
                        <div className='flex items-center gap-2'>
                            <img className='h-[3rem] w-[3rem] rounded-full' src="https://images.unsplash.com/photo-1682686581551-867e0b208bd1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                            <h1 className='text-blackTertiary'>Nilay Singh</h1>
                        </div>
                        <div className='font-brygada'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut voluptate vel laborum soluta itaque rem totam sequi error omnis aperiam!</div>          
                    </div>
                    <Divider/>
                    <div className='flex flex-col items-start p-2 gap-3'>
                        <div className='flex items-center gap-2'>
                            <img className='h-[3rem] w-[3rem] rounded-full' src="https://images.unsplash.com/photo-1682686581551-867e0b208bd1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                            <h1 className='text-blackTertiary'>Nilay Singh</h1>
                        </div>
                        <div className='font-brygada'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut voluptate vel laborum soluta itaque rem totam sequi error omnis aperiam!</div>          
                    </div>
                    <Divider/>
                    <div className='flex flex-col items-start p-2 gap-3'>
                        <div className='flex items-center gap-2'>
                            <img className='h-[3rem] w-[3rem] rounded-full' src="https://images.unsplash.com/photo-1682686581551-867e0b208bd1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                            <h1 className='text-blackTertiary'>Nilay Singh</h1>
                        </div>
                        <div className='font-brygada'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut voluptate vel laborum soluta itaque rem totam sequi error omnis aperiam!</div>          
                    </div>
                    <Divider/>
                    <div className='flex flex-col items-start p-2 gap-3'>
                        <div className='flex items-center gap-2'>
                            <img className='h-[3rem] w-[3rem] rounded-full' src="https://images.unsplash.com/photo-1682686581551-867e0b208bd1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                            <h1 className='text-blackTertiary'>Nilay Singh</h1>
                        </div>
                        <div className='font-brygada'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut voluptate vel laborum soluta itaque rem totam sequi error omnis aperiam!</div>          
                    </div>
                    <Divider/>
                </div>
           </div>
        </div>
      </Drawer>
    </>
  )
}

export default Comment