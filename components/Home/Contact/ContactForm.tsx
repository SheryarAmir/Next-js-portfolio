import React from 'react';

const ContactForm = () => {
  return (
    <div className='bg-[#140c1c] rounded-lg sm:p-10'>
      <h1 className='text-bg text-2xl md:text-3xl lg:text-[2.5rem] font-bold'>Let's work together!</h1>
      <p className='text-gray-200 mt-3 lg:text-base text-xs md:text-sm'>
        Let’s get started on your project! Fill in the form below, and I’ll be in touch shortly.
      </p>

      {/* input fields */}
      <form className='mt-12 block w-full overflow-hidden'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-4'>
          <input 
            type="text" 
            placeholder='First Name' 
            className='bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border border-gray-600 outline-none w-full'
            required
          />
          <input 
            type="text" 
            placeholder='Last Name' 
            className='bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border border-gray-600 outline-none w-full'
            required
          />
        </div>

        {/* Second input fields */}
        <div className='flex flex-col md:flex-row items-center justify-between gap-4 mt-5'>
          <input 
            type="email" 
            placeholder='Email Address' 
            className='bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border border-gray-600 outline-none w-full'
            required 
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            title="Please enter a valid email address."
          />
          <input 
            type="text" 
            placeholder='Phone Number' 
            className='bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border border-gray-600 outline-none w-full'
            required
          />
        </div>

        {/* Dropdown for services */}
        <div>
          <select className='w-full mt-5 bg-black text-white px-4 py-3.5 rounded-md border border-gray-600 outline-none' required>
            <option value="" disabled selected>Select a Service</option>
            <option value="Frontend development">Frontend Development</option>
            <option value="Backend development">Backend Development</option>
            <option value="Fullstack development">Fullstack Development</option>
          </select>
        </div>

        {/* Text area */}
        <textarea 
          rows={7} 
          placeholder="Message" 
          className='w-full mt-5 bg-black text-white px-4 py-3.5 rounded-md border border-gray-600 outline-none' 
          required 
        />

        {/* Submit button */}
        <div className='mt-4'>
          <button className='px-8 py-3.5 bg-[#7947df] text-white hover:bg-[#5c2fb7] transition-all duration-150 ease-in-out'>
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
