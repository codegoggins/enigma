import React, { useState, useRef } from 'react';
import { Input } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone,DeleteOutlined } from '@ant-design/icons';
import '../../components/utility/styles/Input.css';

const Signup = () => {
  const [file, setFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    if (event.dataTransfer.files && event.dataTransfer.files.length > 0) {
      const file = event.dataTransfer.files[0];
      setFile(file);
    }
  };

  const handleFileChange = () => {
    const file = fileInputRef.current.files[0];
    if (file) {
      setFile(file);
    }
  };

  const handleOpenFileInput = () => {
    fileInputRef.current.click();
  };

  const [passwordVisible, setPasswordVisible] = React.useState(false);

  return (
    <div className='w-full mx-auto h-auto mt-[6rem] flex items-center justify-center px-6'>
      <div className='flex flex-col h-full items-start justify-center gap-4 w-full lg:w-[30vw] p-3 rounded-lg shadow-md'>
        <h1 className='text-[1.5rem] font-[600] text-blackPrimary'>Sign Up</h1>
        <div className=' flex flex-col gap-2 w-full'>
          <Input placeholder='Username' />
          <Input placeholder='Email' />
          <Input.Password
            placeholder='Password'
            iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
          />
          <Input.Password
            placeholder='Confirm Password'
            iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
          />
          <div
            className='border-dashed border-2 border-borderGray p-8 rounded-[6px] cursor-pointer'
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onClick={handleOpenFileInput}
          >
            <h1 className='text-center'>Drag & Drop or Click here to upload image</h1>
            <input
              type='file'
              ref={fileInputRef}
              className='h-full'
              onChange={handleFileChange}
              accept='image/png, image/jpeg'
              hidden
            />
          </div>
            {file &&
              (
                <div className='flex items-center justify-between'>
                  <p>{file.name}</p>
                  <DeleteOutlined onClick={()=>setFile(null)}/>
                </div>
              )
            }
        </div>
        <div
          className='bg-blackPrimary text-white h-[2.5rem] rounded-md px-6 flex items-center justify-center w-full cursor-pointer'
        >
          <h1>Sign Up</h1>
        </div>
      </div>
    </div>
  );
};

export default Signup;
