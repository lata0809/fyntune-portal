import React from 'react'

const FormBackGround = ({children}) => {
  return (
    // <div className='p-40 bg-gradient-to-r from-[#0182FF]-500 via-purple-500 to-[#8DFFA2]-500 w-full h-full'>
    <div className='flex flex-col  p-8 justify-center gap-9 items-centers bg-gradient-to-r from-[#0182FF] to-[#8DFFA2] w-full h-full'>
      {children}
    </div>
  )
}

export default FormBackGround
