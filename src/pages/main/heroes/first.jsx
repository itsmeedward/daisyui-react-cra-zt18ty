import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

const messages = ['Start your journey ', 'Launch Your Voyage', 'Begin Your Adventure',];

function First() {
  const [messageIndex, setMessageIndex] = useState(0);
  const [currentMessage, setCurrentMessage] = useState(messages[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((messageIndex + 1) % messages.length);
    }, 3800);
    return () => clearInterval(interval);
  }, [messageIndex]);

  useEffect(() => {
    setCurrentMessage(messages[messageIndex]);
  }, [messageIndex]);
  return (
<  >

<section
    data-section-id={1}
    data-share=""
    data-category="headers"
    data-component-id="44d0b9e2_06_awz"
    className="relative pb-20"
  >
    <img
      className="hidden lg:block lg:absolute top-0 left-0 mt-32"
      src="zeus-assets/icons/dots/yellow-dot-left-bars.svg"
      alt=""
      data-config-id="auto-img-1"
    />
    <img
      className="hidden lg:block lg:absolute bottom-0 right-0 mb-40"
      src="zeus-assets/icons/dots/red-dot-right-shield.svg"
      alt=""
      data-config-id="auto-img-2"
    />
    <div className="relative container px-4 pt-12 mb-20 mx-auto text-center">
      <h2
        className="mt-8 mb-8 lg:mb-12 text-4xl lg:text-6xl font-semibold"
        data-config-id="header"
      >
       {currentMessage}.Every day.With  <span className="text-blue-600 font-semibold">Greathill</span>
      </h2>
      <p
        className="max-w-3xl mx-auto mb-8 lg:mb-12 text-xl text-gray-500"
        data-config-id="desc"
      >
        Build a well-presented brand that everyone will love. Take care to
        develop resources continually and integrity them with previous
        projects.
      </p>
      
       <Link className="relative z-10 inline-block w-full md:w-auto mb-2 md:mb-0 px-8 py-4 mr-4 text-sm font-medium leading-normal bg-blue-600 hover:bg-blue-300 text-white rounded transition duration-200" to="/contact"
       data-config-id="hero-primary-action ">  Get started 
            </Link>
      
    </div>
    <div className="max-w-6xl px-4 mx-auto">
      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/3 px-4 mb-4 md:mb-0">
          <div className="p-8 border rounded-lg">
            <span className="flex items-center justify-center mb-12 w-16 h-16 rounded-full bg-teal-500">
              <svg
                width={20}
                height={17}
                viewBox="0 0 20 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                data-config-id="auto-svg-2-6"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13.1614 8.05311C13.1614 9.79911 11.7454 11.2141 9.99938 11.2141C8.25338 11.2141 6.83838 9.79911 6.83838 8.05311C6.83838 6.30611 8.25338 4.89111 9.99938 4.89111C11.7454 4.89111 13.1614 6.30611 13.1614 8.05311Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.998 15.3549C13.806 15.3549 17.289 12.6169 19.25 8.05285C17.289 3.48885 13.806 0.750854 9.998 0.750854H10.002C6.194 0.750854 2.711 3.48885 0.75 8.05285C2.711 12.6169 6.194 15.3549 10.002 15.3549H9.998Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <h3
              className="mb-6 text-2xl font-semibold"
              data-config-id="header1"
            >
              Quick review
            </h3>
            <p className="mb-8 text-gray-500" data-config-id="desc1">
              We made sure you get feedback the same day.
            </p>
            <a
              className="ml-auto flex items-center justify-center w-14 h-14 rounded-full bg-blue-50 hover:bg-blue-100"
              href="#"
            >
              <svg
                width={19}
                height={13}
                viewBox="0 0 19 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                data-config-id="auto-svg-3-6"
              >
                <path
                  d="M9.69976 6.74872L0.749756 6.74872"
                  stroke="#45C1FF"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.69971 11.7497L17.6367 6.74869L9.69971 1.74769V11.7497Z"
                  stroke="#45C1FF"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/3 px-4 mb-4 md:mb-0">
          <div className="p-8 border rounded-lg">
            <span className="flex items-center justify-center mb-12 w-16 h-16 rounded-full bg-red-500">
              <svg
                width={20}
                height={18}
                viewBox="0 0 20 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                data-config-id="auto-svg-4-6"
              >
                <path
                  d="M14.8395 17.1642V3.54639"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18.9173 13.068L14.8395 17.1647L10.7617 13.068"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4.91127 0.832886V14.4507"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M0.833496 4.92894L4.91127 0.832275L8.98905 4.92894"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <h3
              className="mb-6 text-2xl font-semibold"
              data-config-id="header2"
            >
              Easy changes
            </h3>
            <p className="mb-8 text-gray-500" data-config-id="desc2">
              Options settings for customers convenience.
            </p>
            <a
              className="ml-auto flex items-center justify-center w-14 h-14 rounded-full bg-blue-50 hover:bg-blue-100"
              href="#"
            >
              <svg
                width={19}
                height={13}
                viewBox="0 0 19 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                data-config-id="auto-svg-5-6"
              >
                <path
                  d="M9.69976 6.74872L0.749756 6.74872"
                  stroke="#45C1FF"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.69971 11.7497L17.6367 6.74869L9.69971 1.74769V11.7497Z"
                  stroke="#45C1FF"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/3 px-4">
          <div className="p-8 border rounded-lg">
            <span className="flex items-center justify-center mb-12 w-16 h-16 rounded-full bg-yellow-400">
              <svg
                width={18}
                height={20}
                viewBox="0 0 18 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                data-config-id="auto-svg-6-6"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.7366 0.76187H5.08465C3.00465 0.75387 1.30065 2.41087 1.25065 4.49087V15.2279C1.20565 17.3299 2.87365 19.0699 4.97465 19.1149C5.01165 19.1149 5.04865 19.1159 5.08465 19.1149H13.0726C15.1626 19.0409 16.8146 17.3189 16.8026 15.2279V6.03787L11.7366 0.76187Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11.4749 0.750122V3.65912C11.4749 5.07912 12.6239 6.23012 14.0439 6.23412H16.7979"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.64087 7.90881V13.9498"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.9866 10.2643L8.64163 7.9093L6.29663 10.2643"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <h3
              className="mb-6 text-2xl font-semibold"
              data-config-id="header3"
            >
              Place storage
            </h3>
            <p className="mb-8 text-gray-500" data-config-id="desc3">
              Store projects in easily accessible catalogs
            </p>
            <a
              className="ml-auto flex items-center justify-center w-14 h-14 rounded-full bg-blue-50 hover:bg-blue-100 text-white"
              href="#"
            >
              <svg
                width={19}
                height={13}
                viewBox="0 0 19 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                data-config-id="auto-svg-7-6"
              >
                <path
                  d="M9.69976 6.74872L0.749756 6.74872"
                  stroke="#45C1FF"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.69971 11.7497L17.6367 6.74869L9.69971 1.74769V11.7497Z"
                  stroke="#45C1FF"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div
      className="hidden navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50"
      data-config-id="toggle-mobile-2"
      data-config-target=".navbar-menu"
      data-config-class="hidden"
    >
      <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25" />
      <nav className="relative flex flex-col py-6 px-6 w-full h-full bg-white border-r overflow-y-auto">
        <div className="flex items-center mb-8">
          <a
            className="mr-auto text-lg font-semibold leading-none"
            href="#"
            data-config-id="brand"
          >
            <img
              className="h-7"
              src="zeus-assets/logo/logo-zeus-red.svg"
              alt=""
              width="auto"
            />
          </a>
          <button className="navbar-close">
            <svg
              className="h-6 w-6 text-gray-500 cursor-pointer hover:text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              data-config-id="auto-svg-8-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div>
          <ul>
            <li className="mb-1">
              <a
                className="block p-4 text-sm font-medium text-gray-900 hover:bg-gray-50 rounded"
                href="#"
                data-config-id="link1"
              >
                About
              </a>
            </li>
            <li className="mb-1">
              <a
                className="block p-4 text-sm font-medium text-gray-900 hover:bg-gray-50 rounded"
                href="#"
                data-config-id="link2"
              >
                Company
              </a>
            </li>
            <li className="mb-1">
              <a
                className="block p-4 text-sm font-medium text-gray-900 hover:bg-gray-50 rounded"
                href="#"
                data-config-id="link3"
              >
                Services
              </a>
            </li>
            <li className="mb-1">
              <a
                className="block p-4 text-sm font-medium text-gray-900 hover:bg-gray-50 rounded"
                href="#"
                data-config-id="link4"
              >
                Testimonials
              </a>
            </li>
          </ul>
        </div>
        <div className="mt-auto">
          <div className="pt-6">
            <a
              className="block py-3 text-center text-sm leading-normal rounded bg-red-50 hover:bg-red-200 text-red-500 font-semibold transition duration-200"
              href="#"
              data-config-id="primary-action"
            >
              Contact Us
            </a>
          </div>
          <p className="mt-6 mb-4 text-sm text-center text-gray-500">
            <span data-config-id="copy">© 2021 All rights reserved.</span>
          </p>
        </div>
      </nav>
    </div>
  </section>







    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-16 mx-auto text-center">
        <div className="max-w-lg mx-auto">
        <h1 className="block text-3xl font-m text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight dark:text-white ">
          {currentMessage} with <span className="text-blue-600 font-semibold">Greathill</span>
        </h1>
          <p  data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" className="mt-6 text-gray-500 dark:text-gray-300">
            We provide top-quality computer solutions to help your business grow
            and succeed.
            
          </p>
          
            <Link className="btn px-5 py-2 mt-6 text-sm font-medium leading-5 text-center text-white capitalize bg-blue-600 rounded-lg hover:bg-blue-500 lg:mx-0 lg:w-auto focus:outline-none" to="/contact">  Get started 
            </Link>
           
         
        </div>
        <div className="flex justify-center mt-10">
       

    
  <iframe
    src="https://streamable.com/e/er7zcj?autoplay=1&nocontrols=1"
    frameBorder={0}
    className="object-cover w-full h-96 rounded-xl lg:w-4/5" 
    allowFullScreen=""
    allow="autoplay"
   
  />



   
     
        </div>
      </div>
    </section>
    </>
  );
}
export default First;
