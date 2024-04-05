import Link from 'next/link'
import commonData from '@/app/assets/data/commonData'

function FooterDetail() {
    const FooterDetails = commonData.FooterLinks;
    return (
        <div className='flex mx-auto gap-16 capitalize text-nowrap'>
            {FooterDetails.map((items, index) => (
                <div className="flex flex-col" key={index}>
                    <h1 className='text-base text-white font-semibold mb-3'>{items.Heading}</h1>
                    {items.Links.map((childItem ,i)=>(
                        <ul className="list-none text-white">
                            <li className='text-sm font-light'>
                                <Link href='/' className='leading-6'>{childItem.title}</Link>
                            </li>
                        </ul>               
                    ))}
                </div>
            ))}
        </div>
    )
}

export default FooterDetail