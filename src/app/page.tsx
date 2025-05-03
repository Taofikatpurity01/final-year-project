import React from 'react'
import Header from './Header'
import Hero  from '@/app/Hero'
import Recycle from './Recycle'
import Footer from './Footer'
import Image from 'next/image'

const Page = () => {
  return (
    <div id='#home'>
      <Header />
      <Hero />
      <Recycle />
      <Footer />

    </div>
  )
}

export default Page