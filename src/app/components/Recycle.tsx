import React from "react";
import Image from "next/image";
// import recycle from "./../../../public/Images/recycle.png";
import david from "./../../../public/Images/david.png";
import vission from "./../../../public/Images/ourvission.png";
import waste from "./../../../public/Images/waste.png";
import wale from "./../../../public/Images/wale.png";
import taofikat from "./../../../public/Images/taofikat.png";
import aboutbin from "./../../../public/Images/smart.svg";
// import Link from "next/link";

const Recycle = () => {
  return (
    <div>
       {/* <div className="flex justify-center">
              <Image src={recycle} alt="" className="w-[50px] pt-6" />
            </div> */}
      <div className="p-6 flex justify-between w-[90%] mx-auto ">
        <div className="w-1/2 my-auto">
          <Image src={aboutbin} alt=" " className="rounded-md px-6 h-[600px] w-[600px]"></Image>
        </div>
        <div className="w-1/2 px-6">
          <div className="flex flex-col gap-6 justify-center px-6 py-14 ">
           
            <p className=" text-4xl font-bold mt-8">
              Welcome to the Smart Waste Management System!
            </p>
            <p className=" font-bold pt-1">MORE ABOUT US</p>
            <p className=" text-xl text-[#000000b2] pb-6">
              We are a team of three passionate final-year Computer Science
              students dedicated to solving real-world problems through
              technology. Our projec
              <span className="text-green-500 font-bold">
               
                The Smart Waste Management System
              </span>
              is our innovative contribution to promoting sustainability and
              improving public hygiene using smart solutions. We are excited to
              have you here. Our goal is simple — to revolutionize the way we
              manage waste using smart technology. With intelligent bins,
              real-time monitoring, and eco-friendly solutions, we are making
              waste disposal cleaner, smarter, and more efficient. Together,
              let us build a cleaner environment and a more sustainable future.
              one smart bin at a time.
            </p>
          </div>
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
          <p className="text-4xl">Our Mission</p>
          <p className="text-xl text-[#000000cc] pt-6">
            At Smart Waste Management System, our mission is to transform waste
            disposal through innovation and sustainability. We aim to empower
            communities, institutions, and cities with intelligent solutions
            that promote cleaner environments, reduce waste-related challenges,
            and encourage eco-conscious living. By combining technology with
            environmental responsibility, we are committed to building a smarter,
            greener future — one bin at a time.
          </p>
        </div>
      </div>
      <div className="flex justify-between  px-6 py-14">
        <div className=" text-[#000000cc] p-6 w-1/2 m-auto">
          <p className="text-4xl ">Our Vission</p>
          <p className=" text-xl pt-6">
            At Smart Waste Management System, our vision is to transform how
            communities handle waste—moving towards a cleaner, greener, and
            smarter future. We believe waste management shouldnot be a burden
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
          <p className="text-xl">
            Together, let is reimagine waste—not as a problem, but as a chance to
            make the world better
          </p>
        </div>
        <div className="w-1/2 p-6 m-auto">
          <Image src={vission} alt="" className="rounded-lg w-[70%] ml-auto" />
        </div>
      </div>
      <div className="bg-[wheat] px-6 py-14">
        <p className="text-4xl font-bold text-center">Why Choose Us</p>
        <p className="text-xl text-center w-[80%] m-auto p-6 ">
          At Smart Waste Management System, we are committed to creating a
          cleaner, more sustainable world through innovative technology. Here is
          why you should choose us
        </p>
        <div className="grid grid-cols-3 gap-4 p-6 w-[90%] m-auto">
          <div className="px-6 py-10 flex flex-col gap-6 bg-white rounded-sm hover:bg-black hover:text-white ">
            <p className="font-bold text-center text-xl">
              Smart, Sustainable Solutions
            </p>
            <p className="text-center">
              Our waste management system combines advanced technology with
              eco-friendly practices, helping reduce waste and improve recycling
              efficiency. We are not just about managing waste—we are about
              transforming the future.
            </p>
          </div>
          <div className="px-6 py-10 bg-white flex flex-col gap-6 rounded-sm hover:bg-black hover:text-white  ">
            <p className="font-bold text-center text-xl">
              Easy-to-Use Interface
            </p>
            <p className="text-center">
              Our platform is designed with you in mind. Whether you are a
              homeowner, business owner, or city planner, our simple, intuitive
              interface makes it easy to track, manage, and optimize waste
              collection.
            </p>
          </div>
          <div className="px-6 py-10 bg-white flex flex-col gap-6  rounded-sm hover:bg-black hover:text-white ">
            <p className="font-bold text-center text-xl">Cost-Effective</p>
            <p className="text-center">
              By using our smart system, you will reduce the costs associated with
              waste disposal. Our solution streamlines the process, saving both
              time and money, while also contributing to long-term environmental
              benefits.
            </p>
          </div>
          <div className="px-6 py-10 bg-white flex flex-col gap-6 rounded-sm hover:bg-black hover:text-white  ">
            <p className="font-bold text-center text-xl">
              Real-Time Data and Insights
            </p>
            <p className="text-center">
              Get access to powerful analytics and real-time data to monitor
              waste levels, recycling trends, and waste collection schedules.
              Make smarter decisions based on data, not guesses
            </p>
          </div>
          <div className="px-6 py-10 bg-white flex flex-col gap-6  rounded-sm hover:bg-black hover:text-white  ">
            <p className="font-bold text-center text-xl">
              Eco-Friendly Impact
            </p>
            <p className="text-center">
              We are passionate about the planet. By choosing our system, you are
              contributing to a greener world. Together, we can reduce carbon
              footprints and promote responsible waste management practices.
            </p>
          </div>
          <div className="px-6 py-10 bg-white flex flex-col gap-6  rounded-sm hover:bg-black hover:text-white  ">
            <p className="font-bold text-center text-xl">
              Innovative & Future-Ready
            </p>
            <p className="text-center">
              We are always evolving to meet the needs of the future. Our
              technology adapts to new challenges and regulations, so you can
              rest assured that your waste management solution is always up to
              date.
            </p>
          </div>
        </div>
      </div>
      <div className="px-6 py-14">
        <p className="text-4xl font-bold text-center p-6">
          Meet the Team Behind Smart Waste Management
        </p>

        <p className="text-xl text-center p-6 w-[60%] mx-auto">
          At the heart of our innovation is a passionate team driven by the
          mission to make cities cleaner and waste collection smarter. With
          diverse expertise and a shared vision, we work together to bring smart
          solutions to waste challenges.
        </p>
        <div className="grid grid-cols-3 gap-6 w-[80%] m-auto pt-6">
          <div className="flex flex-col gap-6 bg-[whitesmoke] rounded-b-lg py-4">
            <Image
              src={taofikat}
              alt=""
              className="mt-7  "
            />

            <p className="text-center font-bold">TAOFIKAT OYEWUNMI OYEDEPO</p>
          </div>
          <div className="flex flex-col gap-6 bg-[whitesmoke] rounded-b-lg">
            <Image
              src={david}
              alt=""
              className="h-[360px] w-[200px] mx-auto "
            />
            <p className="text-center font-bold pb-11 mb-7">OLAMIDE DAVID ODUNUGA</p>
          </div>
          <div className="flex flex-col gap-6 bg-[whitesmoke] rounded-b-lg ">
            <Image
              src={wale}
              alt=""
              className=""
            />
            <p className="text-center font-bold">AKINWALE MOSES AKINTAJU</p>
          </div>
        </div>
      </div>
      <div className="rounded-full py-3 bg-[green] text-white test-xl w-[14%] mx-auto flex justify-center my-6 outline-offset-2 outline-[green] outline-2 ">
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
  );
};

export default Recycle;
