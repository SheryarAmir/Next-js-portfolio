import { BaseInfo } from "@/Data/data";
import React from "react";
import { FaDownload, FaMedium } from "react-icons/fa";
import Image from "next/image";
import { FaGithub, FaLinkedinIn, FaYoutube, FaInstagram } from "react-icons/fa";
import Link from "next/link";
import { FaUpwork } from "react-icons/fa6";


const Hero = () => {
  return (
    <div id="home" className="w-full pt-[4vh] md:-pt-[12vh] h-screen bg-[#0f0715]  overflow-hidden relative ">
      <div className="flex justify-center flex-col w-4/5 h-full mx-auto ">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {/* content */}

<div className="medialink">

          <div className="">
            <h1 data-aos="fade-left" className="text-2xl md-text-3xl lg:text-4xl mb-5 text-gray-300 font-semibold">
              I am {BaseInfo.name}{" "}
            </h1>

            {/* sub Heading */}

            <h1 data-aos="fade-rignt" data-aos-dealy="100" className="text-bg text-3xl sm:text-4xl md:text-5xl  lg:text-6xl xl-text-7xl font-bold md:leading-[3rem] lg:leading-[3.5rem] xl:leading-[4rem] text-white">
              {BaseInfo.position}
            </h1>

            {/* Description */}
            <p data-aos="fade-left" data-aos-delya="200" className="mt-6 text-sm md-text-base text-white text-opacity-60 2xl:text-lg xl:">
              {BaseInfo.description}{" "}
            </p>
           
          </div>
<div className="media  block md:flex" >
  <div className="button">
     {/* button download */}

     <a href="/images/cv.pdf" download>
  <button
    data-aos="zoom-in"
    data-aos-delay="300"
    className="md-px-8 md:py-2.5 px-6 py-1.5 text-white font-semibold text-sm md:text-lg transition-all duration-200 rounded-lg mt-8 bg-blue-700 hover:bg-green-500 flex items-center space-x-2"
  >
    <span>Download CV</span>
    <FaDownload />
  </button>
</a>c

  </div>
  <div data-aos="zoom-in" data-aos-delya="300" className="links space-x-5 md:ml-12 md:mt-12 mt-10 text-white">

  <Link
        href="https://github.com/SheryarAmir"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block"
      >
        <FaGithub size={26} className=" hover:text-black" />
      </Link>

      <Link
        href="https://www.linkedin.com/in/sheryar-amir/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block"
      >
        <FaLinkedinIn  size={26} className=" hover:text-blue-500" />
      </Link>

      <Link
        href="https://github.com/code-with-zain-hunzai"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block"
      >
        <FaInstagram size={26} className=" hover:text-red-500" />
      </Link>

      <Link
        href="https://www.upwork.com/freelancers/~0170466117f7fadddf"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block"
      >
        <FaUpwork size={26} className=" hover:text-green-500" />
      </Link>

      <Link
        href="https://medium.com/@dev.sheryaramir"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block"
      >
        <FaMedium size={26} className=" hover:text-black rounded-full" />
      </Link>

      <Link
        href="https://youtube.com"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block"
      >
        <FaYoutube size={26} className=" hover:text-red-700" />
      </Link>


  </div>
</div>

          
          </div>

          {/* Image content */}
          {/* <div data-aos="zoom-in" data-aos-delya="400" className="mx-auto hidden lg:block rounded-[3rem] border-[3.5px] border-blue-950 overflow-x-hidden xl:mt-[20px] ">
            <Image src={BaseInfo.profilePic} alt={BaseInfo.name} width={500} height={500}/>
          </div> */}

<div data-aos="zoom-in" data-aos-delay="400" className="mx-auto hidden lg:block xl:mt-[20px]">
  {/* Animated Border Wrapper */}
  <div className="animated-border w-[480px] h-[480px] rounded-full overflow-hidden flex items-center justify-center">
    <Image
      src={BaseInfo.profilePic}
      alt={BaseInfo.name}
      width={480} // Slightly smaller than the wrapper for padding
      height={480}
      className=" rounded-full  " // To match the border radius
    />
  </div>
</div>


          
        </div>
      </div>
    </div>
  );
};

export default Hero;
