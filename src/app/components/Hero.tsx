'use client';

import React from 'react'
import Image from 'next/image'
import globe from './../../../public/Images/globe.jpg'
import bulb from'./../../../public/Images/bulb.jpg'
import treebook from './../../../public/Images/treebook.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Link from 'next/link';




const Hero = () => {
  return (
    <div>
    
      <div>
      <Swiper
      // install Swiper modules
      modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      loop={true}
      autoplay={{ delay: 2500,
        disableOnInteraction: false
      }}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide> 
        <div className='static'>
      <Image src={globe} alt="globe"  /> 
      <div className='absolute top-70 flex flex-col gap-4'>
        <p className='font-black text-7xl text-center text-white'>
        Smart Waste, Smarter Future
        </p>
        <p className='text-4xl font-bold text-center text-white'>
        Save Your community
        </p>
        <p className='text-center text-2xl text-[#ffffffa8] w-[60%] mx-auto'>
        Discover the next generation of waste management. Our smart bins use cutting-edge tech to reduce litter, promote recycling, and keep your environment clean - effortlessly.
        </p>
        <div  className='rounded-full py-3 bg-[green] text-white test-2xl w-[14%] mx-auto flex justify-center mt-6 outline-offset-2 outline-[green] outline-2'>
          <a
  href="https://api-swms.onrender.com/public/register"
  target="_blank"
  rel="noopener noreferrer"
  // className="rounded-full py-3 bg-[green] text-white text-2xl w-[14%] mx-auto flex justify-center mt-6 outline-offset-2 outline-[green] outline-2"
>
  Register Bin
</a>
        </div>
      </div>
      </div></SwiperSlide>
      <SwiperSlide> <div className='static'>
      <Image src={bulb} alt="bulb"  /> 
      <div className='absolute top-70 flex flex-col gap-4'>
        <p className='font-black text-7xl text-center text-white'>
        Who It is For
        </p>
        <p className='text-4xl font-bold text-center text-white'>
        Clean Tech for a Greener Tomorrow
        </p>
        <p className='text-center text-2xl text-[#ffffffa8] w-[60%] mx-auto'>
        Whether you are managing a school, park, corporate space, or urban center — our smart wastebins adapt to any environment with ease.
        </p>
        <div  className='rounded-full py-3 bg-[green] text-white test-2xl w-[14%] mx-auto flex justify-center mt-6 outline-offset-2 outline-[green] outline-2'>
       <a
  href="https://api-swms.onrender.com/public/register"
  target="_blank"
  rel="noopener noreferrer"
  // className="rounded-full py-3 bg-[green] text-white text-2xl w-[14%] mx-auto flex justify-center mt-6 outline-offset-2 outline-[green] outline-2"
>
  Register Bin
</a>
          
        </div>
      </div>
      </div></SwiperSlide>
      <SwiperSlide>
         <div className='static flex justify-center'>
      <Image src={treebook} alt=""  /> 
      <div className='absolute top-70 flex flex-col gap-4 mx-auto'>
        <p className='font-black text-6xl text-center text-white'>
        The Future of Cleanliness Starts Here
        </p>
        <p className='text-4xl font-bold text-center text-white'>
        Cleaner Spaces, Happier Places
        </p>
        <p className='text-center text-2xl text-[#ffffffa8] w-[60%] mx-auto'>
        We can solve your corporate IT disposition needs quickly and professionally.
        Save Your community, Save Your planet
        </p>
        <div  className='rounded-full py-3 bg-[green] text-white test-2xl w-[14%] mx-auto flex justify-center mt-6 outline-offset-2 outline-[green] outline-2'>
       <a
  href="https://api-swms.onrender.com/public/register"
  target="_blank"
  rel="noopener noreferrer"
  // className="rounded-full py-3 bg-[green] text-white text-2xl w-[14%] mx-auto flex justify-center mt-6 outline-offset-2 outline-[green] outline-2"
>
  Register Bin
</a>
          
        </div>
      </div>
      </div></SwiperSlide>
     
      
    </Swiper>
      </div>
    </div>
  )
}

export default Hero