import React from 'react'

const Card = () => {
  return (
    <div className='min-w-[21rem] p-1 py-6'>
        <div className='h-[25rem] w-full overflow-hidden rounded-[1.5rem] relative'>
            <img 
            className='object-cover w-full h-full'
            src="https://images.unsplash.com/photo-1509824227185-9c5a01ceba0d?q=80&w=1430&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="card-img"/>
            <div className='p-1 hover:scale-[1.05] bg-white hover:bg-opacity-[40%] bg-opacity-[20%] absolute bottom-4 left-4 h-[3rem] w-[3rem] rounded-full flex items-center justify-center overflow-hidden cursor-pointer'>
                <img 
                className='object-cover w-full h-full rounded-full'
                src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="profile-img"/>
            </div>
        </div>
        <div className='flex items-center my-3 gap-2'>
            <div className='bg-lightGray p-1 px-3 rounded-[4rem] flex items-center justify-center cursor-pointer hover:bg-darkGray'>
                <h1 className='text-[0.8rem] text-blackPrimary'>Design</h1>
            </div>
            <div className='bg-lightGray p-1 px-3 rounded-[4rem] flex items-center justify-center cursor-pointer hover:bg-darkGray'>
                <h1 className='text-[0.8rem] text-blackPrimary'>Design</h1>
            </div>
            <div className='bg-lightGray p-1 px-3 rounded-[4rem] flex items-center justify-center cursor-pointer hover:bg-darkGray'>
                <h1 className='text-[0.8rem] text-blackPrimary'>Design</h1>
            </div>
        </div>
        <div className='flex flex-col gap-3'>
            <h1 className='text-[1.6rem] font-[700] leading-[1.9rem] text-blackPrimary hover:underline cursor-pointer'>New technology is not good or evil in and of itself</h1>
            <h1 className='text-[1rem] text-blackPrimary'>Vestibulum vehicula dui venenatis neque tempor, accumsan iaculis sapien ornare. Sed at ante porta, ullamcorper massa eu..</h1>
        </div>
    </div>
  )
}

export default Card