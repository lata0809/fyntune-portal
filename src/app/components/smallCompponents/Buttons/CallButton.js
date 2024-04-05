import Image from "next/image"


function CallButton({title}) {
  return (
    <button className="h-10 capitalize rounded flex items-center justify-between bg-[#005DB9] text-white px-5 py-1.5">
        <Image src="images/call.svg"
            className="mr-2"
            alt="CallNow"
            width={20}
            height={20}
        />
        {title}
    </button>
  )
}

export default CallButton