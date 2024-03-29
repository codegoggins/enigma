import React, { useState } from 'react';
import {useNavigate } from 'react-router-dom';
import Sidebar from '../../utility/sidebar/Sidebar';
import { IoSearchOutline,IoNotificationsOutline } from "react-icons/io5";
import { BsPencilSquare } from "react-icons/bs";
import { useGetUserQuery } from '../../../redux/services/UserApi';
import { useSelector } from 'react-redux';
import {UserAddOutlined,LoginOutlined} from '@ant-design/icons';

const Navbar = () => {

  const [sidebarOpen,setSidebarOpen] = useState(false);

  const {data:user,isLoading:isUserLoading} = useGetUserQuery();
  const loggedIn = useSelector((state)=>state.constant.loggedIn);
  const navigate = useNavigate();

  return (
    <div className='w-full mb-[2rem] flex items-center justify-center p-3 px-6'>
        <div className='w-full flex items-center justify-between'>
          <div className='flex items-center gap-4'>
            <h1 onClick={()=>navigate('/')} className='font-cookie text-[3rem] cursor-pointer'>enigma</h1>
            <div className='bg-graySecondary hidden items-center justify-center gap-2 p-3 rounded-[5rem] sm:flex'>
              <IoSearchOutline className='text-blackTertiary'/>
              <input type="text" placeholder='Search' className='bg-transparent border-none focus:outline-none'/>
            </div>
          </div>
          {
            loggedIn && !isUserLoading && user?.user &&
            <div className='flex items-center justify-center gap-4'>
              <div className='hidden md:flex items-center text-blackTertiary gap-2 cursor-pointer' onClick={()=>navigate('/new-post')}>
                  <BsPencilSquare className='text-[1.3rem] text-blackTertiary'/>
                  <h1 className='text-[1rem]'>Write</h1>
              </div>
              <IoSearchOutline className='text-[1.3rem] text-blackTertiary cursor-pointer sm:hidden'/>
              <IoNotificationsOutline className='text-[1.3rem] text-blackTertiary cursor-pointer'/>
              <div className='h-[2.6rem] w-[2.6rem] rounded-full flex items-center justify-center overflow-hidden cursor-pointer' onClick={()=>setSidebarOpen(true)}>
                <img 
                className='object-cover w-full h-full'
                src={user?.user?.photo} 
                alt="profile-img"/>
              </div>
              <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
            </div>
          }
          {
            !loggedIn && 
            <div className='flex items-center gap-6'>
                <div className='hidden md:flex items-center text-blackTertiary gap-2 cursor-pointer' onClick={()=>navigate('/login')}>
                  <BsPencilSquare className='text-[1.3rem] text-blackTertiary'/>
                  <h1 className='text-[1rem]'>Write</h1>
                </div>
                <div onClick={()=>navigate('/signup')} className='hidden md:flex items-center text-blackTertiary gap-2 cursor-pointer'>
                    <UserAddOutlined className='text-[1.3rem] text-blackTertiary'/>
                    <h1 className='text-[1rem]'>Sign Up</h1>
                </div>
                <div onClick={()=>navigate('/login')} className='hidden md:flex items-center text-blackTertiary gap-2 cursor-pointer'>
                    <LoginOutlined className='text-[1.3rem] text-blackTertiary'/>
                    <h1 className='text-[1rem]'>Log In</h1>
                </div>
            </div>
          }
        </div>
    </div>
  )
}

export default Navbar