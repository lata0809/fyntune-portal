import { Card, CardBody, CardHeader } from '@nextui-org/card'
import Image from 'next/image'
import commonData from '@/app/assets/data/commonData'


function Cards() {
    const CardDetail = commonData.CardData;
  return (
    <div className='flex flex-wrap md:flex-row flex-col md:flex-1 md:gap-0 gap-10 md:gap-y-10 justify-between'>
        {CardDetail.map((data,index)=> (
            <Card className='lg:max-w-[288px] md:max-w-[330px] p-3 md:mb-0 sm:mb-1 bg-[#F9F9FF] rounded-2xl hover:scale-105 duration-300 '>
                <CardHeader className='flex-col items-center gap-3'>
                    <Image src={data.CardImg} width={88} height={88} alt={data.CardTitle}/>
                    <h4 className='text-center text-xl font-semibold'>{data.CardTitle}</h4>
                </CardHeader>
                <CardBody className='py-3 px-1'>
                    <p className='text-center text-base font-normal text-[#5E5E62]'>
                        {data.CardDescription}
                    </p>
                </CardBody>
            </Card>
        ))}
    </div>
  )
}

export default Cards