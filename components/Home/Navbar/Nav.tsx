"use client"

import { navlinks } from "@/constant/constant";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";


//define props type

type props={
    openNav:()=>void;
}

const Nav = ({openNav}:props ) => {
    const[navBg , setNavBg ]=useState(false)

     useEffect(()=>{

const handler=()=>{
    if(window.scrollY>=90){
        setNavBg(true)
    }
    if(window.scrollY<90){
        setNavBg(false)
    }


}
window.addEventListener("scroll", handler)

return()=>{
    window.removeEventListener("scroll", handler)
}

    } ,[])

  

  return (
    <div className=   {` fixed ${navBg ? "bg-[#240b39]" : "fixed " } h-[12vh] z-[10]  w-full 
     transition-all duration-200`}  >
      <div className=" flex items-center h-full justify-between w-[95%] sm-[90%] xl:w-[80%]  mx-auto">
        {/* logo */}

        <h1 className="font-bold text-2xl text-white">
  &lt;Code👉.Amir/&gt;
</h1>

        {/* NavLinks */}
        <div className=" flex items-center space-x-10 ">
          <div className="hidden lg:flex items-center space-x-8">
            {navlinks.map((navlink) => {
              return (
                <Link key={navlink.id} href={navlink.URL}>
                  <p className=" nav__link">{navlink.lable}</p>
                </Link>
              );
            })}
          </div>

          {/* BUTTONS */}
          <div className="flex items-center space-x-4">

          <Link href="https://www.upwork.com/freelancers/~0170466117f7fadddf">
  <button className="md:px-10 md:py-3 px-8 py-3 text-blue-800 font-semibold sm:text-base text-sm bg-white hover:bg-green-500 hover:text-white transition-all duration-200 rounded-lg">
    Hire Me
  </button>
</Link>

{/* burger */}
<HiBars3BottomRight onClick={openNav} className=" w-8 h-8 cursor-pointer text-white lg:hidden" ></HiBars3BottomRight>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
