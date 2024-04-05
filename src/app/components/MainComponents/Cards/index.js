import React from 'react'
import CardBackGround from '../../smallCompponents/BackGround/CardBackGround'
import CardHeading from '../../smallCompponents/Heading/CardHeading'
import Card from '../../smallCompponents/Card/Card'

function Cards() {
  return (
    <section className='mb-5'>
        <CardBackGround>
          <CardHeading title={`Evolve and Innovate faster with Fyntune’s Full Suite of insurance technology`}/>  
          <Card />
        </CardBackGround>
    </section>
  )
}

export default Cards