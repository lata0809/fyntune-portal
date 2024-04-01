import React from 'react'

function CardHeading(props) {
  return (
    <div className="flex items-center justify-center">
        <h2 className="text-[1.75rem] text-center text-white w-1/ font-semibold"> 
            {props.title}
        </h2>
    </div>
  )
}

export default CardHeading