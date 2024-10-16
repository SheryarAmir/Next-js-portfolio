import Image from "next/image"
import Link from "next/link"

const Nav = () => {
  return (
    <div className=' fixed h-[12vh] z-[10] bg-blue-900 w-full  ' >
       
       <div className=" flex items-center h-full justify-between w-[95%] sm-[90%] xl:w-[80%]  mx-auto">
         
         {/* logo */}

         <Image src="/images/logo.png" alt="LOGO" width={170} height={170}
         className="ml-[-1.5] sm:ml-0" />

         {/* NavLinks */}
         <div className=" flex items-center space-x-10 "> 
            <Link href="">Home</Link>
           
         </div>

       </div>


    </div>
  )
}

export default Nav
