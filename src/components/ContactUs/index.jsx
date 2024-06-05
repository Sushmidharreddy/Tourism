import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactUs = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all required fields are filled
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all fields.');
      return;
    }

    // Send email using EmailJS
    emailjs.send(
      'service_vjrahaq', // Replace with your EmailJS service ID
      'template_iv4cq3p', // Replace with your EmailJS template ID
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        to_email: 'mailto:samruddhip746@gmail.com', // Replace with the recipient's email address
      },
      'wksgdfI_D2H8fEwZ-' // Replace with your EmailJS user ID
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert('Message sent successfully');
      // Clear form fields
      setFormData({ name: '', email: '', message: '' });
    })
    .catch((error) => {
      console.error('FAILED...', error);
      alert('Failed to send message');
    });
  };

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <div className='w-full bg-teal-300 flex justify-center py-16'>
      <div className='w-11/12'>
        <div className="flex sm:flex flex-col md:grid lg:grid grid-cols-5 sm:grid-cols-5 md:grid-cols-11 lg:grid-cols-11 gap-0">
          <div className="grid-items order-2 sm:order-2 md:order-1 lg:order-1 col-span-4 bg-white px-8 py-8 flex flex-col justify-center items-center">
            <div className="bg-white p-8 flex flex-col justify-center items-center">
              <div className='text-4xl'>Contact Us</div>
              <div className='my-6 text-lg text-neutral-500 text-center'>Here are few ways to get in touch with us</div>
              <button
                className='bg-teal-300 border border-black px-16 py-4 mt-4 hover:transition-all duration-500 hover:duration-500 hover:bg-teal-500'
                onClick={toggleFormVisibility}
              >
                {isFormVisible ? 'Hide Form' : 'Contact Us'}
              </button>
            </div>
          </div>
          {isFormVisible && (
            <>
              <div className="grid-items order-1 sm:order-1 md:order-2 lg:order-2 bg-white col-span-7 w-full py-8">
                <div className='-ml-16'>
                  <img className='w-3/4 h-auto' src="./images/BuildingsSVG.svg" alt="" />
                </div>
              </div>
              <div className="grid-items order-1 sm:order-1 md:order-2 lg:order-2 bg-white col-span-5 w-full px-8 py-4">
                <div className='-mt-16'>
                  <form className='w-full' onSubmit={handleSubmit}>
                    <div className='text-2xl my-2'>Message Us</div>
                    <div className='flex flex-col items-start'>
                      <input className='border border-black shadow-xl h-12 w-full pl-4 my-2 outline-none' placeholder='Your Name' name="name" type="text" value={formData.name} onChange={handleChange} required />
                      <input className='border border-black shadow-xl h-12 w-full pl-4 my-2 outline-none' placeholder='Email' name="email" type="email" value={formData.email} onChange={handleChange} required />
                      <textarea className='border border-black shadow-xl h-24 w-full pl-4 my-2 outline-none' placeholder='Message' name="message" value={formData.message} onChange={handleChange} required />
                    </div>
                    <div className='flex justify-center items-center my-2'>
                      <button className='bg-teal-300 border border-black px-12 py-3 hover:transition-all duration-500 hover:duration-500 hover:bg-teal-500'>Submit</button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="grid-items order-1 sm:order-1 md:order-2 lg:order-2 bg-white col-span-6 w-full px-8 py-4">
                <div className='flex flex-col justify-center items-center'>
                  <div className='my-4 mb-6'>
                    <div className='text-2xl my-2'>Our Phone</div>
                    <div className='text-2xl text-neutral-400 my-2'>1234567890</div>
                    <div className='text-2xl mt-2'>Email</div>
                    <div className='text-2xl text-neutral-400 mailto:my-2'>abc@gmail.com</div>
                    <div className='text-2xl mt-2'>Address</div>
                    <div className='text-2xl text-neutral-400 my-2'>Building A, Flat No.5, Gardenia Park Phase-II, 6 S, Somnath Nagar Rd, Pune, Maharashtra 411014</div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;