'use client'
import { motion } from 'framer-motion'
import React from 'react'
import commonData from '../../../assets/data/commonData.js'

function ImageSlider() {
    console.log(commonData);
    console.log(...commonData.partnersImage);
    const duplicatedSlides = [...commonData.partnersImage, ...commonData.partnersImage];
  return (
    <div className='relative h-full w-full overflow-hidden py-12'>
        <motion.div className='flex gap-20' animate={{x:['0%','-100%'], transition: {ease:'linear', duration:15, repeat: Infinity}}}>
            {duplicatedSlides.map((slide, index) => (
                <div key={index} className='flex-shrink-0' >
                    <div className='flex items-center justify-center h-full py-4'>
                        <img className='p-4' src={slide.PartnerImg} alt={slide.title} height='70px' />
                    </div>
                </div>
            ))}
        </motion.div>
    </div>
  )
}

export default ImageSlider