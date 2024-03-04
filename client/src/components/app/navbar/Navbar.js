import React, { useState } from 'react';
import { FiMenu } from "react-icons/fi";
import { Link } from 'react-router-dom';
import Sidebar from '../../utility/sidebar/Sidebar';

const Navbar = () => {

  const [sidebarOpen,setSidebarOpen] = useState(false);

  return (
    <div className='w-full mb-[2rem] flex items-center justify-center p-3 px-6'>
        <div className='w-full flex items-center justify-between'>
          <Link to='/'>
              <h1 className='font-cookie text-[3rem] cursor-pointer'>enigma</h1>
          </Link>
          <div>
            <FiMenu className='cursor-pointer text-[1.5rem]' onClick={()=>setSidebarOpen(true)}/>
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
          </div>
        </div>
    </div>
  )
}

export default Navbar