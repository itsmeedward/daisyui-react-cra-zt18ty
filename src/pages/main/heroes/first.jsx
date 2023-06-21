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

  
//lottiee

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
        path: 'https://assets3.lottiefiles.com/packages/lf20_eOLhtkf7AY.json'
      });
    };

    document.body.appendChild(script);
  }
}, []);
//lottie end
  return (
    <>
      <div className="pt-32 md:pt-44" id="solution">
        <div className="mx-auto max-w-6xl px-6 md:px-12 lg:px-6 xl:px-0">
          <div className="flex-row-reverse items-center justify-between space-y-12  md:flex md:gap-6 lg:gap-12 lg:space-y-0">
            <div  className="relative ml-auto h-full md:w-1/2">
                <div id="animation-container" className=""
                ></div>
            </div>
            <div className="md:w-1/2 lg:w-[47%]">
              <h2 className="text-3xl font-bold   md:text-4xl lg:text-5xl">
              Unleash Your Business Potential
              </h2>
              <p className="my-12  ">
              Discover innovative solutions to streamline operations, enhance productivity, and drive growth. <br />
                <br />
                Our team of experts is committed to delivering tailored technology services that meet your unique business needs.
              </p>
              <div className="space-y-4 divide-y divide-gray-100 dark:divide-gray-800">
                <div className="mt-8 flex gap-4 md:items-center">
                  <div className="flex h-12 w-12 gap-4 rounded border border-gray-200 dark:border-gray-900">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="m-auto h-6 w-6  "
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                      />
                    </svg>
                  </div>
                  <div className="w-5/6">
                    <h3 className="text-lg font-semibold ">
                    Digital Transformation
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400">
                    Embrace the power of digitalization and leverage cutting-edge technologies to stay ahead of the competition.                    </p>
                  </div>
                </div>
               
              </div>
            </div>
          </div>
          <div className="my-20 md:my-32 ">
            <h3 className="text-2xl font-bold   md:w-2/3 md:text-3xl lg:text-4xl">
            Empowering Your Digital Journey
            </h3>
            <div className="text-black relative mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-gray-200 to-white p-px dark:from-gray-700 dark:via-gray-800 dark:to-darker">
                <div className="relative flex h-full flex-col gap-6 rounded-2xl bg-lime-200 p-8 ">
                  <img
                    className="w-10"
                    src="/images/security.webp"
                    alt="safety icon illustration"
                    height={512}
                    width={512}
                  />
                  <div>
                    <h4 className="text-xl font-semibold  ">Unlock Insights</h4>
                    <p className="mt-3  ">
                    Harness the power of data analytics to gain valuable insights and make informed decisions that drive business success.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-gray-200 to-white p-px dark:from-gray-700 dark:via-gray-800 dark:to-darker">
                <div className="relative flex h-full flex-col gap-6 rounded-2xl bg-lime-300 p-8 ">
                  <img
                    className="w-10"
                    src="/images/card.webp"
                    alt="payment card icon illustration"
                    height={512}
                    width={512}
                  />
                  <div>
                    <h4 className="text-xl font-semibold  ">Protect Your Assets</h4>
                    <p className="mt-3  ">
                    Ensure the security of your digital assets and safeguard against cyber threats with our robust cybersecurity solutions.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-gray-200 to-white p-px dark:from-gray-700 dark:via-gray-800 dark:to-darker">
                <div className="relative flex h-full flex-col gap-6 rounded-2xl bg-lime-400 p-8 ">
                  <img
                    className="w-10"
                    src="/images/xp.webp"
                    alt="xp icon illustration"
                    height={512}
                    width={512}
                  />
                  <div>
                    <h4 className="text-xl font-semibold  ">
                    Delight Your Users
                      </h4>
                    <p className="mt-3  ">
                    Create seamless and engaging user experiences that leave a lasting impression and drive customer satisfaction.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto flex flex-col items-center gap-6 sm:w-4/5 md:w-full md:flex-row lg:gap-12">
            <div className="relative md:w-1/2">
              <div
                aria-hidden="true"
                className="absolute inset-0 m-auto grid h-3/5 w-3/5 grid-cols-2 -space-x-52 opacity-40 dark:opacity-60"
              >
                <div className="h-full rounded-full bg-gradient-to-br from-primary to-purple-400 blur-[106px] dark:from-blue-700" />
                <div className="h-full bg-gradient-to-r from-cyan-400 to-primary blur-[106px] dark:to-indigo-600" />
              </div>
              <img
                className="relative dark:hidden"
                src="https://astrolus.tailus.io/images/illus-dark.webp"
                alt="stats illustration"
                width={1746}
                height={1746}
              />
              <img
                className="relative hidden dark:block"
                src="https://astrolus.tailus.io/images/illus-dark.webp"
                alt="stats illustration"
                width={1746}
                height={1746}
              />
            </div>
            <div className="ml-auto h-full md:w-1/2">
              <h3 className="text-2xl font-bold   md:text-3xl lg:text-4xl">
              Accelerate Your Business Growth
                            </h3>
              <p className="my-12  ">
              At Greathill, we're dedicated to helping businesses thrive in the digital age. Our comprehensive range of technology solutions and services empower organizations to achieve their goals, drive innovation, and accelerate business growth.  <br />
                <br />
                With our expert team, cutting-edge technologies, and customer-centric approach, we deliver results that exceed expectations.
              </p>
              <a
                href="/pages/register.html"
                className="relative flex h-11 w-max items-center justify-center px-5 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
                type="{type}"
              >
                <span className="relative w-max text-white">Get started</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <section className="mt-32">
        <div className="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
          <div className="text-center">
            <h2 className="text-3xl font-bold   md:text-4xl xl:text-5xl">
            Unlock Your Business Potential            </h2>
            <p className="mx-auto mt-6   md:w-3/4 lg:w-3/5">
            Ready to take your business to new heights? Let Greathill be your trusted partner on the journey to success. With our innovative technology solutions, strategic insights, and personalized approach, we empower businesses like yours to unlock their full potential. Contact us today and discover how we can help you achieve your goals.
            </p>
          </div>
          
        </div>
      </section>

      <section
        data-section-id={1}
        data-share=""
        data-category="content"
        data-component-id="fdca0d23_05_awz"
        className="relative py-24 2xl:pt-44 2xl:pb-52 bg-white overflow-hidden rounded-t-[10rem] bg-lime-300"
      >
        <div className="container px-4 mx-auto">
          <div className="mb-20 lg:mb-0 w-full lg:w-1/2">
            <div className="pb-14 xl:pb-20 mb-14 xl:mb-28 border-b border-gray-100">
              <h2
                className="font-heading font-medium text-7xl text-black md:text-10xl xl:text-11xl leading-tight"
                data-config-id="auto-txt-1-5"
              >
                Revolutionize Your <span className="text-green-700">Business </span>{' '}
                 
              </h2>
            </div>
            <span
              className="block mb-12 font-medium uppercase tracking-widest text-xs  leading-4"
              data-config-id="auto-txt-2-5"
            >
              Discover special offers
            </span>
            <h3
              className="mb-14 font-heading text-black font-medium text-3xl xl:text-5xl leading-snug max-w-2xl"
              data-config-id="auto-txt-3-5"
            >
            Embrace the Power of Innovation
            </h3>
            <p
              className="mb-14 xl:mb-36 text-lg text-black leading-10 text-darkBlueGray-400 max-w-md"
              data-config-id="auto-txt-4-5"
            >
              In today's rapidly evolving digital landscape, staying ahead of the competition requires embracing innovation. At Greathill, we help businesses revolutionize their operations, transform their customer experiences, and drive growth through cutting-edge technology solutions. With our expertise and forward-thinking approach, we enable you to embrace the power of innovation and unlock new opportunities for success.
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
