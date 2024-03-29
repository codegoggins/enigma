import React from 'react'
import access from '../../assets/access.jpg';
import { useNavigate } from 'react-router-dom';
const AccessDenied = () => {
  const navigate = useNavigate();  
  return (
    <div className='w-full h-full'>
        <div className='w-[80%] mx-auto text-center'>
             <img src={access} alt="Denied" className='h-[20rem] w-full object-contain'/>
             <h1 className='text-blackPrimary text-[4rem] font-brygada'>404</h1>
            <h1 className='text-blackPrimary text-[2rem] font-brygada'>Oops! Access Denied</h1>
            <h1 className='text-blackPrimary underline font-brygada cursor-pointer' onClick={()=>navigate('/login')}>Login</h1>
        </div>
    </div>
  )
}

export default AccessDenied