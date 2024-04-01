import React from 'react'
import BackGround from '../smallCompponents/BackGround/BackGround'
import Heading from '../smallCompponents/Heading/Heading'
import Button from '../smallCompponents/Buttons/Button'

function index() {
  return (
    // <div className='h-full w-full  mx-auto max-w-screen-xl px-4 py-10 md:flex md:flex-row md:py-10'>
    <div className='mt-0'>
      <BackGround>
        <Heading Title="Streamlining insurance operations with modern infrastructure"/>
        <Button title='get demo now'/>
      </BackGround>  
    </div>
    
  )
}

export default index