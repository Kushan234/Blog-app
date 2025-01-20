import React from 'react'
import {images} from '../Constants'
import {BsCheckLg} from 'react-icons/bs'

const ArticleCard = ({className}) => {
  return (
    <div className={`rounded-xl overflow-hidden shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] ${className}`}>
      <img className='object-cover object-center w-full h-auto md:h-52 lg:h-48 xl:h-60' 
      src={images.Post1Image} alt="" />
      <div className="p-5">
        <h2 className='text-xl font-bold font-roboto text-dark-soft md:text-2xl lg:text-[28px]'>Future Of work</h2>
        <p className='mt-3 text-sm text-dark-light md:text-lg'>Installed essential software tools and frameworks needed for development </p>
        <div className="flex items-center justify-between mt-6 flex-nowrap">
          <div className='flex items-center gap-x-2 md:gap-x-2.5'>
            <img src={images.PostProfileImage} alt="post profile" className='w-9 h-9 md:w-10 md:h-10'/>
          <div className="flex flex-col">
            <h4 className='text-xs italic font-bold text-dark-soft md:text-sm'>Viola Manisa</h4>
            <div className="flex items-center gap-x-2">
              <span className='bg-[#36B37E] w-fit bg-opacity-20 p-1.5 rounded-full'>
                <BsCheckLg className='w-1.5 h-1.5 text-[#19593e]' /></span>
              <span className='text-xs italic text-dark-light'>Verified Writter</span>
            </div>
          </div>
          </div>
          <span className='text-sm italic font-bold text-dark-light md:text-base'>02 May</span>
        </div>
      </div>
    </div>
  )
}

export default ArticleCard