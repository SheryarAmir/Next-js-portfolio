import React, { useState } from 'react';

const ContactForm = () => {
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState<string>("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSuccessMessage(null); // Clear previous messages
    setErrorMessage(null);

    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "7defe561-10dd-4c70-a447-1cc0ad0f5ef2");

    const object = Object.fromEntries(formData.entries());
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });

      const result: { success: boolean; message?: string } = await response.json();
      
      if (result.success) {
        setSuccessMessage("Your message has been sent successfully!");
        setTimeout(() => {
          window.location.reload(); // Reload the page after showing the success message
        }, 2000); // Optional delay to let user see the message
      } else {
        setErrorMessage(result.message || "Failed to send your message. Please try again.");
      }
    } catch (error) {
      setErrorMessage("An error occurred. Please try again later.");
      console.error("An error occurred during form submission:", error);
    }
  }

  const handleServiceChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedService(event.target.value);
  };

  return (
    <div className='bg-[#140c1c] rounded-lg sm:p-10'>
      <h1 className='text-bg text-2xl md:text-3xl lg:text-[2.5rem] font-bold'>Let's work together!</h1>
      <p className='text-gray-200 mt-3 lg:text-base text-xs md:text-sm'>
        Let’s get started on your project! Fill in the form below, and I’ll be in touch shortly.
      </p>

      {/* Display success or error message */}
      {successMessage && <p className="text-green-500 mt-4">{successMessage}</p>}
      {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}

      {/* input fields */}
      <form onSubmit={handleSubmit} className='mt-12 block w-full overflow-hidden'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-4'>
          <input 
            type="text" 
            placeholder='First Name' 
            name='name'
            className='bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border border-gray-600 outline-none w-full'
            required
          />
          <input 
            type="text" 
            placeholder='Last Name' 
            name='name'
            className='bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border border-gray-600 outline-none w-full'
            required
          />
        </div>

        {/* Second input fields */}
        <div className='flex flex-col md:flex-row items-center justify-between gap-4 mt-5'>
          <input 
            type="email" 
            name='email'
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
          <select
            value={selectedService}
            onChange={handleServiceChange}
            className='w-full mt-5 bg-black text-white px-4 py-3.5 rounded-md border border-gray-600 outline-none'
            required
          >
            <option value="" disabled>
              Select a Service
            </option>
            <option value="Frontend development">Frontend Development</option>
            <option value="Backend development">Backend Development</option>
            <option value="Fullstack development">Fullstack Development</option>
          </select>
        </div>

        {/* Text area */}
        <textarea 
          rows={7} 
          placeholder="Message" 
          name='message'
          className='w-full mt-5 bg-black text-white px-4 py-3.5 rounded-md border border-gray-600 outline-none' 
          required 
        />

        {/* Submit button */}
        <div className='mt-4'>
          <button type="submit" className='px-8 py-3.5 bg-[#7947df] text-white hover:bg-[#5c2fb7] transition-all duration-150 ease-in-out'>
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
