import SectionHeading from "@/components/Helper/SectionHeading";
import { aboutInfo } from "@/Data/data";
import Image from "next/image";
import React from "react";
import { FaCheck } from "react-icons/fa";

const About = () => {
  return (
    <div className="pt-16 pb-16 bg-[#050709]">
      {/* section heading */}
      <SectionHeading>About Me</SectionHeading>
      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-20">
        {/* text content */}
        <div className="lg:w-[90%]">
          <h1 className="text-bg text-[26px] sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-200">
            {aboutInfo.title}
          </h1>
          <p className="mt-6 text-base text-gray-500">
            {aboutInfo.description}
          </p>
          {/* tick */}
          <div className="mt-8">
            <div className="flex items-center space-x-2 mt-6">
              <div className="w-7 h-7 bg-blue-800 flex flex-col items-center justify-center">
                <FaCheck className="text-white" />
              </div>
              <p className="text-sm sm:text-base md:text-lg font-bold text-gray-300">
                Frontend development
              </p>
            </div>
            <div className="flex items-center space-x-2 mt-6">
              <div className="w-7 h-7 bg-orange-800 flex flex-col items-center justify-center">
                <FaCheck className="text-white" />
              </div>
              <p className="text-sm sm:text-base md:text-lg font-bold text-gray-300">
                Backend development
              </p>
            </div>
            <div className="flex items-center space-x-2 mt-6">
              <div className="w-7 h-7 bg-green-800 flex flex-col items-center justify-center">
                <FaCheck className="text-white" />
              </div>
              <p className="text-sm sm:text-base md:text-lg font-bold text-gray-300">
                Full stack development
              </p>
            </div>
          </div>
        </div>

        {/* stats content */}
        <div className=" grid  grid-cols-2 gap-[100px] items-center lg:mx-auto ">

          {/* card count  1 */}
          <div>
              <Image
            src="/images/customer.png"
            alt="image"
            width={80}
            height={80}
            className="mx-auto"
          />
            <p className="font-bold text-xl text-white text-center ">{aboutInfo.client}</p>
            <p className="text-base sm:text-lg text-gray-400 text-center">
              Satisfied Customers
            </p>
          </div>
         
          {/* card count  2 */}
          <div>
              <Image
            src="/images/experience.png"
            alt="image"
            width={80}
            height={80}
            className="mx-auto"
          />
            <p className="font-bold text-xl text-white text-center ">{aboutInfo.experience}</p>
            <p className="text-base sm:text-lg text-gray-400 text-center">
              Years Experience
            </p>
          </div>

           {/* card count  3 */}
          <div>
              <Image
            src="/images/completed.png"
            alt="image"
            width={80}
            height={80}
            className="mx-auto"
          />
            <p className="font-bold text-xl text-white text-center ">{aboutInfo.project}</p>
            <p className="text-base sm:text-lg text-gray-400 text-center">
      Completed Project
            </p>
          </div>

           {/* card count  4 */}
          <div>
              <Image
            src="/images/rocket.png"
            alt="image"
            width={80}
            height={80}
            className="mx-auto"
          />
            <p className="font-bold text-xl text-white text-center ">{aboutInfo.website}</p>
            <p className="text-base sm:text-lg text-gray-400 text-center">
              Website Launched
            </p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default About;
