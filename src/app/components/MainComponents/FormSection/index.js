import React from 'react'
import FormBackGround from '../../smallCompponents/BackGround/FormBackGRound'
import Form from '../../smallCompponents/Form/Form'

function FormSection() {
  return (
    <FormBackGround>
      <section className='flex flex-col flex-wrap gap-11'>
        <div className='flex  flex-col justify-center items-center gap-4'>
          <h1 className='text-[28px] leading-9 text-white font-semibold capitalize'>Want to have demo with us?</h1>
          <h4 className=' text-lg text-white'>Our Sales professionals are standing by to assist you. Fill out the form, and we'll connect with you shortly to discuss your needs.</h4> 
        </div>
        <Form />
      </section>
    </FormBackGround>
  )
}

export default FormSection