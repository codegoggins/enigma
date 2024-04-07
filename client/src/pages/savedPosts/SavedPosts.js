import React from 'react'
import { useGetUserQuery } from '../../redux/services/UserApi'
import { useGetAllBlogsQuery } from '../../redux/services/BlogApi';
import SavedCard from '../../components/utility/savedCard/SavedCard';
import { Spin} from 'antd';

const SavedPosts = () => {
  const {data:user,isLoading:isLoadingUser} = useGetUserQuery();
  const {data:allBlogs,isLoading:isLoadingAllBlogs} = useGetAllBlogsQuery();
  
  const savedBlogs = allBlogs?.blogs?.filter(blog => user?.user?.savedPosts?.includes(blog?._id));

  if(isLoadingUser || isLoadingAllBlogs){
    return (
      <div className='w-full flex flex-col gap-2 items-center justify-center mx-auto mt-[15rem]'>
        <Spin size="large"/>
        <p className='text-blackPrimary font-cookie text-[2rem]'>Loading your saved treasures</p>
      </div>
    )
  }
  
    return (
    !isLoadingUser && !isLoadingAllBlogs && (
        <div className='flex flex-col gap-1 p-6'>
        <h1 className='text-[2rem] font-brygada'>Saved Posts</h1>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {
            savedBlogs?.map((item, index) => (
                <SavedCard blog={item} key={index}/>
            ))
            }
        </div>
        </div>
    )
    );
}

export default SavedPosts