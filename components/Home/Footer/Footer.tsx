import React from "react";
import Image from "next/image";
const Footer = () => {
  return (
    <div className="pt-16 pb-16 bg-[#0f0715]  ">
      <div>
        <Image
          src="/images/logo.png"
          alt="logo"
          width={180}
          height={180}
          className="mx-auto"
        />
      </div>
      <div className=" flex items-center flex-wrap space-x-10 space-y-5 font-bold text-white justify-center">
         <div className="">Home .</div>
        <div className="">Services .</div>
        <div className="">Project .</div>
        <div className="">Reviews .</div>
        <div className="">Contact .</div>
        
      </div>
      <p className= " text-white text-opacity-60 text-center mt-6  " > 2024 All right Reserved by WebDev Warriors</p>
    </div>
  );
};

export default Footer;
