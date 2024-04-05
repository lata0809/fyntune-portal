'use client'
import { motion } from 'framer-motion'
import React from 'react'
import commonData from '@/app/assets/data/commonData'

function ImageSlider() {
    console.log(commonData);
    console.log(...commonData.partnersImage);
    const duplicatedSlides = [...commonData.partnersImage, ...commonData.partnersImage];
  return (
    <div className='relative h-full w-full overflow-hidden py-12'>
        <motion.div className='flex gap-20' animate={{x:['0%','-70%'], transition: {ease:'linear', duration:15, repeat: Infinity, repeatType: "reverse",}}}>
            {duplicatedSlides.map((items, index) => (
                <div key={index} className='flex-shrink-0' >
                    <div className='flex items-center justify-center h-full py-4'>
                        <img className='p-4' src={items.PartnerImg} alt={items.title} height='70px' />
                    </div>
                </div>
            ))}
        </motion.div>
    </div>
  )
}

export default ImageSlider