import React, { useState } from 'react'
import { Input, message } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import '../../components/utility/styles/Input.css'
import { useLoginMutation } from '../../redux/services/AuthApi';
import { useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [login,{isLoading:isLogging}] = useLoginMutation();
  const [form,setForm] = useState({
    email:"",
    password:"",
  });

  const handleLogin = async () => {
    try{
      const result = await login(form);
      if(result?.data?.success){
        message.success(result?.data?.message);
        navigate('/');
      }else{
        message.error(result?.data?.message);
      }
    }catch(error){
      message.error("Some error occured");
    }
  }

  return (
    <div className='w-full mx-auto mt-[6rem] flex items-center justify-center px-6'>
           <div className='flex flex-col h-[40vh] items-start justify-center gap-4 w-full lg:w-[30vw] p-3 rounded-lg shadow-md'>
              <h1 className='text-[1.5rem] font-[600] text-blackPrimary'>Sign In</h1>
              <div className=' flex flex-col gap-2 w-full'>
                <Input placeholder="Enter your email" onChange={(e)=>setForm({...form,email:e.target.value})}/>
                <Input.Password
                  placeholder="Enter your password"
                  onChange={(e)=>setForm({...form,password:e.target.value})}
                  iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                />
              </div>
              <div className='bg-blackPrimary text-white h-[2.5rem] rounded-md px-6 flex items-center justify-center w-full cursor-pointer' onClick={handleLogin}>
                <h1>Sign In</h1>
              </div>
           </div>
    </div>
  )
}

export default Login