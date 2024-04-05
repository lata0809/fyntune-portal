import commonData from "@/app/assets/data/commonData";
import {Card, CardHeader, CardBody, Divider} from "@nextui-org/react";
import Image from "next/image";

function ClientSection() {
  const ClientSectionDetail = commonData.ClientSection;
  return (
    <div className="grid grid-cols-3 w-full gap-3 px-4 pt-10 pb-1">
      {ClientSectionDetail.map((item, index) => (
        <Card className="max-w-[386px] rounded-2xl p-3 px-6" style={{backgroundColor: item.BgColor}}>
            <CardHeader className='justify-center items-center p-5'>
                <Image
                alt="nextui logo"
                height={54}
                src={item.img}
                width={54}
                />
            </CardHeader>
            <Divider className="px-10 flex justify-center"/>
            <CardBody className="justify-center items-center text-white">
                <p className="text-[27px]">{item.firstTitle}</p>
                <p className="text-xl">{item.secondTitle}</p>
            </CardBody>
        </Card>
      ))} 
      
    </div>
  )
}

export default ClientSection