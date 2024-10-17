import React from 'react'

const ContactForm = () => {
  return (
    <div className='bg-[#140c1c] rounded-lg sm:p-10'>
      <h1 className='text-bg text-2xl md:text-3xl lg:text-[2.5rem] font-bold'>Let's work together!</h1>
      <p className='text-gray-200 mt-3 lg:text-base text-xs md:text-sm '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus neque voluptatibus, voluptate provident fugiat molestiae.</p>

      {/* input fields */}
      <form className='mt-8 block w-full overflow-hidden '>
        <div className='flex flex-cols md:flex-row items-center justify-between gap-4'>

            <input type="text"  placeholder='First Name' className='bg-black text-white
             placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full'/>
             <input type="text"  placeholder='Last Name' className='bg-black text-white
             placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full'/>
        </div>
{/* second input fields */}
        <div className='flex flex-cols md:flex-row items-center justify-between gap-4 mt-5'>
          <input type="email"  placeholder='Email Address' className='bg-black text-white
 placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full'/>
       <input type="text"  placeholder='Phone Number' className='bg-black text-white
 placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full'/>
</div>

      </form>
    </div>
  )
}

export default ContactForm
