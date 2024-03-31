import React, { useState } from 'react';
import { Drawer,message} from 'antd';
import '../../utility/styles/Sidebar.css';
import Divider from '../../utility/divider/Divider';
import { useGetUserQuery } from '../../../redux/services/UserApi';
import { useCommentOnBlogMutation, useGetCommentsOnBlogQuery } from '../../../redux/services/BlogApi';
import {Loading3QuartersOutlined} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Comment = ({commentSectionOpen,setCommentSectionOpen,blogId}) => {
  const onClose = () => {
    setCommentSectionOpen(false);
  };
  const navigate = useNavigate();
  const {data:user,isLoading:isLoadingUser} = useGetUserQuery();
  const {data:allComments,isLoading:isLoadingComments} = useGetCommentsOnBlogQuery(blogId);
  const [addComment,{isLoading:isCommenting}] = useCommentOnBlogMutation();
  const [newComment,setNewComment] = useState("");
  const loggedIn = useSelector((state)=>state.constant.loggedIn);



  const handleAddCommment = async () => {
     const comment = {
        id:blogId,
        content:newComment,
     }
     try{
        const result = await addComment(comment);
      if(result?.data?.success){
        message.success(result?.data?.message);
        setNewComment("");
      }else{
        message.error(result?.data?.message);
      }
     }catch(error){
        console.log("Some error occured");
     }
  }
  
  return (
    <>
      <Drawer title="enigma" className='comment' onClose={onClose} open={commentSectionOpen} width={340} placement='left'>
            <div className='no-scrollbar h-full flex flex-col p-[1rem] gap-4'>
            {
              loggedIn && 
              <div className='flex flex-col items-start p-2 shadow-md gap-3 rounded-md'>
                    {/* LOGGED IN USER TO COMMENT */}
                    <div className='flex items-center gap-2'>
                        <img className='h-[3rem] w-[3rem] rounded-full object-cover' src={user?.user?.photo} alt="profile" />
                        <h1 className='text-blackTertiary'>{user?.user?.name}</h1>
                    </div>
                    <textarea value={newComment} onChange={(e)=>setNewComment(e.target.value)} type="text" placeholder='What are your thoughts ?' className='p-2 font-brygada w-full focus:outline-none h-[8rem] resize-none'/>
                    <div className='w-full flex items-center justify-end'>
                        <div onClick={handleAddCommment} className='bg-blackPrimary text-white rounded-[0.3rem] py-2 px-6 flex items-center justify-center w-[8rem] text-center cursor-pointer'>
                            {isCommenting ? <Loading3QuartersOutlined spin/> : <h1>Add Review</h1>}
                        </div>
                    </div>                
              </div>
            }
           {/* COMMENT SECTION */}
           <div className='flex flex-col gap-4'>
                <h1 className='font-600 font-brygada text-[1rem]'>Reviews ({allComments?.comments?.length})</h1>
                {/* COMMENT CARD */}
                <div>
                {
                    allComments?.comments?.map((item,index)=>(
                      <>
                        <div className='flex flex-col items-start p-2 gap-3'>
                            <div className='flex items-center gap-2'>
                                <img className='h-[3rem] w-[3rem] rounded-full object-cover' src={item?.author?.photo} alt="profile" />
                                <h1 className='text-blackTertiary'>{item?.author?.name}</h1>
                            </div>
                            <div className='font-brygada'>{item?.content}</div>          
                        </div>
                        <Divider/>
                      </>  
                    ))
                }

                </div>
           </div>
        </div>
      </Drawer>
    </>
  )
}

export default Comment