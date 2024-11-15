import SectionHeading from '@/components/Helper/SectionHeading';
import { projectData } from '@/Data/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';

const Project = () => {
  return (
    <div id="projects" className='pt-16 pb-16 bg-[#050709]'>
      <SectionHeading>MY PROJECT</SectionHeading>
      <div className='w-[80%] mt-20 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-center'>
        {projectData.map((project, i) => (
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-delay={`${i * 100}`}
            key={project.id}
            className='bg-blue-800 p-6 rounded-lg hover:scale-105 transition-all duration-300'
          >
            <Image src={project.image} alt="project" width={300} height={200} className='w-full' />
            {/* Wrapping Link around the button */}
            <Link href={project.url} target="_blank">
              <button className='bg-green-700 flex text-white px-4 py-2 rounded-md hover:bg-green-600 mt-4'>
                Go to Site <FaArrowRight className='mt-[5.5px] ml-3' />
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
