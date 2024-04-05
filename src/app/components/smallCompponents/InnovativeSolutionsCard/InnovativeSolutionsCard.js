import React from 'react'
import commonData from '@/app/assets/data/commonData'
import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card';
import Image from 'next/image.js';

function InnovativeSolutionsCard() {
    const productDetails = commonData.Products;
  return (
    <div className='flex flex-wrap md:justify-between justify-center items-center md:flex-row md:gap-0 md:gap-y-5 gap-10 py-10'>
        { productDetails.map((items, index) => (
            <Card className='md:max-w-[350px] p-3 justify-center' key={index}>
                <CardHeader className='justify-center'>
                    <Image src={items.ProductImg}
                           width={68} 
                           height={65}
                           alt={items.title} />
                </CardHeader>
                <CardBody className='py-3 px-1 flex-col gap-3 justify-center items-center'>
                    <h3 className='text-[#00102B] text-2xl leading-9 font-semibold'>{items.title}</h3>
                    <p className='text-[#5E5E62] text-center'>{items.description}</p>
                </CardBody>
                <CardFooter className=' justify-center items-center'>
                    <button className='flex justify-center items-center gap-6 text-[#034F11] text-base font-semibold hover:rounded-xl hover:bg-[#d9fae2] p-1'>
                        Learn More <span><Image src='images/arrow_circle_right.svg' width={20} height={20} alt='ArrowRight'/></span>
                    </button>
                </CardFooter>
            </Card>
        ))}
    </div>
  )
}

export default InnovativeSolutionsCard