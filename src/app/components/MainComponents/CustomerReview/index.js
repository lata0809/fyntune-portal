import React from 'react'
import SubHeading from '../../smallCompponents/Heading/SubHeading'
import Carousel from '../../smallCompponents/Carousel/Carousel'

function CustomerReview() {
  return (
    <section className='px-10 py-8'>
        <SubHeading title='Hear from our' highlightedText='customers' />
        <div className='px-20 py-10'>
          <Carousel />
        </div>
    </section>
  )
}

export default CustomerReview