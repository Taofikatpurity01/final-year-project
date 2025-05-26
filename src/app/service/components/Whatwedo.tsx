'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image';
import booking from './../../../../public/Images/booking.jpg'
import shedule from './../../../../public/Images/schedule.jpg'
import eco from './../../../../public/Images/eco.jpg'
import track from './../../../../public/Images/track.jpg'
import data from './../../../../public/Images/data.jpg'

const Whatwedo = () => {
  return (
    <div>
        <div className='bg-[whitesmoke] py-24 my-auto'>
        <div className='flex flex-col gap-6 pt-10'>
            <p className='text-5xl text-center font-black'>
                Our Service
            </p>
            <p className='text-center text-2xl'>
            At SmartBin, we are transforming the way waste is managed in urban communities. Our smart waste management system is designed to make waste disposal and collection more efficient, transparent, and user-friendly—without the use of expensive sensors or complicated hardware.

Our service connects users, waste collectors, and administrators through a centralized platform that offers:
            </p>
        </div>

<div className='p-6 w-[90%] mx-auto my-16'>
      <Swiper
      // install Swiper modules
      modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      // navigation
      loop={true}
      autoplay={{ delay: 3000,
        disableOnInteraction: false
      }}
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: false }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide className='w-[26%] m-auto'> 
       <div className='flex flex-col gap-6 p-6 shadow-md rounded-md bg-white  '>
        <div className='rounded-md '>
        <Image src={booking} alt=""  className='rounded-md h-[200px]'/> 
        </div>
        <p className=' font-black text-xl text-center'>
        Smart Wastebin Booking
        </p>
        <p className='text-center text-xl truncate'>
        Residents can easily book a smart wastebin for proper disposal of waste right from their phones or computers.
        </p>
       </div>
      </SwiperSlide>
      <SwiperSlide className='w-[26%] m-auto'> 
      <div className='flex flex-col gap-6 p-6 shadow-md rounded-md bg-white '>
        <div className='rounded-md '>
        <Image src={data} alt=""  className='rounded-md h-[200px]'/> 
        </div>
        <p className=' font-black text-xl text-center'>
        Data-Driven Management
        </p>
        <p className='text-center text-xl truncate'>
        We believe in a cleaner future, and with SmartBin, managing waste is no longer a burden but a simple, organized process. Join us in building smarter cities. one bin at a time.
        </p>
       </div>
      </SwiperSlide>
      <SwiperSlide className='w-[26%] m-auto'> 
      <div className='flex flex-col gap-6 p-6 shadow-md rounded-md bg-white '>
        <div className='rounded-md '>
        <Image src={shedule} alt=""  className='rounded-md h-[200px]'/> 
        </div>
        <p className=' font-black text-xl text-center'>
        Timely Pickup Scheduling
        </p>
        <p className='text-center text-xl truncate'>
        Schedule waste pickups at your convenience and receive real-time updates on your requests.
        </p>
       </div>
</SwiperSlide>
<SwiperSlide className='w-[26%] m-auto'> 
<div className='flex flex-col gap-6 p-6 shadow-md rounded-md bg-white '>
        <div className='rounded-md '>
        <Image src={track} alt=""  className='h-[200px] rounded-md'/> 
        </div>
        <p className=' font-black text-xl text-center'>
        Community Waste Tracking
        </p>
        <p className='text-center text-xl truncate'>
        Monitor waste collection activities in your area and contribute to a cleaner, healthier environment.
        </p>
       </div>
</SwiperSlide>
      <SwiperSlide className='w-[26%] m-auto'>
      <div className='flex flex-col gap-6 p-6 shadow-md rounded-md bg-white '>
        <div className='rounded-md '>
        <Image src={eco} alt=""  className='rounded-md h-[200px]'/> 
        </div>
        <p className=' font-black text-xl text-center'>
        Eco-Friendly Education
        </p>
        <p className='text-center text-xl truncate'>
        Learn tips and guidelines for proper waste segregation and recycling through our platform.
        </p>
       </div>
        </SwiperSlide>
     
      
    </Swiper>
      </div>

        </div>

    </div>
  )
}

export default Whatwedo