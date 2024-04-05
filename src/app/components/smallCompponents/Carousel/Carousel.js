
import { Card, Carousel } from "flowbite-react";
import Image from 'next/image';

function CustomerReviewCarousel() {
  return (
    <div className="h-56 sm:h-[26rem] xl:h-80 2xl:h-96">
      <Carousel leftControl=" " rightControl=" " className="rounded-lg">
        <div className='bg-[#BCF0B4] rounded-3xl p-10'>
            <div className=' text-center md:text-xl font-semibold text-[#46474A]'>
                “Fyntune's innovative insurance technology has revolutionized our business 
                operations at Aditya Birla Capital. Their platform is incredibly user-friendly, 
                allowing us to streamline our processes and provide better service to our clients. 
                Highly recommend!”
            </div>
            <div className='flex justify-center p-10 gap-8'>
                <Card className='max-w-sm bg-transparent shadow-none border-0'>
                    <div className="flex items-center space-x-8">
                        <div className='flex items-center space-x-4'>
                        <div className="shrink-0">
                            <Image
                            alt="Person"
                            height="45"
                            src="images/Person.svg"
                            width="45"
                            className="rounded-full"
                            />
                        </div>
                        <div className="min-w-0 flex-1">
                            <p className="truncate text-base font-semibold text-[#404040] dark:text-white">John Doe</p>
                            <p className="truncate text-sm text-gray-500 dark:text-gray-400">Co-founder & CTO</p>
                        </div>
                        </div>
                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                            <Image 
                            alt="Person"
                            height="45"
                            src="images/AdityaBirla.svg"
                            width="117"
                            />
                        </div>
                    </div>
                </Card>
            </div>
        </div>
        {/* <div className='bg-[#BCF0B4] rounded-3xl p-10'>
            <div className=' text-center text-xl font-semibold text-[#46474A]'>
                “Fyntune's innovative insurance technology has revolutionized our business 
                operations at Aditya Birla Capital. Their platform is incredibly user-friendly, 
                allowing us to streamline our processes and provide better service to our clients. 
                Highly recommend!”
            </div>
            <div className='flex justify-center p-10'>
            <Card className='max-w-sm bg-transparent shadow-none border-0'>
                    <div className="flex items-center space-x-8">
                        <div className='flex items-center space-x-4'>
                        <div className="shrink-0">
                            <Image
                            alt="Person"
                            height="45"
                            src="images/Person.svg"
                            width="45"
                            className="rounded-full"
                            />
                        </div>
                        <div className="min-w-0 flex-1">
                            <p className="truncate text-base font-semibold text-[#404040] dark:text-white">John Doe</p>
                            <p className="truncate text-sm text-gray-500 dark:text-gray-400">Co-founder & CTO</p>
                        </div>
                        </div>
                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                            <Image 
                            alt="Person"
                            height="45"
                            src="images/AdityaBirla.svg"
                            width="117"
                            />
                        </div>
                    </div>
                </Card>
            </div>
        </div> */}
      </Carousel>
    </div>
  )
}

export default CustomerReviewCarousel