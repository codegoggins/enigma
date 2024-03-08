import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../../utility/sidebar/Sidebar';
import { IoSearchOutline,IoNotificationsOutline } from "react-icons/io5";
import { BsPencilSquare } from "react-icons/bs";


const Navbar = () => {

  const [sidebarOpen,setSidebarOpen] = useState(false);

  return (
    <div className='w-full mb-[2rem] flex items-center justify-center p-3 px-6'>
        <div className='w-full flex items-center justify-between'>
          <div className='flex items-center gap-4'>
            <Link to='/'>
                <h1 className='font-cookie text-[3rem] cursor-pointer'>enigma</h1>
            </Link>
            <div className='bg-graySecondary hidden items-center justify-center gap-2 p-3 rounded-[5rem] sm:flex'>
              <IoSearchOutline className='text-blackTertiary'/>
              <input type="text" placeholder='Search' className='bg-transparent border-none focus:outline-none'/>
            </div>
          </div>
          <div className='flex items-center justify-center gap-4'>
            <Link to='/new-post'>
              <div className='hidden md:flex items-center text-blackTertiary gap-2 cursor-pointer'>
                  <BsPencilSquare className='text-[1.3rem] text-blackTertiary'/>
                  <h1 className='text-[1rem]'>Write</h1>
              </div>
            </Link>
            <IoSearchOutline className='text-[1.3rem] text-blackTertiary cursor-pointer sm:hidden'/>
            <IoNotificationsOutline className='text-[1.3rem] text-blackTertiary cursor-pointer'/>
            <div className='h-[2.6rem] w-[2.6rem] rounded-full flex items-center justify-center overflow-hidden cursor-pointer' onClick={()=>setSidebarOpen(true)}>
               <img 
               className='object-cover w-full h-full'
               src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
               alt="profile-img"/>
            </div>
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
          </div>
        </div>
    </div>
  )
}

export default Navbar