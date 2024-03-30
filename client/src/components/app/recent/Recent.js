import React from 'react'
import Card from '../../utility/card/Card'
import Authors from '../authors/Authors'
import { IoArrowForward } from "react-icons/io5";

const Recent = ({blogs}) => {
  return (
        <div className='flex flex-col gap-3 mb-8'>
             <div className='flex flex-col gap-6 sm:flex-row items-center justify-between'>
                <h1 className='flex-1 text-[2rem] md:text-[4rem] text-blackPrimary'>See what we’ve <span className='font-[600]'>written lately</span></h1>
                <div className='flex-1 flex flex-col gap-3'>
                    <h1 className='flex justify-end text-blackSecondary cursor-pointer items-center gap-1 hover:underline'>Meet top Authors <IoArrowForward /></h1>
                    <Authors/>
                </div>
             </div>
            <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
              {
                blogs?.map((item,index)=>(
                <Card blog={item} key={index}/>
                ))
              }
            </div>
            <div className='bg-blackPrimary text-white rounded-[5rem] px-6 py-3 flex items-center justify-center w-[14rem] mx-auto cursor-pointer'>
                <h1>Load More</h1>
            </div>
        </div>
  )
}

export default Recent