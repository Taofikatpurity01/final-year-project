import React from "react";
import Image from "next/image";
import recycle from "./../../public/Images/recycle.png";
import bin from "./../../public/Images/binn.png";
import vission from "./../../public/Images/ourvission.png";
import waste from "./../../public/Images/waste.png";
import build from './../../public/Images/build.png';
import taofikat from './../../public/Images/taofikat.jpg'
import Link from "next/link";

const Recycle = () => {
  return (
    <div>
      <div className="p-6 flex justify-center w-[80%] mx-auto">
        <div className="flex flex-col gap-6 justify-center px-6 py-14">
          <div className="flex justify-center">
            <Image src={recycle} alt="" className="w-[50px]" />
          </div>
          <p className="text-center text-6xl font-black">
            Welcome to the Smart Waste Management System!
          </p>
          <p className="text-center font-black pt-6">MORE ABOUT US</p>
          <p className="text-center text-2xl text-[#000000b2] pb-6">
            We are a team of three passionate final-year Computer Science
            students dedicated to solving real-world problems through
            technology. Our project{" "}
            <span className="text-green-500 font-black">
              {" "}
              The Smart Waste Management System{" "}
            </span>{" "}
            is our innovative contribution to promoting sustainability and
            improving public hygiene using smart solutions. We’re excited to
            have you here. Our goal is simple — to revolutionize the way we
            manage waste using smart technology. With intelligent bins,
            real-time monitoring, and eco-friendly solutions, we’re making waste
            disposal cleaner, smarter, and more efficient. Together, let’s build
            a cleaner environment and a more sustainable future. one smart bin
            at a time.
          </p>
        </div>
      </div>
      <div className="flex justify-between gap-8 px-6 py-14 bg-[whitesmoke]">
        <div className="w-1/2">
          <Image
            src={waste}
            alt=""
            className="rounded-lg w-[80%] h-[100%] m-auto"
          />
        </div>
        <div className="w-1/2 p-6 m-auto" id="uss">
          <p className="text-5xl">Our Mission</p>
          <p className="text-2xl text-[#000000cc] pt-6">
            At Smart Waste Management System, our mission is to transform waste
            disposal through innovation and sustainability. We aim to empower
            communities, institutions, and cities with intelligent solutions
            that promote cleaner environments, reduce waste-related challenges,
            and encourage eco-conscious living. By combining technology with
            environmental responsibility, we’re committed to building a smarter,
            greener future — one bin at a time.
          </p>
        </div>
      </div>
      <div className="flex justify-between  px-6 py-14">
        <div className=" text-[#000000cc] p-6 w-1/2 m-auto">
          <p className="text-5xl ">Our Vission</p>
          <p className=" text-2xl pt-6">
            At Smart Waste Management System, our vision is to transform how
            communities handle waste—moving towards a cleaner, greener, and
            smarter future. We believe waste management shouldn’t be a burden
            but an opportunity to innovate, educate, and elevate the quality of
            life for everyone. We aim to:
          </p>
          <ul className="list-disc pl-10 text-lg gap-4">
            <li>
              🧠 Eliminate inefficiencies in traditional waste collection.
            </li>
            <li>
              🌱 Promote environmental responsibility through digital solutions.
            </li>
            <li>
              🏙️ Build cleaner communities using smart, data-driven decisions.
            </li>
            <li>
              🤝 Encourage community participation in sustainable practices.
            </li>
          </ul>
          <p className="text-2xl">
            Together, let’s reimagine waste—not as a problem, but as a chance to
            make the world better
          </p>
        </div>
        <div className="w-1/2 p-6 m-auto">
          <Image src={vission} alt="" className="rounded-lg w-[70%] ml-auto" />
        </div>
      </div>
      <div className="bg-[wheat] px-6 py-14" >
        <p className="text-5xl font-black text-center">
        Why Choose Us
        </p>
        <p className="text-2xl text-center w-[80%] m-auto p-6 ">
        At Smart Waste Management System, we’re committed to creating a cleaner, more sustainable world through innovative technology. Here’s why you should choose us
        </p>
        <div className="grid grid-cols-3 gap-4 p-6 w-[90%] m-auto">
          <div className="px-6 py-10 flex flex-col gap-6 bg-white rounded-br-3xl hover:bg-black hover:text-white ">
            <p className="font-black text-center text-2xl">
            Smart, Sustainable Solutions
            </p>
            <p className="text-center">
            Our waste management system combines advanced technology with eco-friendly practices, helping reduce waste and improve recycling efficiency. We're not just about managing waste—we're about transforming the future.
            </p>
          </div>
          <div className="px-6 py-10 bg-white flex flex-col gap-6 rounded-br-3xl hover:bg-black hover:text-white  ">
            <p className="font-black text-center text-2xl">
            Easy-to-Use Interface
            </p>
            <p className="text-center">
            Our platform is designed with you in mind. Whether you're a homeowner, business owner, or city planner, our simple, intuitive interface makes it easy to track, manage, and optimize waste collection.
            </p>
          </div>
          <div className="px-6 py-10 bg-white flex flex-col gap-6  rounded-br-3xl hover:bg-black hover:text-white ">
            <p className="font-black text-center text-2xl">
            Cost-Effective
            </p>
            <p className="text-center">
            By using our smart system, you’ll reduce the costs associated with waste disposal. Our solution streamlines the process, saving both time and money, while also contributing to long-term environmental benefits.
            </p>
          </div>
          <div className="px-6 py-10 bg-white flex flex-col gap-6 rounded-br-3xl hover:bg-black hover:text-white  ">
            <p className="font-black text-center text-2xl">
            Real-Time Data and Insights
            </p>
            <p className="text-center">
            Get access to powerful analytics and real-time data to monitor waste levels, recycling trends, and waste collection schedules. Make smarter decisions based on data, not guesses
            </p>
          </div>
          <div className="px-6 py-10 bg-white flex flex-col gap-6  rounded-br-3xl hover:bg-black hover:text-white  ">
            <p className="font-black text-center text-2xl">
            Eco-Friendly Impact
            </p>
            <p className="text-center">
            We are passionate about the planet. By choosing our system, you're contributing to a greener world. Together, we can reduce carbon footprints and promote responsible waste management practices.
            </p>
          </div>
          <div className="px-6 py-10 bg-white flex flex-col gap-6  rounded-br-3xl hover:bg-black hover:text-white  ">
            <p className="font-black text-center text-2xl">
            Innovative & Future-Ready
            </p>
            <p className="text-center">
            We’re always evolving to meet the needs of the future. Our technology adapts to new challenges and regulations, so you can rest assured that your waste management solution is always up to date.
            </p>
          </div>
         
        </div>
      </div>
      <div className="px-6 py-14">
        <p className="text-4xl font-black text-center p-6">
        Meet the Team Behind Smart Waste Management
        </p>
        
        <p className="text-xl text-center p-6 w-[60%] mx-auto">
        At the heart of our innovation is a passionate team driven by the mission to make cities cleaner and waste collection smarter. With diverse expertise and a shared vision, we work together to bring smart solutions to waste challenges.
        </p>
        <div className="grid grid-cols-3 gap-6 w-[80%] m-auto pt-6">

        <div className="flex flex-col gap-6">
        <Image
            src={taofikat}
            alt=""
            className="rounded-b-2xl hover:animate-bounce "
          />
            
          <p className="text-center font-bold">
            Taofikat Oyedepo
          </p>
        </div>
        <div className="flex flex-col gap-6">
        <Image
            src={taofikat}
            alt=""
            className="rounded-b-lg hover:animate-bounce"
          />
          <p className="text-center font-bold">
            Akinwale Akintaju
          </p>
          
        </div>
        <div className="flex flex-col gap-6 ">
        <Image
            src={taofikat}
            alt=""
            className="rounded-b-lg hover:animate-bounce"
          />
          <p className="text-center font-bold">
            Olamide Oyedepo
          </p>
          
        </div>
        </div>
      </div>
      <div  className='rounded-full py-3 bg-[green] text-white test-2xl w-[14%] mx-auto flex justify-center my-6 outline-offset-2 outline-[green] outline-2 '>
        <Link href='/service'>
        <button>
          Our Service
        </button>
        </Link>
        </div>
    </div>
  );
};

export default Recycle;
