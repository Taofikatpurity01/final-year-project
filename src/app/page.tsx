import React from 'react'
import Header from './components/Header'
import Hero  from '@/app/components/Hero'
import Recycle from './components/Recycle'
import Footer from './components/Footer'
import Image from 'next/image'
import Title from './components/title'

const Page = () => {
  return (
    <div id='#home'>
      <Header />
      <Hero />
      <Recycle />
      <Footer />
      <Title />

    </div>
  )
}

export default Page