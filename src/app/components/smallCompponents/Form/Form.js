import React from 'react'
import Button from '../Buttons/Button'

function Form() {
  return (
    <div className='mt-5'>
        <form>
            <div className='flex md:flex-row flex-col md:gap-8 gap-y-5 mb-5'>
                <input type='text' name='First Name' placeholder='First Name' className='md:w-1/2 w-full h-16 border-[#FAFAFA] rounded-lg px-8 py-6 placeholder:text-xs placeholder:text-[#737781] placeholder:font-normal focus:outline-none' required/>
                <input type='text' name='Phone Number' placeholder='Phone Number' className='md:w-1/2 w-full h-16 border-[#FAFAFA] rounded-lg px-8 py-6 placeholder:text-xs placeholder:text-[#737781] placeholder:font-normal placeholder:font-openSans focus:outline-none' required/>
            </div>
            <div className='flex md:flex-row flex-col gap-8 mb-5'>
                <input type='text' name='Work Email id' placeholder='Work Email id' className='md:w-1/2 w-full h-16 border-[#FAFAFA] rounded-lg px-8 py-6 placeholder:text-xs text-[#737781] placeholder:font-normal focus:outline-none' required/>
                <input type='text' name='Company Name' placeholder='Company Name' className='md:w-1/2 w-full h-16 border-[#FAFAFA] rounded-lg px-8 py-6 placeholder:text-xs placeholder:text-[#737781] placeholder:font-normal focus:outline-none' required/>
            </div>
            <div>
                <textarea className='w-full border-[#FAFAFA] h-40 rounded-lg px-8 py-6 placeholder:text-xs placeholder:text-[#737781] placeholder:font-normal focus:outline-none' placeholder='Drop a Message'></textarea>
            </div>
            <div className="flex justify-center p-4">
                <button className="text-base font-semibold h-12 w-36 capitalize rounded flex items-center justify-center bg-[#005DB9] text-white px-5 py-3"> submit form
                </button>
            </div>
        </form>
    </div>
  )
}

export default Form