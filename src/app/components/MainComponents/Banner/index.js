import React from 'react'
import BackGround from '../../smallCompponents/BackGround/BackGround'

function index({ children }) {
  return (
    // <div className='h-full w-full  mx-auto max-w-screen-xl px-4 py-10 md:flex md:flex-row md:py-10'>
    <div className='mt-0'>
      <BackGround>
        {children}
      </BackGround>  
    </div>
    
  )
}

export default index