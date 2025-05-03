import Image from 'next/image'
import React from 'react'
import logo from './../../public/Images/logo.png'
import xlogo from './../../public/Images/xlogo.png'
import fblogo from './../../public/Images/fblogo.png'
import instalogo from './../../public/Images/instalogo.png'
import Link from 'next/link'

const Header = () => {
  return (
    <div>
        <div className='nav flex justify-between p-2 shadow-md fixed top-0 left-0 w-full z-10 bg-white'>
            <nav>
               <Image src={logo} alt="Logo"  /> 
            </nav>
            <div className=''>
                <ul className='flex gap-10 justify-center py-6 my-auto text-2xl '>
                    <Link href='#home'>
                    
                    <li>
                        Home
                    </li>
                    </Link>
<Link href='#uss'>

                    <li>
                       About Us
                    </li>
</Link>
                    <Link href='/service'>
                    
                    <li>
                        Service
                    </li>

                    
                    </Link>
                    
                </ul>

            </div>
            <div className='flex gap-2 justify-center py-4 pr-4 my-auto'>
                <div className='p-1 rounded-[100%] border-2 w-10 h-10 flex justify-center '>
                <Image src={fblogo} alt="fbLogo"  className='w-6 flex justify-center' />
                </div>
                <div className='p-1 rounded-[100%] border-2 w-10 h-10 flex justify-center '>
                <Image src={xlogo} alt="xLogo" className='w-7 flex justify-center' />
                </div>
                <div className='p-1 rounded-[100%] border-2 w-10 h-10 flex justify-center '>
                <Image src={instalogo} alt="instaLogo" className='w-6 flex justify-center'  />
                </div>

            </div>

        </div>
    </div>
  )
}

export default Header