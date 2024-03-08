import React from 'react'
import { InboxOutlined } from '@ant-design/icons';
import '../../components/utility/styles/Uploader.css';
import { message, Upload } from 'antd';
const { Dragger } = Upload;
const props = {
  name: 'file',
  multiple: true,
  action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files);
  },
};

const Write = () => {
  return (
    <div className='w-full items-center justify-center p-6'>
       <div className='flex flex-col gap-12 w-[70%] mx-auto'>
          <Dragger {...props}>
              <p className="ant-upload-drag-icon">
                <InboxOutlined className='!text-blackPrimary'/>
              </p>
              <p className="ant-upload-text">Click or drag file to Upload Image</p>
          </Dragger>
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