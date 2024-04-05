import React from 'react'

function Heading({ FirstTitle, SecondTitle, ThirdTitle }) {
  return (
    <h1 className='text-white text-center md:text-5xl text-3xl'>
      <p>{FirstTitle}</p>
      <p>{SecondTitle}</p>
      <p>{ThirdTitle}</p>
    </h1>
  )
}

export default Heading