import React, { useRef, useState } from 'react'
import { InboxOutlined,DeleteOutlined} from '@ant-design/icons';
import '../../components/utility/styles/Uploader.css';
import { message} from 'antd';

const Write = () => {

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

  return (
    <div className='w-full items-center justify-center p-6'>
       <div className='flex flex-col gap-12 w-[70%] mx-auto'>
          <div
            className='border-dashed border-2 border-blackPrimary p-8 rounded-[6px] cursor-pointer flex flex-col items-center gap-2'
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onClick={handleOpenFileInput}
          >
            <InboxOutlined className='text-[3rem] text-blackPrimary'/>
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
          <input type="text" placeholder='Title' className='font-brygada font-[300] text-[3rem] border-none focus:outline-none text-blackSecondary'/>
          <textarea type="text" placeholder='Tell your story...'  className='min-h-[15rem] overflow-auto font-brygada text-[1.5rem] border-none focus:outline-none text-blackSecondary resize-none'/>
          <div className='bg-blackPrimary text-white rounded-[5rem] px-6 py-3 flex items-center justify-center w-[14rem] mx-auto cursor-pointer'>
                <h1>Publish</h1>
          </div>
       </div>
    </div>
  )
}

export default Write