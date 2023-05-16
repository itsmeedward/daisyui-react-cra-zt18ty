import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const messages = ['Smart ', 'Better', 'Wise'];

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
    <>
      <section
        data-section-id={1}
        data-share=""
        data-category="headers-light-reverse"
        data-component-id="26f94a33_05_awz"
        className="pt-6 bg-orange-70 overflow-hidden"
      >
        <div className="container mx-auto px-4">
          <div
            className="px-8 py-20  overflow-hidden rounded-2xl"
            style={{
              backgroundImage:
                'url("https://wallpapercave.com/wp/wp8593341.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
            data-config-id="auto-img-3"
          >
            <div className="md:max-w-2xl text-center mx-auto">
              <span
                className="inline-block mb-3 text-sm text-blue-500 font-bold uppercase tracking-widest"
                data-config-id="auto-txt-13-5"
              >
                Best caption here
              </span>
              <h1
                className="font-heading mb-6 text-5xl lg:text-6xl text-white font-black tracking-tight"
                data-config-id="auto-txt-14-5"
              >
                <span data-config-id="auto-txt-18-5">Have what you </span>
                <span
                  className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500 ..."
                  data-config-id="auto-txt-15-5"
                >
                  imagine
                </span>
                <span data-config-id="auto-txt-19-5"> without compromise.</span>
              </h1>
              <p
                className="mb-8 text-xl text-gray-400 font-bold"
                data-config-id="auto-txt-16-5"
              >
                Thousands of companies trust in our apps, you could be part of
                our community too.
              </p>
              <div className="max-w-lg mx-auto">
                <div className="flex flex-wrap -m-2">
                  <div className="w-full md:flex-1 p-2">
                    <input
                      className="px-6 py-3.5 w-full text-lg text-black font-bold bg-white outline-none focus:ring-4 focus:ring-blue-200 placeholder-black rounded-full"
                      id="headerLightReverseInput5-1"
                      type="text"
                      placeholder="Email address"
                      data-config-id="auto-input-4-5"
                    />
                  </div>
                  <div className="w-full md:w-auto p-2">
                    <div className="flex flex-wrap justify-center -m-2">
                      <div className="w-full md:w-auto p-2">
                        <Link
                          className="relative z-10 inline-block w-full md:w-auto mb-2 md:mb-0 px-8 py-4 mr-4 text-sm font-medium leading-normal bg-blue-600 hover:bg-blue-300 text-white rounded transition duration-200"
                          to="/contact"
                          data-config-id="hero-primary-action "
                        >
                          {' '}
                          Get started
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        data-section-id={1}
        data-share=""
        data-category="headers"
        data-component-id="44d0b9e2_06_awz"
        className="relative "
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
            {currentMessage}.Every day.With{' '}
            <span className="text-blue-600 font-semibold">Greathill</span>
          </h2>
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
    </>
  );
}
export default First;
