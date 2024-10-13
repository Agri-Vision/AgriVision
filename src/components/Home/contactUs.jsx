import React, { useState } from 'react';
import './contactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const submitToWeb3Forms = async (e) => {
    e.preventDefault();

    const formUrl = 'https://api.web3forms.com/submit'; // Web3Forms API endpoint
    const accessKey = '79901eb3-da35-4ad3-baea-55f2ac2dec96'; // Replace with your Web3Forms API key

    const form = new FormData();
    form.append('access_key', accessKey);
    form.append('name', formData.name);
    form.append('email', formData.email);
    form.append('message', formData.message);

    try {
      const response = await fetch(formUrl, {
        method: 'POST',
        body: form,
      });
      
      if (response.ok) {
        setFormStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-blue-100 flex items-center justify-center" id="contactUs">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden md:flex">
        <div className="w-full md:w-1/2 px-6 py-8">
          <h2 className="text-2xl font-semibold text-gray-700">Send us a Message</h2>
          <form className="mt-4" onSubmit={submitToWeb3Forms}>
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
          {formStatus === 'success' && <p className="text-green-500 mt-4">Message sent successfully!</p>}
          {formStatus === 'error' && <p className="text-red-500 mt-4">Failed to send message. Please try again.</p>}
        </div>
        <div className="w-full md:w-1/2 bg-cyan-800 text-white px-6 py-8 md:flex md:flex-col md:items-center md:justify-center">
          <h2 className="text-2xl font-semibold">Contact Information</h2>
          <p>research.agrivision@gmail.com</p>
          <p className="mt-4">We hope this project provided valuable insights.</p>
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
