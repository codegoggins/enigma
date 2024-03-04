import React from 'react'
import Card from '../../utility/card/Card'

const Featured = () => {
  return (
        <div className='flex flex-col gap-3 mb-8'>
            <h1 className='text-[1.12rem]'>Get started with our <span className='font-[600]'>best stories</span></h1>
            <div className='flex items-center gap-6 overflow-x-auto sec-scroll pb-[10px] hover:pb-0'>
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