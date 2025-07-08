'use client'

import Image from 'next/image'
import React from 'react'
import { usePathname } from 'next/navigation'
import logo from './../../../public/Images/logo.png'
import xlogo from './../../../public/Images/xlogo.png'
import fblogo from './../../../public/Images/fblogo.png'
import instalogo from './../../../public/Images/instalogo.png'
import Link from 'next/link'

const Header = () => {
  const pathname = usePathname()
  
  // Function to check if link is active
  const isActive = (path:  string) => {
    if (path === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(path)
  }
  return (
    <div>
      <div className='nav flex justify-between items-center p-4 shadow-md fixed top-0 left-0 w-full z-10 bg-white'>
        {/* Logo Section */}
        <nav>
          <Link href="/">
            <Image 
              src={logo} 
              alt="Logo" 
              width={120} 
              height={40}
              className="cursor-pointer"
            /> 
          </Link>
        </nav>

        {/* Navigation Links */}
        <div>
          <ul className='flex gap-8 items-center text-lg font-medium'>
            <li>
              <Link 
                href='/' 
                className={`hover:text-blue-600 transition-colors duration-200 cursor-pointer relative ${
                  isActive('/') 
                    ? 'text-blue-600 font-semibold' 
                    : 'text-gray-700'
                }`}
              >
                Home
                {isActive('/') && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 rounded-full"></span>
                )}
              </Link>
            </li>
            <li>
              <Link 
                href='/about' 
                className={`hover:text-blue-600 transition-colors duration-200 cursor-pointer relative ${
                  isActive('/about') 
                    ? 'text-blue-600 font-semibold' 
                    : 'text-gray-700'
                }`}
              >
                About Us
                {isActive('/about') && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 rounded-full"></span>
                )}
              </Link>
            </li>
            <li>
              <Link 
                href='' 
                className={`hover:text-blue-600 transition-colors duration-200 cursor-pointer relative ${
                  isActive('/service') 
                    ? 'text-blue-600 font-semibold' 
                    : 'text-gray-700'
                }`}
              >
                Service
                {isActive('/service') && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 rounded-full"></span>
                )}
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media Icons */}
        <div className='flex gap-3 items-center'>
          <Link 
            href="https://facebook.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className='p-2 rounded-full border-2 border-gray-300 w-10 h-10 flex items-center justify-center hover:border-blue-600 hover:bg-blue-50 transition-all duration-200'
          >
            <Image 
              src={fblogo} 
              alt="Facebook Logo" 
              width={20} 
              height={20}
            />
          </Link>
          
          <Link 
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className='p-2 rounded-full border-2 border-gray-300 w-10 h-10 flex items-center justify-center hover:border-gray-800 hover:bg-gray-50 transition-all duration-200'
          >
            <Image 
              src={xlogo} 
              alt="X/Twitter Logo" 
              width={20} 
              height={20}
            />
          </Link>
          
          <Link 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className='p-2 rounded-full border-2 border-gray-300 w-10 h-10 flex items-center justify-center hover:border-pink-500 hover:bg-pink-50 transition-all duration-200'
          >
            <Image 
              src={instalogo} 
              alt="Instagram Logo" 
              width={20} 
              height={20}
            />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header