import React from 'react'

const Footer = () => {
  return (
    <div className='flex items-center justify-center p-6 text-blackPrimary'>
       <div className='flex-1 flex-col'>
          <h1 className='text-[6rem] font-cookie'>enigma</h1>
       </div>
       <div className='flex-1'>
          <h1>Seamlessly write and share your thoughts, fostering a community of enigmatic ideas</h1>
          <h1 className='font-[600]'>@ enigma 2024. Published by codegoggins.</h1>
       </div>
    </div>
  )
}

export default Footer