import React, { useState, useRef } from 'react';
import { Input, message } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone,DeleteOutlined } from '@ant-design/icons';
import '../../components/utility/styles/Input.css';
import { useGenerateOtpMutation, useRegisterMutation } from '../../redux/services/AuthApi';
import { useNavigate } from 'react-router-dom';
import {Loading3QuartersOutlined} from '@ant-design/icons';
import 'firebase/compat/storage';
import firebase from 'firebase/compat/app';
import {ref, uploadBytesResumable, getDownloadURL,deleteObject} from "firebase/storage";

const Signup = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [profileImg,setProfileImg] = useState("");
  const [register,{isLoading:isRegistering}] = useRegisterMutation();
  const [generateOtp,{isLoading:isGeneratingOtp}] = useGenerateOtpMutation();
  const [uploadPerc,setUploadPerc] = useState(0);
  const [isOtp,setIsOtp] = useState(false); 
  const [form,setForm] = useState({
    name:"",
    email:"",
    password:"",
    confirmPassword:"",
    photo:"",
    otp:"",
  });

  const handleImageUpload = (file) => {    
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(firebase.storage(),fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on('state_changed',
    (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      setUploadPerc(Math.round(progress));
    }, 
    (error) => {
      message.error("Cannot Upload Image !! Try Again Later");
    },
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        setProfileImg(downloadURL);
        setForm({...form,photo:downloadURL});
      });
    }
  );
  }

  const handleDeleteImage = () => {
    const imageRef = ref(firebase.storage(), profileImg);
    deleteObject(imageRef).then(() => {
      setProfileImg("");
      setForm({ ...form, photo: "" });
    }).catch((error) => {
      console.error("Error deleting image:", error);
    });
  };

  const handleOpenFileInput = () => {
    fileInputRef.current.click();
  };
  
  const handleRegister = async () => {
    try{
      const result = await generateOtp(form);
      if(result?.data?.success){
        message.success(result?.data?.message);
        setIsOtp(true);
      }else{
        message.error(result?.data?.message);
      }
    }catch(error){
      message.error("Some error occured");
    }
  }
  const handleSubmit = async () => {
    try{
      const result = await register(form);
      if(result?.data?.success){
        message.success(result?.data?.message);
        navigate('/login');
      }else{
        message.error(result?.data?.message);
      }
    }catch(error){
      message.error("Some error occured");
    }
  }


  return (
    <div className='w-full mx-auto h-auto mt-[6rem] flex items-center justify-center px-6'>
    {
      !isOtp ? (
      <div className='flex flex-col h-full items-start justify-center gap-4 w-full lg:w-[30vw] p-3 rounded-lg shadow-md'>
        <h1 className='text-[1.5rem] font-[600] text-blackPrimary'>Sign Up</h1>
        <div className=' flex flex-col gap-2 w-full'>
          <Input placeholder='Username' onChange={(e)=>setForm({...form,name:e.target.value})}/>
          <Input placeholder='Email' onChange={(e)=>setForm({...form,email:e.target.value})}/>
          <Input.Password
            placeholder='Password'
            iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
            onChange={(e)=>setForm({...form,password:e.target.value})}
          />
          <Input.Password
            placeholder='Confirm Password'
            iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
            onChange={(e)=>setForm({...form,confirmPassword:e.target.value})}
          />
          {
            !profileImg && 
          <div
            className='border-dashed border-2 border-borderGray p-8 rounded-[6px] cursor-pointer'
            onClick={handleOpenFileInput}
          >
            <h1 className='text-center'> Click here to upload image</h1>
            <input
              type='file'
              ref={fileInputRef}
              className='h-full'
              onChange={(e)=>handleImageUpload(e.target.files[0])}
              accept='image/png, image/jpeg'
              hidden
            />
          </div>
          }
          {
            profileImg && uploadPerc === 100 &&
            <div className='flex items-center justify-between'>
              <img src={profileImg} alt="" className='rounded-full h-[5rem] w-[5rem] object-cover'/>
              <DeleteOutlined className='text-[1.2rem] cursor-pointer text-gray-500' onClick={handleDeleteImage}/>
            </div>
          }
        </div>
        <div
          className='bg-blackPrimary text-white h-[2.5rem] rounded-md px-6 flex items-center justify-center w-full cursor-pointer'
          onClick={handleRegister}
        >
          {
            isGeneratingOtp ? <Loading3QuartersOutlined spin/> : <h1>Sign Up</h1>
          }
        </div>
      </div>
      ):(
      <div className='flex flex-col h-full items-start justify-center gap-4 w-full lg:w-[30vw] p-3 rounded-lg shadow-md'>
        <h1 className='text-[1.5rem] font-[600] text-blackPrimary'>OTP Verification</h1>
        <div className=' flex flex-col gap-2 w-full'>
        <Input placeholder='Enter OTP' onChange={(e)=>setForm({...form,otp:e.target.value})} value={form.otp}/>
        </div>
        <div
          className='bg-blackPrimary text-white h-[2.5rem] rounded-md px-6 flex items-center justify-center w-full cursor-pointer'
          onClick={handleSubmit}
        >
          {
            isRegistering ? <Loading3QuartersOutlined spin/> : <h1>Verify OTP</h1>
          }
        </div>
      </div>
      )
    }
    </div>
  );
};

export default Signup;
