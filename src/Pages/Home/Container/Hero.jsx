import React from 'react'
import {images} from '../../../Constants'
import {FiSearch} from 'react-icons/fi'
const Hero = () => {
  return (
    <section className='container flex flex-col px-5 mx-auto py5 lg:flex-row'>
      <div className="mt-10 lg:w-1/2">
        <h1 className="font-roboto text-3xl text-center font-bold text-dark-soft md:text-5xl lg:text-left lg:text-4xl xl:text-5xl lg:max-w-[540px]">
          Read The Most Interesting Articles</h1>

        <p className='mt-4 text-center text-dark-light md:text-xl lg:text-base xl:text-xl lg:text-left'>Designed the database schema with tables for users, files, roles, and logs.
        Installed essential software tools and frameworks needed for development </p>
        <div className='flex flex-col gap-y-2.5 mt-10 relative xl:mt-10 lg:text-sm xl:text-base'>
        <div className="relative">
          <FiSearch className='absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6 text-[#959EAD]'/>
          <input className='placeholder:font-bold font-semibold text-dark-soft placeholder:text-[#959EAD] rounded-lg pl-12 
          pr-3 w-full py-3 focus:outline-none shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] md:py-4'
           type="text" />
        </div>
        <button className='w-full px-5 font-semibold text-white rounded-lg bg-primary py3 md:absolute md:right-2 md:top-1/2 md:translate-y-1/2 md:w-fit md:py-2'>Search</button>
        </div>
        <div className="flex flex-col mt-4 lg:flex-row lg:flex-nowrap lg:gap-x-4 lg:mt-7 lg:items-start">
          <span className='mt-2 italic font-semibold lg:mt-4 text-dark-light'>Popular Tags:</span>
          <ul className='flex flex-wrap gap-x-2.5 gap-y-2.5 mt-3 lg:text-sm xl:text-base'>
            <li className='rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold'>Design</li>
            <li className='rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold'>User Experiance</li>
            <li className='rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold'>User Interfaces</li>
          </ul>
        </div >
      </div>
      <div className="hidden lg:block lg:1/2">
      <img className='w-full' 
      src={images.HeroImage} alt="user's are reading articles" />
      </div>
    </section>
  )
}

export default Hero