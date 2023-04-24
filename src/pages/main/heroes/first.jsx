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
  );
}
export default First;
