import React from 'react'
import { useGetUserQuery } from '../../redux/services/UserApi'
import { useGetAllBlogsQuery } from '../../redux/services/BlogApi';
import SavedCard from '../../components/utility/savedCard/SavedCard';

const SavedPosts = () => {
  const {data:user,isLoading:isLoadingUser} = useGetUserQuery();
  const {data:allBlogs,isLoading:isLoadingAllBlogs} = useGetAllBlogsQuery();
  console.log(user?.user?.savedPosts);
  console.log(allBlogs?.blogs);
  
  const savedBlogs = allBlogs?.blogs?.filter(blog => user?.user?.savedPosts?.includes(blog?._id));
  console.log(savedBlogs);
  
  return (
    <div className='flex flex-col gap-1 p-6'>
    <h1 className='text-[2rem] font-brygada'>Saved Posts</h1>
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">{
        savedBlogs?.map((item,index)=>(
             <SavedCard blog={item} key={index}/>
        ))
    }</div>
    </div>
  )
}

export default SavedPosts