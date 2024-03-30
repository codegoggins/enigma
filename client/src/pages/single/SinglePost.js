import React, { useState } from 'react';
import Divider from '../../components/utility/divider/Divider';
import { BiUpvote,BiDownvote} from "react-icons/bi";
import { LiaComments } from "react-icons/lia";
import { IoBookmarksOutline} from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";
import Comment from '../../components/app/comment/Comment';
import {useParams} from 'react-router-dom';
import { useGetSingleBlogQuery } from '../../redux/services/BlogApi';
import moment from 'moment';

const SinglePost = () => {

  const [commentSectionOpen,setCommentSectionOpen] = useState(false);
  const params = useParams();
  const blogId = params.id;
  console.log(blogId);

  const {data:blog,isLoading:isLoadingBlog} = useGetSingleBlogQuery(blogId);
  console.log("blog",blog?.blog);

  return (
    <div className='w-full p-6 flex items-center justify-center'>
        <div className='w-full flex flex-col px-[1rem] md:px-[16rem]'>
            {/* ADD Image if the blog posted by user consists of an image */}
            <div className='h-[18rem] w-full rounded-md overflow-hidden'>
              <img className='h-full w-full object-cover' src={blog?.blog?.photo} alt="" />
            </div>
            <div className='flex flex-col gap-1'>
                <h1 className='text-[3rem] font-[600] text-blackPrimary font-brygada'>{blog?.blog?.title}</h1>
                <div className='flex items-center justify-between'>
                  <div className='flex items-start gap-2'>
                     <img className='h-[3rem] w-[3rem] rounded-full' src={blog?.blog?.author?.photo} alt="profile-img" />
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
                    <h1 className='cursor-pointer flex items-center gap-[0.2rem] text-[1.6rem]'><BiUpvote /><span className='text-[0.9rem] font-[500]'>{blog?.blog?.likes?.length}</span></h1>
                    <h1 className='cursor-pointer flex items-center gap-[0.2rem] text-[1.6rem]'><BiDownvote/><span className='text-[0.9rem] font-[500]'>{blog?.blog?.dislikes?.length}</span></h1>
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
        <Comment commentSectionOpen={commentSectionOpen} setCommentSectionOpen={setCommentSectionOpen}/>
    </div>
  )
}

export default SinglePost