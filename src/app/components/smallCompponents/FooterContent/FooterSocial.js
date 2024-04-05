import Image from "next/image"
import Link from "next/link"

function FooterSocial() {
  return (
    <div className="w-full md:h-14 sm:flex flex-wrap sm:items-center sm:justify-between bg-[#002551] py-3 px-8 ">
        <div className="flex justify-between items-center gap-10 md:w-1/4 md:mb-0 mb-5 text-nowrap">
            <Link className='text-sm font-normal text-white' href='/'>Terms and Conditions</Link>
            <Link className='text-sm font-normal text-white' href='/'>Privacy Policy</Link>
        </div>
        <div className="flex justify-between items-center gap-10">
            <Image src='images/mail.svg' width={32} height={32}/>
            <Image src='images/LinkedIn.svg' width={32} height={32}/>
            <Image src='images/FooterCall.svg' width={32} height={32}/>
        </div>
    </div>
  )
}

export default FooterSocial