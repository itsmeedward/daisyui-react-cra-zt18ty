import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';



export default function P404() {
  useEffect(() => {
    const animationContainer = document.getElementById('animation-container');

    if (animationContainer) {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/lottie-web@5.7.9/build/player/lottie.min.js';
      script.async = true;

      script.onload = () => {
        window.lottie.loadAnimation({
          container: animationContainer,
          renderer: 'svg',
          loop: true,
          autoplay: true,
          path: 'https://assets4.lottiefiles.com/packages/lf20_4qhciwpm.json'
        });
      };

      document.body.appendChild(script);
    }
  }, []);
  return (
    <section className=" ">
  <div className="container min-h-screen px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12">
    <div className="wf-ull lg:w-1/2">
      <p className="text-sm font-medium ">404 error</p>
      <h1 className="mt-3 text-2xl font-semibold   md:text-3xl">
        We lost this page
      </h1>
      <p className="mt-4 ">
        Sorry, the page you are looking for doesn't exist.
      </p>
      <div className="flex items-center mt-6 gap-x-3">
        <button className="flex items-center justify-center w-1/2 px-5 py-2 text-sm  transition-colors duration-200  border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-100 hover:bg-gray-100  dark:border-gray-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5 rtl:rotate-180"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
            />
          </svg>
          <span onClick={()=> window.history.back()}>Go back</span>
        </button>
        <button className="w-1/2 px-5 py-2 text-sm tracking-wide transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto hover:bg-blue-600 dark:hover:bg-blue-400 dark:bg-blue-600 text-white">
           <Link to="/">Take me home</Link >
        </button>
      </div>
      <div className="mt-10 space-y-6">
        <div>
          <a
            href="#"
            className="inline-flex items-center text-sm  gap-x-2 hover:underline"
          >
            <span>Documentation</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 rtl:rotate-180"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </a>
          <p className="mt-2 text-sm ">
            Dive in to learn all about our product.
          </p>
        </div>
        <div>
          <a
            href="#"
            className="inline-flex items-center text-sm  gap-x-2 hover:underline"
          >
            <span>Our blog</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 rtl:rotate-180"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </a>
          <p className="mt-2 text-sm ">Read the latest posts on our blog.</p>
        </div>
        <div>
          <a
            href="#"
            className="inline-flex items-center text-sm  gap-x-2 hover:underline"
          >
            <span>Chat to support</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 rtl:rotate-180"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </a>
          <p className="mt-2 text-sm ">Our friendly team is here to help.</p>
        </div>
      </div>
    </div>
    <div className="relative w-full mt-8 lg:w-1/2 lg:mt-0">
     
    <div id="animation-container"></div>
 
    </div>
  </div>
</section>

  );
}
