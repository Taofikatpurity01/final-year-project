import React from 'react'
import Header from './components/Header'
import Hero  from '@/app/components/Hero'
import Recycle from './components/Recycle'
import Footer from './components/Footer'
// import Image from 'next/image'

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