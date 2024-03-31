import React from 'react';
import Featured from '../../components/app/featured/Featured';
import Header from '../../components/app/header/Header';
import Divider from '../../components/utility/divider/Divider';
import Recent from '../../components/app/recent/Recent';
import Footer from '../../components/app/footer/Footer';
import { useGetAllBlogsQuery } from '../../redux/services/BlogApi';
import { Spin } from 'antd';

const Home = () => {
  const { data: blogs,isLoading:isBlogsLoading } = useGetAllBlogsQuery();
  
  const featuredBlogs = blogs?.blogs.slice().sort((a, b) => b.likes.length - a.likes.length);
  const recentBlogs = blogs?.blogs.slice().sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  if(isBlogsLoading){
    return (
      <div className='w-[20%] flex flex-col gap-2 items-center justify-center mx-auto mt-[15rem]'>
        <Spin size="large"/>
        <p className='text-blackPrimary font-cookie text-[2rem]'>"Patience leads to discovery."</p>
      </div>
    )
  }

  return (
    <div className='my-6 px-6'>
    {
      !isBlogsLoading && 
      <>
        <Header/>
        <Divider/>
        <Featured blogs={featuredBlogs} />
        <Divider/>
        <Recent blogs={recentBlogs} />
        <Divider/>
        <Footer/>
      </>
    }
    </div>
  )
}

export default Home;
