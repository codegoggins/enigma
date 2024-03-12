import React, { useState } from 'react'
import { Input } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import '../../components/utility/styles/Input.css'

const Login = () => {

  const [passwordVisible, setPasswordVisible] = React.useState(false);

  return (
    <div className='w-full mx-auto mt-[6rem] flex items-center justify-center px-6'>
           <div className='flex flex-col h-[40vh] items-start justify-center gap-4 w-full lg:w-[30vw] p-3 rounded-lg shadow-md'>
              <h1 className='text-[1.5rem] font-[600] text-blackPrimary'>Sign In</h1>
              <div className=' flex flex-col gap-2 w-full'>
                <Input placeholder="Enter your email"/>
                <Input.Password
                  placeholder="Enter your password"
                  iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                />
              </div>
              <div className='bg-blackPrimary text-white h-[2.5rem] rounded-md px-6 flex items-center justify-center w-full cursor-pointer'>
                <h1>Sign In</h1>
              </div>
           </div>
    </div>
  )
}

export default Login