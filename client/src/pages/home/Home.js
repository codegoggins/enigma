import React from 'react'
import Featured from '../../components/app/featured/Featured'
import Header from '../../components/app/header/Header'
import Divider from '../../components/utility/divider/Divider'

const Home = () => {
  return (
    <div className='my-6 px-6'>
        <Header/>
        <Divider/>
        <Featured/>
        <Divider/>
    </div>
  )
}

export default Home