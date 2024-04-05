'use client'
import Image from "next/image"
import Link from "next/link";
import { useEffect, useState } from "react"

function Logo() {
  const [width, setWidth] = useState(0);
  const updateWidth = () => {
    const newWidth = window.innerWidth;
    setWidth(newWidth);
  }
  useEffect(() => {
    window.addEventListener('resize', updateWidth);
    updateWidth();
  }, [])
  
  const [showButton, setShowButton] = useState(false);

  const changeNavButton = () => {
    if(window.scrollY >= 400 && window.innerWidth < 768) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNavButton)
  }, [])
  
  return (
    <>
      {/* <Link href='/' style={{display: showButton ? 'none' : 'block'}}> */}
      <Link href='/'>
        <Image src='images/FyntuneLogo.svg'
            alt="FyntuneLogo"
            width={width < 1024 ? '150' : '170'}
            height={width < 1024 ? '36' : '25'}
            className="relative"
        />
      </Link>
      {/* <div style={{display: showButton ? 'block' : 'none'}}>
        <CallButton />
      </div> */}
    </>
  )
}

export default Logo
