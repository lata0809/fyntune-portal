import Image from "next/image"

function FooterAddress() {
  return (
    <div className="">
        <Image src='images/Logo.svg'
                width={188}
                height={39}
                alt="logo"
                className="pb-5"
        />
        <div className="list-none">
            <ul className="text-white text-sm leading-6 font-medium">
                <li>501, B Wing ARIHANT</li>
                <li>AURA, Opposite Turbhe</li> 
                <li>Railway Station.</li> 
                <li>Navi Mumbai - 400705</li> 
            </ul>
        </div>
    </div>
  )
}

export default FooterAddress