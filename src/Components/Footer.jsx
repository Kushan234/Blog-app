import React from 'react'
import { images } from '../Constants'
import { AiFillYoutube, AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai'
import {FaFacebook} from 'react-icons/fa'
import {BsTelegram} from 'react-icons/bs'
import { AiFillHeart } from 'react-icons/ai'

const Footer = () => {
  return (
    <section className='bg-dark-hard '>
      <footer className='container grid grid-cols-10 px-5 py-10 mx-auto gap-x-5 gap-y-10 md:grid-cols-12 md:pt-20 lg:grid-cols-10 lg:gap-x-10'>
        <div className='col-span-5 md:col-span-4 lg:col-span-2'>
          <h3 className='font-bold text-dark-light md:text-lg'>Products</h3>
          <ul className='text-[#959EAD] text-sm mt-5 space-y-4 md:text-base'>
            <li>
              <a href="/">LandingPage</a>
            </li>
            <li>
              <a href="/">Features</a>
            </li>
            <li>
              <a href="/">Documentation</a>
            </li>
            <li>
              <a href="/">Referral Programe</a>
            </li>
            <li>
              <a href="/">Pricing</a>
            </li>
           
          </ul>
        </div>

        <div className='col-span-5 md:col-span-4 lg:col-span-2'>
          <h3 className='font-bold text-dark-light md:text-lg'>Services</h3>
          <ul className='text-[#959EAD] text-sm mt-5 space-y-4 md:text-base'>
            <li>
              <a href="/">Dcumentation</a>
            </li>
            <li>
              <a href="/">Design</a>
            </li>
            <li>
              <a href="/">Themes</a>
            </li>
            <li>
              <a href="/">Illustrations</a>
            </li>
            <li>
              <a href="/">UI Kit</a>
            </li>
           
          </ul>
        </div>

        <div className='col-span-5 md:col-span-4 md:col-start-5 lg:col-span-2 lg:col-start-auto'>
          <h3 className='font-bold text-dark-light md:text-lg'>Company</h3>
          <ul className='text-[#959EAD] text-sm mt-5 space-y-4 md:text-base'>
          <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Terms</a>
            </li>
            <li>
              <a href="/">Privacy Policy</a>
            </li>
            <li>
              <a href="/">Careers</a>
            </li>
           
          </ul>
        </div>

        <div className='col-span-5 md:col-span-4 lg:col-span-2'>
          <h3 className='font-bold text-dark-light md:text-lg'>More</h3>
          <ul className='text-[#959EAD] text-sm mt-5 space-y-4 md:text-base'>
          <li>
              <a href="/">Documentation</a>
            </li>
            <li>
              <a href="/">License</a>
            </li>
            <li>
              <a href="/">Changeing</a>
            </li>
          </ul>
        </div>

        <div className="col-span-10 md:order-first md:col-span-4 lg:col-span-2">
          <img src={images.Logo} alt="" className='mx-auto brightness-0 invert md:mx-0 '/>
          <p className='mt-4 text-sm text-center text-dark-light md:text-left md:text-base lg:text-sm'>Buld a modern and creative website with createland</p>
          <ul className="flex items-center justify-center mt-5 space-x-4 text-gray-300 md:justify-start">
            <li>
              <a href="/"><AiOutlineTwitter className='w-6 h-auto' /></a>
            </li>
            <li>
              <a href="/"><AiFillYoutube className='w-6 h-auto' /></a>
            </li>
            <li>
              <a href="/"><AiFillInstagram className='w-6 h-auto' /></a>
            </li>
            <li>
              <a href="/"><FaFacebook className='w-6 h-auto' /></a>
            </li>
            <li>
              <a href="/"><BsTelegram className='w-6 h-auto' /></a>
            </li>
          </ul>
        </div>
        <div className="flex-col items-center hidden space-y-4 md:flex md:col-span-12 lg:col-span-10">
          <div className="p-3 text-white rounded-full bg-primary">
            <AiFillHeart  className='h-auto w-7'/>
          </div>
          <p className='italic font-bold text-dark-light'>Copyright © 2025. All right reserved</p>
        </div>
      </footer>
    </section>
  )
}

export default Footer