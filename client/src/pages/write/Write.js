import React, { useRef, useState } from 'react'
import { InboxOutlined,DeleteOutlined,Loading3QuartersOutlined} from '@ant-design/icons';
import '../../components/utility/styles/Uploader.css';
import { Select, message} from 'antd';
import 'firebase/compat/storage';
import firebase from 'firebase/compat/app';
import {ref, uploadBytesResumable, getDownloadURL,deleteObject} from "firebase/storage";
import { useGetAllCategoriesQuery } from '../../redux/services/CategoryApi';
import { useCreateBlogMutation } from '../../redux/services/BlogApi';
import { useNavigate } from 'react-router-dom';

const Write = () => {

  const fileInputRef = useRef(null);
  const [blogImg,setBlogImg] = useState("");
  const [uploadPerc,setUploadPerc] = useState(0);
  const [form,setForm] = useState({
    title:"",
    content:"",
    categories:[],
    photo:"",
  });
  const navigate = useNavigate();

  const {data:categories,isLoading:isLoadingCategories} = useGetAllCategoriesQuery();
  const [createBlog,{isLoading:isCreatingBlog}] = useCreateBlogMutation();

  const categoryOptions = categories?.categories?.map((item)=>({
    label:item.name,
    value:item._id,
  }));

  const handleCategoryChange = (value) => {
    if (value.length > 3) {
      message.warning('You can select at most 3 categories');
    } else {
      setForm({ ...form, categories: value });
    }
  };

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
        setBlogImg(downloadURL);
        setForm({...form,photo:downloadURL});
      });
    }
  );
  }

  const handleDeleteImage = () => {
    const imageRef = ref(firebase.storage(), blogImg);
    deleteObject(imageRef).then(() => {
      setBlogImg("");
      setForm({ ...form, photo: "" });
    }).catch((error) => {
      console.error("Error deleting image:", error);
    });
  };

  const handleOpenFileInput = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = async () => {
    console.log(form);
    try{
      const result = await createBlog(form);
      console.log(result);
      if(result?.data && result?.data?.success && result?.data?.blog){
        message.success(result?.data?.message);
        setForm({
          title:"",
          content:"",
          categories:[],
          photo:"",
        })
        navigate('/');        
      }else{
        message.error(result?.data?.message);
      }
    }catch(error){
      message.error("Some error occured");
    }
  }

  return (
    <div className='w-full items-center justify-center p-6'>
       <div className='flex flex-col gap-8 w-[70%] mx-auto'>
          {
            !blogImg && 
          <div
            className='border-dashed border-2 border-borderGray p-8 rounded-[6px] cursor-pointer flex flex-col items-center justify-center'
            onClick={handleOpenFileInput}
          >
            <InboxOutlined className='text-blackPrimary text-[4rem]'/>
            <h1 className='text-center'> Click here to upload image</h1>
            <input
              type='file'
              ref={fileInputRef}
              className='h-full'
              onChange={(e)=>handleImageUpload(e.target.files[0])}
              accept="image/*" 
              hidden
            />
          </div>
          }
          {
            blogImg && uploadPerc === 100 &&
            <div className='flex flex-col items-start gap-2 justify-between'>
              <img src={blogImg} alt="" className='rounded-md h-[25rem] w-full object-contain'/>
              <div className='flex items-center gap-2' onClick={handleDeleteImage}>
                <DeleteOutlined className='text-[1.2rem] cursor-pointer text-gray-500'/>
                <h1 className='text-blackSecondary'>Delete</h1>
              </div>
            </div>
          }
          <Select
             mode='multiple'
             allowClear
             options={categoryOptions}
             value={form.categories}
             onChange={handleCategoryChange}
             filterOption={(input, option) =>
                (option?.label)
                  ?.toLowerCase()
                  ?.indexOf(input?.toLowerCase()) >= 0
              }
              maxTagCount={3}
              placeholder="Select Categories"
          />
          <input onChange={(e)=>setForm({...form,title:e.target.value})} type="text" placeholder='Title' className='font-brygada font-[300] text-[3rem] border-none focus:outline-none text-blackSecondary'/>
          <textarea onChange={(e)=>setForm({...form,content:e.target.value})} type="text" placeholder='Tell your story...'  className='min-h-[15rem] overflow-auto font-brygada text-[1.5rem] border-none focus:outline-none text-blackSecondary resize-none'/>
          <div onClick={handleSubmit} className='bg-blackPrimary text-white rounded-[5rem] px-6 py-3 flex items-center justify-center w-[14rem] mx-auto cursor-pointer'>
          {
            isCreatingBlog ? <Loading3QuartersOutlined spin/> : <h1>Publish</h1>
          }
          </div>
       </div>
    </div>
  )
}

export default Write