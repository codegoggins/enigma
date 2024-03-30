import React from 'react'
import {Link} from 'react-router-dom';

const Card = (blog) => {
  return (
    <Link to={`/${blog?.blog?._id}`}>
    <div className='min-w-[23rem] p-1 py-6 cursor-pointer'>
        <div className='h-[25rem] w-full overflow-hidden rounded-[1.5rem] relative'>
            <img 
            className='object-cover w-full h-full'
            style={{ objectFit: 'cover', objectPosition: 'top' }}
            src={blog?.blog?.photo}
            alt="card-img"/>
            <div className='p-1 hover:scale-[1.05] bg-white hover:bg-opacity-[40%] bg-opacity-[20%] absolute bottom-4 left-4 h-[3rem] w-[3rem] rounded-full flex items-center justify-center overflow-hidden cursor-pointer'>
                <img 
                className='object-cover w-full h-full rounded-full'
                src={blog?.blog?.author?.photo}
                alt="profile-img"/>
            </div>
        </div>
        <div className='flex items-center my-3 gap-2'>
        {
            blog?.blog?.categories?.map((item,index)=>(
                <div key={index} className='bg-lightGray p-1 px-3 rounded-[4rem] flex items-center justify-center cursor-pointer hover:bg-darkGray'>
                    <h1 className='text-[0.8rem] text-blackPrimary'>{item?.name}</h1>
                </div>
            ))
        }
        </div>
        <div className='flex flex-col gap-3'>
        <h1 className='text-[1.6rem] font-[700] leading-[1.9rem] text-blackPrimary hover:underline cursor-pointer'>{blog?.blog?.title ? 
            blog.blog.title.split(' ').slice(0,4).join(' ') + (blog.blog.title.split(' ').length > 4 ? '...' : '')
            : null
            }</h1>
        <h1 className='text-[1rem] text-blackPrimary'>
            {blog?.blog?.content ? 
            blog.blog.content.split(' ').slice(0, 15).join(' ') + (blog.blog.content.split(' ').length > 15 ? '...' : '')
            : null
            }
        </h1>
        </div>
    </div>
    </Link>
  )
}

export default Card