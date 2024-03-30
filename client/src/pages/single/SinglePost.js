import React, { useState } from 'react';
import Divider from '../../components/utility/divider/Divider';
import { BiUpvote,BiDownvote,BiSolidUpvote,BiSolidDownvote} from "react-icons/bi";
import { LiaComments } from "react-icons/lia";
import { IoBookmarksOutline} from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";
import Comment from '../../components/app/comment/Comment';
import {useParams} from 'react-router-dom';
import { useDislikeBlogMutation, useGetSingleBlogQuery, useLikeBlogMutation } from '../../redux/services/BlogApi';
import moment from 'moment';
import { message } from 'antd';
import { useGetUserQuery } from '../../redux/services/UserApi';

const SinglePost = () => {

  const [commentSectionOpen,setCommentSectionOpen] = useState(false);
  const params = useParams();
  const blogId = params.id;
  console.log(blogId);

  const {data:blog,isLoading:isLoadingBlog} = useGetSingleBlogQuery(blogId);
  const [likeBlog,{isLoading:isLiking}] = useLikeBlogMutation();
  const [dislikeBlog,{isLoading:isDisliking}] = useDislikeBlogMutation();
  const {data:user,isLoading:isLoadingUser} = useGetUserQuery();
  console.log(blog?.blog?.likes);
  console.log(user?.user?._id);

  const handleLike = async () => {
    try{
     const result = await likeBlog(blogId);
    }catch(error){
      message.error("Some error occured");
    }
  }

  const handleDilike = async () => {
    try{
     const result = await dislikeBlog(blogId);
    }catch(error){
      message.error("Some error occured");
    }
  }

  return (
    <div className='w-full p-6 flex items-center justify-center'>
        <div className='w-full flex flex-col px-[1rem] md:px-[16rem]'>
            {/* ADD Image if the blog posted by user consists of an image */}
            <div className='h-[18rem] w-full rounded-md overflow-hidden'>
              <img className='h-full w-full object-cover' 
              src={blog?.blog?.photo} 
              alt="blog-img" 
              style={{ objectFit: 'cover', objectPosition: 'top' }}
              />
            </div>
            <div className='flex flex-col gap-1'>
                <h1 className='text-[3rem] font-[600] text-blackPrimary font-brygada'>{blog?.blog?.title}</h1>
                <div className='flex items-center justify-between'>
                  <div className='flex items-start gap-2'>
                     <img className='h-[3rem] w-[3rem] rounded-full object-cover' src={blog?.blog?.author?.photo} alt="profile-img" />
                     <h1 className='text-blackTertiary'>{blog?.blog?.author?.name}</h1>
                  </div>
                  <div>
                    <h1 className='text-blackTertiary'>{moment(blog?.blog?.createdAt).format("DD MMMM, YYYY")}</h1>
                  </div>
                </div>
            </div>
            <Divider/>
            <div className='flex items-center justify-between'>
               <div className='flex items-center gap-3 text-[1.5rem] font-[400] text-blackTertiary font-brygada'>
                    <h1 className='flex items-center gap-[0.2rem] text-[1.6rem]'>
                        <div onClick={handleLike} className='cursor-pointer'>
                           {blog?.blog?.likes?.includes(user?.user?._id) ? <BiSolidUpvote/> : <BiUpvote />}
                        </div>
                       <span className='text-[0.9rem] font-[500]'>{blog?.blog?.likes?.length}</span></h1>
                    <h1 className='flex items-center gap-[0.2rem] text-[1.6rem]'>
                        <div onClick={handleDilike} className='cursor-pointer'>
                           {blog?.blog?.dislikes?.includes(user?.user?._id) ? <BiSolidDownvote/> : <BiDownvote />}
                        </div>
                       <span className='text-[0.9rem] font-[500]'>{blog?.blog?.dislikes?.length}</span></h1>
                    <h1 onClick={()=>setCommentSectionOpen(true)} className='cursor-pointer flex items-center gap-[0.2rem] text-[1.8rem]'><LiaComments /><span className='text-[0.9rem] font-[500]'>{blog?.blog?.comments?.length}</span></h1>
               </div>
               <div className='flex items-center gap-3 text-[1.5rem] text-blackTertiary'>
                    <h1 className='cursor-pointer'><IoBookmarksOutline/></h1>
                    <h1 className='cursor-pointer'><BsThreeDots/></h1>
               </div>
            </div>
            <Divider/>
            <div>
                <h1 className='font-brygada text-[1.1rem] leading-[2rem]'>{blog?.blog?.content}</h1>
            </div>
            <Divider/>
            {/* TAGS */}
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                  {
                    blog?.blog?.categories?.map((item,index)=>(
                    <div className='bg-lightGray p-3 px-6 rounded-[4rem] flex items-center justify-center cursor-pointer hover:bg-darkGray'>
                        <h1 className='text-blackPrimary font-brygada text-[0.9rem]'>{item?.name}</h1>
                    </div>
                    ))
                  }
                </div>
            </div>
        </div>
        <Comment commentSectionOpen={commentSectionOpen} setCommentSectionOpen={setCommentSectionOpen} blogId={blogId}/>
    </div>
  )
}

export default SinglePost