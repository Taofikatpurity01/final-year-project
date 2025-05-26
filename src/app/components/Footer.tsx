import React from "react";
import Image from "next/image";
import logo from "./../../../public/Images/footerlogo.png";
import xlogo from './../../../public/Images/xlogo.png'
import fblogo from './../../../public/Images/fblogo.png'
import instalogo from './../../../public/Images/instalogo.png'


const Footer = () => {
  return (
    <div className="bg-[#000000a1] text-white ">
      <div className="p-6 bg-[#000000a1]">
        <Image src={logo} alt=""/>
        <footer className="flex justify-between p-6 ">
          <div className="max-w-6xl  px-4 text-left">
            <p className="text-sm mb-4">
              &copy; 2025 Smart Waste Management System. All rights reserved.
            </p>
            <div className="space-x-4 mb-4">
              <a href="#" className="text-green-400 hover:underline">
                About Us
              </a>
              <a href="#" className="text-green-400 hover:underline">
                Privacy Policy
              </a>
              <a href="#" className="text-green-400 hover:underline">
                Terms of Service
              </a>
            </div>
            <p className="text-xs text-gray-400">
              Made with 💚 for a cleaner, smarter environment
            </p>
          </div>
          <div className=" flex flex-col gap-6">
        <p className="text-xl">
            Contact
        </p>
        <p className=" text-lg">
            Tai Solarin University Of Education
        </p>
          </div>
        <div>
<p>
    Follow Us On
</p>
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

        </footer>
      </div>
    </div>
  );
};

export default Footer;
