import React from 'react'
import { images } from '../../../Constants'

const CTA = () => {
  return (
   <>
   <svg
   className='w-full h-auto max-h-40 translate-y-[1px]'
   preserveAspectRatio='none'
   viewBox='0 0 2160 263'
   fill='none'
   xmlns='http://www.w3.org/2000/svg'
   >

    <path 
    id='Wave'
    fillRule='evenodd'
    clipRule='evenodd'
    d='M2160 262.5H0V0C360 80 720 120 1080 120C1440 120 1800 80 2160 0V262.52'
    fill='#0D2436'
    />
   </svg>
   <section className='relative px-5 bg-dark-hard'>
    <div className='container grid grid-cols-12 py-10 pb-20 mx-auto lg:place-items-center'>
        <div className='col-span-12 lg:col-span-6'>
            <h2 className='text-2xl font-bold text-white font-roboto md:text-4xl md:text-center md:leading-normal lg:text-left'>Get Our Stories Delivered From us To Your Inbox Weekly.</h2>
            <div className="w-full max-w-[494px] mt-12 space-y-3 mx-auto md:space-y-0 md:flex md:items-center md:space-x-2 lg:mx-0">
                <input className='w-full px-4 py-3 rounded-lg placeholder:text-dark-light' type="text" placeholder='Enter your e-mail' />
                <button className='w-full px-4 py-3 font-bold text-white rounded-lg bg-primary md:w-fit md:whitespace-nowrap'>Get Started</button>
            </div>
            <p className="mt-6 text-sm leading-7 text-dark-light md:text-center md:text-base lg:text-left">
                <span className='font-bold italic text-[#B3BAC5] md:not-italic md:font-normal md:text-dark-light'>Get a responce tomorrow</span> if you submit by 9pm todat.If we recieved after 9pm will get a responce the following day.</p>
        </div>
        <div className="col-span-12 hidden mb-[70px] md:block md:order-first lg:order-last lg:col-span-6">
        <div className="relative w-3/4 mx-auto">
        <div className="w-1/2 h-1/2 bg-[#FC5A5A] rounded-lg absolute py-3 top-[10%] -right-[8%]" />
        <div className="w-1/2 h-1/2 bg-white opacity-[.06] rounded-lg absolute py-3 -bottom-[10%] -left-[8%]" />
        <div className="rounded-xl w-full bg-white p-3 z-[1] relative" >
      <img className='object-cover object-center w-full h-auto md:h-52 lg:h-48 xl:h-60' 
      src={images.CtaImage} alt="" />
      <div className="p-5">
        <h2 className='text-xl font-bold font-roboto text-dark-soft md:text-2xl lg:text-[28px]'>Future Of work</h2>
        <p className='mt-3 text-sm text-dark-light md:text-lg'>Installed essential software tools and frameworks needed for development </p>
        
      </div>
    </div>
    </div>
        </div>
        </div> 
   </section>
   </>
  )
}

export default CTA