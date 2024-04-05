import React from 'react'
import SubHeading from '../../smallCompponents/Heading/SubHeading'
import ClientSection from '../../smallCompponents/ClientsSection/ClientSection'

function OurClient() {
  return (
    <section className='px-8 py-24'>
      <div className='flex justify-center items-center text-center gap'>
        <SubHeading title='We are shaping the future of insure tech by unlocking a' width="60%" highlightedText='world of possibilities.'/>
      </div>
      <ClientSection />
    </section>
  )
}

export default OurClient