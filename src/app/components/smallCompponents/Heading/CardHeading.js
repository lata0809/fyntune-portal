import React from 'react'

function CardHeading({title}) {
  return (
    <div className="flex items-center justify-center">
        <h2 className="md:text-[1.75rem] text-3xl md:w-3/6 text-center text-white font-semibold break-normal"> 
            {title}
        </h2>
    </div>
  )
}

export default CardHeading