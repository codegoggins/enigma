import React from 'react';
import Featured from '../../components/app/featured/Featured';
import Header from '../../components/app/header/Header';
import Divider from '../../components/utility/divider/Divider';
import Recent from '../../components/app/recent/Recent';
import Footer from '../../components/app/footer/Footer';
import { useGetAllBlogsQuery } from '../../redux/services/BlogApi';

const Home = () => {
  const { data: blogs } = useGetAllBlogsQuery();
  
  // Sort blogs by likes for featured component
  const featuredBlogs = blogs?.blogs.slice().sort((a, b) => b.likes.length - a.likes.length);

  // Sort blogs by creation date for recent component
  const recentBlogs = blogs?.blogs.slice().sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  return (
    <div className='my-6 px-6'>
        <Header/>
        <Divider/>
        <Featured blogs={featuredBlogs} />
        <Divider/>
        <Recent blogs={recentBlogs} />
        <Divider/>
        <Footer/>
    </div>
  )
}

export default Home;
