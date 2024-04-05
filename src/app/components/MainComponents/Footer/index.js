import React from 'react'
import FooterBackGround from '../../smallCompponents/BackGround/FooterBackGround'
import FooterAddress from '../../smallCompponents/FooterContent/FooterAddress'
import FooterDetail from '../../smallCompponents/FooterContent/FooterDetail'
import FooterSocial from '../../smallCompponents/FooterContent/FooterSocial'

function Footer() {
  return (
    <>
      <FooterBackGround>
        <div className='md:flex justify-between items-center xl:gap-[28rem] lg:gap-[15rem] md:gap-[8rem]'>
            <FooterAddress />
            <FooterDetail />
        </div>
      </FooterBackGround>
      <FooterSocial />
    </>
  )
}

export default Footer