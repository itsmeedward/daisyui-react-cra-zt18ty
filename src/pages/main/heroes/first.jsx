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
          <div className="flex-row-reverse items-center justify-between space-y-12 text-gray-600 md:flex md:gap-6 lg:gap-12 lg:space-y-0">
            <div  className="relative ml-auto h-full md:w-1/2">
                <div id="animation-container" className=""
                ></div>
            </div>
            <div className="md:w-1/2 lg:w-[47%]">
              <h2 className="text-3xl font-bold   md:text-4xl lg:text-5xl">
                Just focus on your business startegy
              </h2>
              <p className="my-12  ">
                Nobis minus voluptatibus pariatur dignissimos libero quaerat
                iure expedita at? Asperiores nemo possimus nesciunt dicta veniam
                aspernatur quam mollitia. <br />
                <br />
                Vitae error, quaerat officia delectus voluptatibus explicabo quo
                pariatur impedit, at reprehenderit aliquam a ipsum quas
                voluptatem. Quo pariatur asperiores eum amet.
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
                    <h3 className="text-lg font-semibold text-gray-700 dark:text-white">
                      Chat Anytime
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Asperiores nemo possimus nesciunt quam mollitia.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 pt-4 md:items-center">
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
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>
                  </div>
                  <div className="w-5/6">
                    <h3 className="text-lg font-semibold text-gray-700 dark:text-white">
                      Real Time Location
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Asperiores nemo possimus nesciunt quam mollitia.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="my-20 md:my-32">
            <h3 className="text-2xl font-bold   md:w-2/3 md:text-3xl lg:text-4xl">
              Customize your customer experience, Go beyond with our top
              products
            </h3>
            <div className="relative mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-gray-200 to-white p-px dark:from-gray-700 dark:via-gray-800 dark:to-darker">
                <div className="relative flex h-full flex-col gap-6 rounded-2xl bg-gray-100 p-8 dark:bg-gray-900">
                  <img
                    className="w-10"
                    src="/images/security.webp"
                    alt="safety icon illustration"
                    height={512}
                    width={512}
                  />
                  <div>
                    <h4 className="text-xl font-semibold  ">Safelus</h4>
                    <p className="mt-3  ">
                      Dolorem aliquid officiis quae ipsum nobis libero alias
                      Iure nobis dicta.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-gray-200 to-white p-px dark:from-gray-700 dark:via-gray-800 dark:to-darker">
                <div className="relative flex h-full flex-col gap-6 rounded-2xl bg-gray-100 p-8 dark:bg-gray-900">
                  <img
                    className="w-10"
                    src="/images/card.webp"
                    alt="payment card icon illustration"
                    height={512}
                    width={512}
                  />
                  <div>
                    <h4 className="text-xl font-semibold  ">Paylus</h4>
                    <p className="mt-3  ">
                      Dolorem aliquid officiis quae ipsum nobis libero alias
                      Iure nobis dicta.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-gray-200 to-white p-px dark:from-gray-700 dark:via-gray-800 dark:to-darker">
                <div className="relative flex h-full flex-col gap-6 rounded-2xl bg-gray-100 p-8 dark:bg-gray-900">
                  <img
                    className="w-10"
                    src="/images/xp.webp"
                    alt="xp icon illustration"
                    height={512}
                    width={512}
                  />
                  <div>
                    <h4 className="text-xl font-semibold  ">
                      TL Certification
                    </h4>
                    <p className="mt-3  ">
                      Dolorem aliquid officiis quae ipsum nobis libero alias
                      Iure nobis dicta.
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
                Go beyond with our top products
              </h3>
              <p className="my-12  ">
                Nobis minus voluptatibus pariatur dignissimos libero quaerat ?
                Asperiores nemo possimus nesciunt dicta veniam aspernatur quam
                mollitia. <br />
                <br />
                Vitae error, quaerat officia delectus voluptatibus explicabo quo
                pariatur impedit, at reprehenderit aliquam a ipsum quas
                voluptatem. Quo pariatur asperiores eum amet.
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
              For growing teams and organizations
            </h2>
            <p className="mx-auto mt-6   md:w-3/4 lg:w-3/5">
              A growing team doesn't need to mean growing pains. Privacy, and
              the right tool for every step of your journey - Jira Software
              friction - company size.
            </p>
          </div>
          <div className="mt-20">
            <div className="gap-6 space-y-12 md:flex md:space-y-0">
              <div className="relative md:w-1/2">
                <div
                  className="panel inset-0 flex flex-col justify-center transition duration-500 md:absolute invisible opacity-0 scale-90"
                  id="panel-0"
                >
                  <div>
                    <h3 className="text-2xl font-bold   md:text-3xl">
                      Make work flow across teams while connecting back to
                      company goals
                    </h3>
                    <p className="mt-8  ">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Eum omnis voluptatem accusantium nemo perspiciatis
                      delectus atque autem! repellat expedita consequatur!
                      Officiis id consequatur atque doloremque!
                    </p>
                    <div className="mt-12 space-y-6">
                      <div className="flex items-center gap-6">
                        <div className="flex h-20 w-20 rounded-3xl border border-gray-200 bg-white p-4 dark:border-gray-600/60 dark:bg-gray-900/40">
                          <img
                            className="m-auto h-8 w-auto"
                            src="https://cdn-icons-png.flaticon.com/512/4727/4727266.png"
                            alt="icon illustration"
                            loading="lazy"
                            width={512}
                            height={512}
                          />
                        </div>
                        <div className="w-[calc(100%-7.5rem)]">
                          <h4 className="text-lg font-semibold  ">
                            Together as one
                          </h4>
                          <p className="mt-1  ">
                            Accusantium nemo perspiciatis delectus atque autem!
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-6">
                        <div className="flex h-20 w-20 rounded-3xl border border-gray-200 bg-white p-4 dark:border-gray-600/60 dark:bg-gray-900/40">
                          <img
                            className="m-auto h-8 w-auto"
                            src="https://cdn-icons-png.flaticon.com/512/584/584796.png"
                            alt="icon illustration"
                            loading="lazy"
                            width={512}
                            height={512}
                          />
                        </div>
                        <div className="w-[calc(100%-7.5rem)]">
                          <h4 className="text-lg font-semibold  ">New ideas</h4>
                          <p className="mt-1  ">
                            Accusalectus atque autem accusantium nemo
                            perspiciatis delectus atque autem!
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="panel absolute inset-0 flex flex-col justify-center transition duration-500 visible opacity-100 scale-100"
                  id="panel-1"
                >
                  <div>
                    <h3 className="text-2xl font-bold   md:text-3xl">
                      Make work flow across teams while connecting back to
                      company goals
                    </h3>
                    <p className="mt-8  ">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Eum omnis voluptatem accusantium nemo perspiciatis
                      delectus atque autem! repellat expedita consequatur!
                      Officiis id consequatur atque doloremque!
                    </p>
                    <div className="mt-12 space-y-6">
                      <div className="flex items-center gap-6">
                        <div className="flex h-20 w-20 rounded-3xl border border-gray-200 bg-white p-4 dark:border-gray-600/60 dark:bg-gray-900/40">
                          <img
                            className="m-auto h-8 w-auto"
                            src="https://cdn-icons-png.flaticon.com/512/6106/6106288.png"
                            alt="icon illustration"
                            loading="lazy"
                            width={512}
                            height={512}
                          />
                        </div>
                        <div className="w-[calc(100%-7.5rem)]">
                          <h4 className="text-lg font-semibold  ">
                            Together as one
                          </h4>
                          <p className="mt-1  ">
                            Accusantium nemo perspiciatis delectus atque autem!
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-6">
                        <div className="flex h-20 w-20 rounded-3xl border border-gray-200 bg-white p-4 dark:border-gray-600/60 dark:bg-gray-900/40">
                          <img
                            className="m-auto h-8 w-auto"
                            src="https://cdn-icons-png.flaticon.com/512/2313/2313906.png"
                            alt="icon illustration"
                            loading="lazy"
                            width={512}
                            height={512}
                          />
                        </div>
                        <div className="w-[calc(100%-7.5rem)]">
                          <h4 className="text-lg font-semibold  ">New ideas</h4>
                          <p className="mt-1  ">
                            Accusalectus atque autem accusantium nemo
                            perspiciatis delectus atque autem!
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="panel absolute inset-0 flex flex-col justify-center transition duration-500 invisible opacity-0 scale-90"
                  id="panel-2"
                >
                  <div>
                    <h3 className="text-2xl font-bold   md:text-3xl">
                      Make work flow across teams while connecting back to
                      company goals
                    </h3>
                    <p className="mt-8  ">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Eum omnis voluptatem accusantium nemo perspiciatis
                      delectus atque autem! repellat expedita consequatur!
                      Officiis id consequatur atque doloremque!
                    </p>
                    <div className="mt-12 space-y-6">
                      <div className="flex items-center gap-6">
                        <div className="flex h-20 w-20 rounded-3xl border border-gray-200 bg-white p-4 dark:border-gray-600/60 dark:bg-gray-900/40">
                          <img
                            className="m-auto h-8 w-auto"
                            src="https://cdn-icons-png.flaticon.com/512/3340/3340200.png"
                            alt="icon illustration"
                            loading="lazy"
                            width={512}
                            height={512}
                          />
                        </div>
                        <div className="w-[calc(100%-7.5rem)]">
                          <h4 className="text-lg font-semibold  ">
                            Together as one
                          </h4>
                          <p className="mt-1  ">
                            Accusantium nemo perspiciatis delectus atque autem!
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-6">
                        <div className="flex h-20 w-20 rounded-3xl border border-gray-200 bg-white p-4 dark:border-gray-600/60 dark:bg-gray-900/40">
                          <img
                            className="m-auto h-8 w-auto"
                            src="https://cdn-icons-png.flaticon.com/512/5405/5405929.png"
                            alt="icon illustration"
                            loading="lazy"
                            width={512}
                            height={512}
                          />
                        </div>
                        <div className="w-[calc(100%-7.5rem)]">
                          <h4 className="text-lg font-semibold  ">Growth</h4>
                          <p className="mt-1  ">
                            Accusalectus atque autem accusantium nemo
                            perspiciatis delectus atque autem!
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="-m-4 overflow-hidden p-4 sm:-mx-12 sm:px-12 md:mx-0 md:w-1/2 md:overflow-visible md:px-0">
                <div className="relative bg-gray-100 before:absolute before:inset-0 before:scale-x-110 before:border-y before:border-gray-200 after:absolute after:inset-0 after:scale-y-110 after:border-x after:border-gray-200 dark:bg-gray-800 dark:before:border-gray-700 dark:after:border-gray-700">
                  <div className="relative h-96 overflow-clip py-10 sm:h-[32rem] lg:p-20">
                    <div
                      data-target="panel-0"
                      className="panel-preview absolute inset-0 z-0 flex translate-y-[100%] scale-75 items-end overflow-hidden px-6 opacity-50 transition duration-500 sm:px-10"
                    >
                      <img
                        src="./images/screenshots/tailus-home.webp"
                        className="mx-auto h-80 w-96 rounded-t-3xl border object-cover object-top shadow-2xl dark:border-transparent sm:h-[28rem]"
                        alt="tailus screenshot"
                        width={850}
                        height={1780}
                      />
                    </div>
                    <div
                      data-target="panel-1"
                      className="panel-preview absolute inset-0 z-10 flex translate-y-0 scale-100 items-end overflow-hidden px-6 opacity-100 transition duration-500 sm:px-10"
                    >
                      <img
                        src="./images/screenshots/tailus-home-dark.webp"
                        className="mx-auto h-80 w-96 rounded-t-3xl border object-cover object-top shadow-2xl dark:border-transparent sm:h-[28rem]"
                        alt="tailus screenshot dark-mode"
                        width={850}
                        height={1780}
                      />
                    </div>
                    <div
                      data-target="panel-2"
                      className="panel-preview absolute inset-0 z-0 flex translate-y-[100%] scale-75 items-end overflow-hidden px-6 opacity-50 transition duration-500 sm:px-10"
                    >
                      <img
                        src="./images/screenshots/tailus-contact.webp"
                        className="mx-auto h-80 w-96 rounded-t-3xl border object-cover object-top shadow-2xl dark:border-transparent sm:h-[28rem]"
                        alt="tailus contact screenshot"
                        width={850}
                        height={1780}
                      />
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
                Catch the <span className="text-green-700">Software </span>{' '}
                Revuliton Here
              </h2>
            </div>
            <span
              className="block mb-12 font-medium uppercase tracking-widest text-xs text-white leading-4"
              data-config-id="auto-txt-2-5"
            >
              Discover special tools
            </span>
            <h3
              className="mb-14 font-heading text-black font-medium text-3xl xl:text-5xl leading-snug max-w-2xl"
              data-config-id="auto-txt-3-5"
            >
              A spatial system is a set of rules for how you measure and size
              your UI elements.
            </h3>
            <p
              className="mb-14 xl:mb-36 text-lg text-black leading-10 text-darkBlueGray-400 max-w-md"
              data-config-id="auto-txt-4-5"
            >
              Proin nec nibh vel odio dapibus molestie eu id ipsum. Fusce
              sodales vitae lorem vitae tempus. Etiam nisi ligula, placerat at
              congue et, vehicula quis ex.
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
