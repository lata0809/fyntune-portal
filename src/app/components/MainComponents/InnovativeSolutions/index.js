import React from 'react'
import SubHeading from '../../smallCompponents/Heading/SubHeading'
import InnovativeSolutionsCard from '../../smallCompponents/InnovativeSolutionsCard/InnovativeSolutionsCard'
import SeeMoreButton from '../../smallCompponents/Buttons/SeeMoreButton'

function InnovativeSolutions() {
  return (
    <section className='bg-[#F9F9FF] py-10 px-8'>
      <div className='flex flex-col'>
        <SubHeading title='Our' highlightedText='innovative' LastTitle='solutions' />
        <div className='flex justify-center text-[#5E5E62] pt-4'>
        <h4 className='text-center md:w-2/5 text-lg font-semibold'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</h4>
        </div>
      </div>
        <InnovativeSolutionsCard />
        <SeeMoreButton title='see more products'/>
    </section>
  )
}

export default InnovativeSolutions