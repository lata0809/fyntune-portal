import React from 'react'

function CardBackGround({ children }) {
  return (
    <div className='flex bg-[#415F91] flex-col justify-center gap-9 items-centers p-10'>
        {children}
    </div>
  )
}

export default CardBackGround