import React from 'react'
import Card from '../../utility/card/Card'
import { IoArrowForward } from 'react-icons/io5'

const Featured = () => {
  return (
        <div className='flex flex-col gap-3 mb-8'>
            <div className='flex items-center justify-between'>
              <h1 className='flex-1 text-[1.12rem]'>Get started with our <span className='font-[600]'>best stories</span></h1>
              <h1 className='flex-1 flex justify-end text-blackSecondary cursor-pointer items-center gap-1'>Swipe to see more <IoArrowForward/></h1>
            </div>
            <div className='flex items-center gap-2 overflow-x-auto sec-scroll pb-[10px] hover:pb-0'>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </div>
  )
}

export default Featured