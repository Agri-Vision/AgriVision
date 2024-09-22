import React, { useState } from 'react';
import './contactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const submitToGoogleForm = (e) => {
    e.preventDefault();

    const googleFormActionURL = "https://docs.google.com/forms/u/2/d/e/1FAIpQLSeSYa49ibuHWwEP_GUM2eWv5_dU1U8l4Fjl9NRLiSBr9_LtDQ/formResponse"; // Replace with your Google Form action URL
    const form = new FormData();
    form.append("entry.Name", formData.name); // Replace YOUR_ENTRY_ID_FOR_NAME with the actual entry ID from your form
    form.append("entry.Email", formData.email); // Replace YOUR_ENTRY_ID_FOR_EMAIL
    form.append("entry.Message", formData.message); // Replace YOUR_ENTRY_ID_FOR_MESSAGE

    fetch(googleFormActionURL, {
      method: "POST",
      mode: "no-cors",
      body: form,
    })
      .then(() => {
        alert('Message successfully sent!');
        setFormData({ name: '', email: '', message: '' }); // Clear the form
      })
      .catch(() => {
        alert('Failed to send the message. Please try again.');
      });
  };

  return (
    <div className="min-h-screen bg-blue-100 flex items-center justify-center">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden md:flex">
        <div className="w-full md:w-1/2 px-6 py-8">
          <h2 className="text-2xl font-semibold text-gray-700">Send us a Message</h2>
          <form className="mt-4" onSubmit={submitToGoogleForm}>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-name">
                  Your Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  required
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-email">
                  Email Address
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@mail.com"
                  required
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-message">
                  Your Message
                </label>
                <textarea
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here....."
                  required
                ></textarea>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-cyan-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
        <div className="w-full md:w-1/2 bg-cyan-800 text-white px-6 py-8 md:flex md:flex-col md:items-center md:justify-center">
          <h2 className="text-2xl font-semibold">Contact Information</h2>
          <p>research.agrivision@gmail.com</p>
          <p className="mt-4">We hope this project provided valuable insights. </p>
          <p>Thank you!</p>
          <p>- Team AgriVision -</p>
          <div className="flex mt-4">
            <a href="#" className="text-white hover:text-gray-300 mx-2">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-300 mx-2">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-300 mx-2">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;


// import React from 'react'
// import './contactUs.css'

// const contactUs = () => {
//   return (
//     <div className="min-h-screen bg-blue-100 flex items-center justify-center">
//       <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden md:flex">
//         <div className="w-full md:w-1/2 px-6 py-8">
//           <h2 className="text-2xl font-semibold text-gray-700">Send us a Message</h2>
//           <form className="mt-4">
//             <div className="flex flex-wrap -mx-3 mb-6">
//               <div className="w-full px-3 mb-6 md:mb-0">
//                 <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-name">
//                   Your Name
//                 </label>
//                 <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-name" type="text" placeholder="Name"/>
//               </div>
//             </div>
//             <div className="flex flex-wrap -mx-3 mb-6">
//               <div className="w-full px-3">
//                 <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-email">
//                   Email Address
//                 </label>
//                 <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-email" type="email" placeholder="example@mail.com"/>
//               </div>
//             </div>
//             <div className="flex flex-wrap -mx-3 mb-6">
//               <div className="w-full px-3">
//                 <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-message">
//                   Your Message
//                 </label>
//                 <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-message" rows="4" placeholder="Write your message here....."></textarea>
//               </div>
//             </div>
//             <div className="flex items-center justify-between">
//               <button className="bg-cyan-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
//                 Send Message
//               </button>
//             </div>
//           </form>
//         </div>
//         <div className="w-full md:w-1/2 bg-cyan-800 text-white px-6 py-8 md:flex md:flex-col md:items-center md:justify-center">
//           <h2 className="text-2xl font-semibold">Contact Information</h2>
//           <p>research.agrivision@gmail.com</p>
//           <p className="mt-4">We hope this project provided valuable insights. </p>
//           <p>Thank you!</p>
          
          
//           <p>- Team AgriVision -</p>
//           <div className="flex mt-4">
//             <a href="#" className="text-white hover:text-gray-300 mx-2">
//               <i className="fab fa-twitter"></i>
//             </a>
//             <a href="#" className="text-white hover:text-gray-300 mx-2">
//               <i className="fab fa-linkedin"></i>
//             </a>
//             <a href="#" className="text-white hover:text-gray-300 mx-2">
//               <i className="fab fa-instagram"></i>
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default contactUs
