import React from 'react'

const BackGround = ({children}) => {
  return (
    // <div className='p-40 bg-gradient-to-r from-[#0182FF]-500 via-purple-500 to-[#8DFFA2]-500 w-full h-full'>
    <div className='flex flex-col justify-center gap-9 items-centers p-40 rounded-bl-[15.625rem] bg-gradient-to-r from-[#0182FF] to-[#8DFFA2] w-full h-full'>
      {children}
    </div>
  )
}

export default BackGround
