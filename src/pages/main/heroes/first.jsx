import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const messages = ['Smart ', 'Better', 'Wise'];

function First() {
  useEffect(() => {
    document.title = 'Greathill | Home';
  }, []);

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
    data-category="content"
    data-component-id="fdca0d23_05_awz"
    className="relative py-24 2xl:pt-44 2xl:pb-52 bg-white overflow-hidden"
  >
    <div className="container px-4 mx-auto">
      <div className="mb-20 lg:mb-0 w-full lg:w-1/2">
        <div className="pb-14 xl:pb-20 mb-14 xl:mb-28 border-b border-gray-100">
          <h2
            className="font-heading font-medium text-7xl md:text-10xl xl:text-11xl leading-tight"
            data-config-id="auto-txt-1-5"
          >
          Catch the  <span className="text-green-700" >Software </span>  Revuliton Here
          </h2>
        </div>
        <span
          className="block mb-12 font-medium uppercase tracking-widest text-xs text-gray-300 leading-4"
          data-config-id="auto-txt-2-5"
        >
          Discover special tools
          </span>
        <h3
          className="mb-14 font-heading font-medium text-3xl xl:text-5xl leading-snug max-w-2xl"
          data-config-id="auto-txt-3-5"
        >
          A spatial system is a set of rules for how you measure and size your UI
          elements.
        </h3>
        <p
          className="mb-14 xl:mb-36 text-lg leading-10 text-darkBlueGray-400 max-w-md"
          data-config-id="auto-txt-4-5"
        >
          Proin nec nibh vel odio dapibus molestie eu id ipsum. Fusce sodales
          vitae lorem vitae tempus. Etiam nisi ligula, placerat at congue et,
          vehicula quis ex.
        </p>
        
      </div>
      <div className="relative lg:absolute top-0 right-0 lg:mt-12 w-full lg:w-1/2">
        <img
          className="ml-auto"
          src="https://shuffle.dev/uinel-assets/images/content/widget5.png"
          alt=""
          data-config-id="auto-img-2-5"
        />
      </div>
    </div>
  </section>
  
    </>
  );
}
export default First;
