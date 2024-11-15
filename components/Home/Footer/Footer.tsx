import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="pt-16 pb-16 bg-[#0f0715]">
      <div className="flex justify-center items-center mb-8">
        {/* Logo */}
        <h1 className="font-bold text-2xl text-white">&lt;.Amir/&gt;</h1>
      </div>

      <div className="flex items-center flex-wrap space-x-6 space-y-3 font-bold text-white justify-center">
        <div className="">Home .</div>
        <div className="">Services .</div>
        <div className="">Project .</div>
        <div className="">Reviews .</div>
        <div className="">Contact .</div>
      </div>
      
      <p className="text-white text-opacity-60 text-center mt-6">
      2024 All rights Reserved by Sheryar Amir, powered by NextGen
      </p>
    </div>
  );
};

export default Footer;
