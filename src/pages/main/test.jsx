import React, { useState } from 'react';

const Test = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const handleClick = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <>
    <div>
      <button onClick={handleClick}>Toggle Menu</button>
      {isMenuVisible && (
        <ul>
          <li>Menu Item 1</li>
          <li>Menu Item 2</li>
          <li>Menu Item 3</li>
        </ul>
      )}
    </div>
    <section className="pt-32 sm:pt-40 md:pt-48">
  <div className="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
    <div className="relative">
      <h1 className="text-center text-5xl font-bold text-blue-900 e sm:text-6xl lg:text-left lg:text-7xl">
        Design, Build,
        <span className="relative">
          <svg
            className="absolute inset-x-0 -bottom-1 w-full opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            id="Layer_1"
            viewBox="0 0 260 15.6"
          >
            <style
              dangerouslySetInnerHTML={{
                __html:
                  "\n                                    .st0 {\n    fill: #957fef\n}\n                                "
              }}
            />
            <path
              className="st0"
              d="M206.8 7.3l-.1.3c.1-.2.2-.3.1-.3zM234.7 10h-.1c-.2.4-.1.3.1 0zM54.8 4.2l-.6-.4c.2.4.4.5.6.4zM17.1 5.1zM34.5 9.6l.1.3c0-.2 0-.3-.1-.3zM22.4 10.8c-.3-.1-.7-.1-1-.1.2.1.7.1 1 .1zM17.5 5c-.1.1-.2.1-.4.2.2-.1.3-.2.4-.2zM52.7 9.8l.5.9c-.1-.3-.3-.6-.5-.9zM19.5 11.6c-.2-.2-.4-.2-.6-.3 0 .2.3.3.6.3zM120.9 11.4c-.1.1-.2.2-.2.3.3-.1.3-.2.2-.3zM80.9 10.4h-.1s.1.1.2.1l-.1-.1zM92.6 10.4l-.2.2c.2-.1.2-.1.2-.2zM72.1 11.3c-.1.1-.3.2-.4.3l.4-.3z"
            />
            <path
              className="st0"
              d="M260 6c-1-.6-4.7-1.2-5.8.3-.2-.1.1-.3.2-.4-.9.2-2.2.1-3.6 0s-2.9-.2-4.2 0c-1 1.5-3.9-.6-4.8 1.4l.5-.4c.9.5-1.2 1.4-1.5 1.9-.8-1.2-.1-1-1-2l1.1.4-.3-1c-3.1 2.8-6.2-.9-8.2 1.1.1-.1.1-.3.2-.4-1.4-.5-2.3.8-3.3 1.2-.1-.5.6-.9 1.1-1.3-2.4-.3-6.4 1.2-9 .4-.9.7.4.9-.6 1.5-.8-.2-1.4-.7-.4-1.1-2.3-1.2-7.6 1-11.1-.2-1.8.8-.7 1.1-3.5 1.6.7-.5-.7-1.7 1-1.7l.2-.5c-2.8-.1-6.6-.3-8.1 1.2-.1-1.1-.5-.2-1.6-.8-.4.1 0 .2.2.2-1 .9-1.6-.1-2.3.1l.3-.2-2 .7c-.3-.2-.8-.4-.9-.7v.8c-1.1 0-.5-1-1.9-.8l.3.6c-.9-.4-2.2.4-2.4-.5 0-.2.1-.1.4-.1-1.3-1.2-3.5.3-5.1-.3l.4 1.3c-1.6.4-1-.3-.9-.7-1.1 0-1.3-.4-2.7-.6-.7.3-.4.5-.6.8l-1.5-.4 1-.7c-2.3 1.8-5.6-.4-7.2 1.2-.8-.4.8-.7.3-1-2.6-.9-6 1-8.2 0-3.6-1-7.8-.4-11.8-1.1l.1.3-2.9-.4c-.8.7-2.7.3-4 1.1.1-.3-.1-.7.2-.9-1.2.1-2.6.4-3.3-.1l.4-.3c-2.7-.3-6.4-.5-7.9.1-.9 0-.9-.6-1.1-1-1.6-.1-2.6.2-3.9.7-.3-.2-.7-.3-1-.6l-.6.8c-.6-.1-.1-.7-.6-.9-2.5.9-5.3-.1-7-.1l.2.4c-.7.3-2.1-.3-1.2-.7-3.4-.6-5.1 1.2-9.6.8-.6-1.5-4.1.3-4.8-1.4-1.9.4-3.2-.3-4.5.6 0-.2-.2-.2.1-.3-.8-.6-3.3-.2-5.3.2l-.1-.5c-.9 1.2-4.2.9-4.9 2-.2-.2.4-.5.7-.7-1-1.1-1.8.5-3.1.2.1-.3-.3-.6 0-.8-4.4-1.2-10.6.7-16.3-.1-1.6 0 .6 1.2-1.5 1.1-.6-.6 1-1.1-.3-1.4-.9.7-1.3.5-2.6.5.2-.4 0-.6.9-.9-.7-.5-3.1.9-4.5 0 .1.3-.2.5-.5.7-2.1 1-4.9-.9-5.1-.4 0 0-.7.2-.1.3-.8 0-1.9-.2-1.7-.7-.4.3-.8.8-1.4.8l.3-.6c-.4.1-.8.5-1.1.6l.6.4c-.9-.5-2.6.8-2.6-.4h.3l-1.7-.5c-.7.5-1.3 1-2.5.9-.5-1.3-2.9-.2-4.3-.3l.1-.4c-1.1.6-4 .4-3.5.6-1.1 0-2.6-.2-2-.6-.8.1-2.7.1-3.2.9l-1.8-1c-1 1.6-3.6-.5-3.6 1.2-1-.2-.8-.6-1.5-.9-1.4.9-2.8.8-4.2.7v-.2c-1.4-.1-3.1.8-5.1 1l-.5-1.2c-1 .2-1.3 1.2-2.3 1-.2-.2 0-.3.2-.3-1 .3-2.3.1-3.1-.2-1.5 1-2.7.7-3.9 1.8-1.3-1 1.7-.6.6-1.6-2.2-.4-4.4.4-6.7 1.1-.2-.2 0-.4.1-.7 0 0-1.2.9-2.2 1.8C.9 8.3 0 9.4.5 10c-.5.9-1.2 1.4.9 2 .6-.5 2.5-1.3 2.9-.4l.1-.9c2.6-.6.4 1.8 3.6 1.6l-.7-.3c.6-.1 1.1-.7 1.8-.5.2.2-.2.4-.5.6.9-.5 1.7-.9 2.6-1.4.1.5.1.8-.4 1.2 2.5-.2-.6-1.6 2.4-1.4.6.4-.2.6-.5.9 1.4.7 2.3-.1 3.8-.6.1.8-.9.7.3 1.2-.3-.4-.5-1.1.5-1.2-.4.8.7.4 1.6.5-.2-.3-.1-.6.2-.8.4-.1.8.1 1.4.1l-1.1-.7c1.5-.8 2.4.3 3.6.6-.1.1-.3.3-.5.3 1.2.3 2.5.9 4.1.1l-.3.1c2.9-.9-1-1.3 2.4-2.2 1.1.1-.4 2.6 2.1 1.6-1.3-.6 1.6-1.7 3.1-2L32.4 10c.6 0 1.6-.5 2-.3l-.1-.3c-.2-1.3 1.9.1 3-.7-1.3 1.8-1.4 1.5-1.6 3.2 1-1 2.2-1.9 4.1-1.8l-1.5 1.4c2.5.2 5.5-1.9 7.6-3-.5 1 .3 1.4-.6 2.2l2.4-.3-.7 1.1c1-1.2 2.1-.4 1.9-1.9-.3.2-.2.4-.7.3.1-.4.5-1.4 1.7-1.3.9.3-.5.6-.2 1 .8-.6.9.3 1.7-.1l-.8-.6c.6-.9 1.4-.1 2.2-.5-1 .4-.7.9-.3 1.4l-.1-.1c.8-.1 1.6-.7 2-.2l-.5 1.2.9-.9c.3.1.6.6 0 .8 2.8.7-.1-2.5 3.6-1.5 0 .5-.4.8-1.4.5-.2.7.1 1.1 1.1 1.4v.1c1.9 0 4.4 0 5.6-.8.4.3 0 .6-.4.9 2.1.4 2.8-.7 5 .1l-1-.4c1.4-.6 4-.8 5.3.1l-.4.3c1.3-.7 3.5.6 4 0-.6-.4 0-.6-.8-1l3.4-.7.2 1.2 1.8-.4c-.4-.5 2.4.4 2.5-.7 1 .4-.4.9-.8 1.4 1-.3 1.1.2 2.1-.5l1 1.1 2.6-.7c-.1.1 0 .2-.1.3 1.2-.9 3.1.6 4.6-.9-.1.1-.1.1-.1.2.9-.8 2.9-.2 3.7 0 1.4-.2.6-1 .6-1.4 3.9.4 2.7.3 6-.9 2 1.4-2.4 2.1.1 3 .4-.6 2.1-1.1 4.1-1.3 1.8.5 4.8.9 6.5 1.9l-.2-.9 2.6-.4-1.5 1.2c.4-.3 1.7-.8 2.6-1.2 2.7-.7 1.4 1.9 3.5.7.1.1.1.2.2.3.7-.6 2.4-.3 4.4-.5l-.7 1.1-1.3-.3c.7 1.1 2.1-.1 3.4 0 1.3-.3.7-1.3 1.4-1.6.5.1 1.2-.2 1.6.1 1.1.4.1 1.3-.3 1.8 1-1.1 1.4-.9 3.6-1.3.1.5-.1.8-.4.9.5-.1.9-.3 1.2-.8l.7.7c2.5 1 2.6-2 5.6-1.5-.8.6 2.6 0 3.5.7-1.1.1.4 1.6-.2 2.3 2.4.5 1-1.3 3-1.4l-.9 1.3c1.9-.5.5-.7 2.4-1.1-.5.4.8.4-.3.8 2.5.2 1.9.1 4.1.3l.2-1.3c.7-.1 1 .5 1.2.7-.3 0-.8-.1-.7.1.8 1.2 1.4-.6 2.4.5-.2-.4-.5-1 .4-1.1-.3.8 1.4.8 1.4 1.2-.6-.6 2-.2 2.1-1 1 .7-.4.6-.4 1.1.9-1 3.7 0 4.6-.6 0 .1.1.1.1.2 1.2-.6 3-.7 5.3-1.5l-.8.7c2.2.4 1.4-1.5 3.3-1.5-.4 1.1 3.1 0 2.2 1.2 1.1-.6 2.3-.8 3.1-1.7 1 .6-2.1 1.4-.6 1.8l1.6-.5.3.6c.1-.4 1.5-.4 1.4-.8.2.7.9 1.2.8 1.8 1-.2 2.4.5 3.3-.1l.1.3c1-1.3 3.1-.2 3.6-1.5l.6.7c1.5-.1 1.3-1.5 2-1.8.6 0 1.4-.2 2 0-2 .8 1 1.1 1.4 1.6.8 0 3.1 0 3.7-.7-1 .7-.4 1.2-2.1 1.3.9 1.3 2.6-.2 4.5-.1v.6c2.7-.4 2.8-1.5 4-2.5.3.8.1 1-.7 1.7 1.8.5 4.7-.1 6.7 0 .6.5.2.9-.5 1.1 2.1-.6 4.7.1 6-1.2-.5.5.9.3 1.6.6 0-.3.1-.6.2-.6 1.3-.6 4.1-1.1 5.6-.7l-.5.4c1.7.1 3-.5 4.3-.9 1.3-.4 2.6-.8 4.5-.4.7.3-.7 1.1.7 1 .7-.5.4-1.5 2.2-1.3l-.1.9 1.2-.9c-.7-.7-2.6-.4-1.3-1.2 1.6.8 1.3-.9 3.3 0-.4.1-1 .8-1.3 1.2 2 .4 3.4.1 4.8-.1 1.4-.3 2.8-.6 4.9-.2 2-.8 4.6-1.2 5.9-1.9 0 .9 0 1.7-.8 2.4 1.8 0 2.4-2.1 3.7-.9.7-1.3 4.7-1.2 5-3l2-.8z"
            />
            <path
              className="st0"
              d="M58.1 11.1c-1 0-1.9 0-2.3.2.2.2 2.3.6 2.3-.2zM208.2 13.3c-.1 0-.3.1-.4.1.1 0 .3 0 .4-.1zM216.3 12.9c-.1-.1-.2-.2-.4-.3 0 .3.1.5.4.3zM132.6 11.5zM178.5 13.7c.7-.4 1-.7 1-1-.4.1-.7.3-1 1zM163 12.6c-.1.1-.2.1-.3.2.3-.1.3-.2.3-.2zM130.2 12c.7-.4 1.6-.3 2.4-.5-.7.2-1.9-.3-2.4.5zM226.1 11.4l-.7.6.8-.4zM218.6 12c-.3-.1-1.7.3-1.3.6.4-.3.9-.5 1.3-.6zM189.6 11.4l-.3.6.7-.5z"
            />
          </svg>
          <span className="relative bg-gradient-to-r from-primary to-secondaryLight bg-clip-text text-transparent dark:from-primaryLight dark:to-secondaryLight md:px-2">
            Scale
          </span>
        </span>
      </h1>
      <div className="relative items-center gap-12 lg:flex">
        <div className="text-center sm:mx-auto sm:w-11/12 md:mt-12 md:w-4/5 lg:mt-0 lg:mr-auto lg:w-6/12 lg:text-left">
          <p className="mt-12 text-lg   sm:text-xl">
            Computers used to be magical. But much of that magic has been lost
            over time, replaced by subpar tools and practices that slow teams
            down and hold great work back.
          </p>
          <form action="" className="mt-12">
            <div className="relative flex items-center rounded-full border border-primary/20 bg-white p-1 px-2 shadow-md focus-within:ring-2 dark:border-white/10 dark:bg-dark dark:text-white md:p-2 lg:pr-3">
              <div className="py-3 pl-4 lg:pl-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="m-auto h-6 w-6 fill-gray-500 dark:fill-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <input
                aria-label="your email"
                autoComplete="email"
                placeholder="Your mail address"
                className="w-full rounded-full bg-transparent p-4 placeholder-gray-600 outline-none dark:placeholder-white"
                type="email"
              />
              <div className="md:pr-1.5 lg:pr-0">
                <button
                  type="submit"
                  title="Start buying"
                  className="relative ml-auto h-12 w-16 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 active:duration-75 active:before:scale-95 dark:before:bg-primaryLight sm:w-auto sm:px-6"
                >
                  <span className="relative hidden w-max font-semibold text-white dark:text-gray-900 md:block">
                    {" "}
                    Get Started{" "}
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="relative mx-auto h-6 w-6 text-white dark:text-gray-900 md:hidden"
                  >
                    <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
                  </svg>
                </button>
              </div>
            </div>
          </form>
          <div className="mt-12 hidden lg:block">
            <span className="text-gray-700 dark:text-white">
              From the most talented{" "}
              <a
                href="customers.html"
                className="text-primary underline dark:text-primaryLight"
              >
                Team
              </a>{" "}
              !
            </span>
            <div className="mt-5 flex -space-x-1 children:h-10 children:w-10 children:rounded-full children:object-cover children:ring-4 children:ring-gray-100 dark:children:ring-gray-900">
              <img
                src="./images/avatars/avatar.webp"
                alt="user avatar"
                width={400}
                height={400}
              />
              <img
                src="./images/avatars/avatar-1.webp"
                alt="user avatar"
                width={200}
                height={200}
              />
              <img
                src="./images/avatars/avatar-2.webp"
                alt="user avatar"
                width={200}
                height={200}
              />
              <img
                src="./images/avatars/avatar-3.webp"
                alt="user avatar"
                width={200}
                height={200}
              />
              <img
                src="./images/avatars/avatar-4.webp"
                alt="user avatar"
                width={200}
                height={200}
              />
            </div>
          </div>
        </div>
        <div className="mt-12 w-full overflow-hidden sm:mt-20 lg:-mt-8 lg:w-6/12">
          <img
            className="w-full"
            src="https://ampire.tailus.io/images/team.svg"
            alt="team illustration"
            height={600}
            width={800}
          />
        </div>
      </div>
      <div className="mt-12 border-y border-gray-100 py-8 text-center dark:border-gray-800 md:py-12 xl:mt-20">
        <a
          href="customers.html"
          className="text-sm font-semibold tracking-wider  "
        >
          TRUSTED BY YOUR FAVORED TOP TECHS COMPANIES
        </a>
        <div className="mt-8 flex flex-wrap justify-center gap-6 brightness-75 contrast-200 grayscale dark:brightness-200 dark:contrast-0 sm:justify-between lg:gap-24">
          <img
            className="h-8 w-auto lg:h-10 lg:w-auto"
            src="images/clients/airbnb.svg"
            loading="lazy"
            alt="airbnb"
            width=""
            height=""
          />
          <img
            className="h-8 w-auto lg:h-10 lg:w-auto"
            src="images/clients/coty.svg"
            loading="lazy"
            alt="bissell"
            width=""
            height=""
          />
          <img
            className="h-8 w-auto lg:h-10 lg:w-auto"
            src="images/clients/ge.svg"
            loading="lazy"
            alt="ge"
            width={100}
            height={100}
          />
          <img
            className="h-8 w-auto lg:h-10 lg:w-auto"
            src="images/clients/lilly.png"
            loading="lazy"
            alt="lilly"
            width=""
            height=""
          />
          <img
            className="h-8 w-auto lg:h-10 lg:w-auto"
            src="https://ampire.tailus.io/images/team.svg"
            loading="lazy"
            alt="microsoft"
            width=""
            height=""
          />
        </div>
      </div>
    </div>
  </div>
</section>


<div className="pt-32 md:pt-44" id="solution">
  <div className="mx-auto max-w-6xl px-6 md:px-12 lg:px-6 xl:px-0">
    <div className="flex-row-reverse items-center justify-between space-y-12 text-gray-600 md:flex md:gap-6 lg:gap-12 lg:space-y-0">
      <div className="relative ml-auto h-full md:w-1/2">
        <img
          className="dark:hidden"
          src="/images/milestone.webp"
          alt="app milestone"
          width={1174}
          height={1134}
        />
        <img
          className="hidden dark:block"
          src="/images/milestone-dark.webp"
          alt="app milestone"
          width={1174}
          height={1134}
        />
      </div>
      <div className="md:w-1/2 lg:w-[47%]">
        <h2 className="text-3xl font-bold   md:text-4xl lg:text-5xl">
          Just focus on your business startegy
        </h2>
        <p className="my-12  ">
          Nobis minus voluptatibus pariatur dignissimos libero quaerat iure
          expedita at? Asperiores nemo possimus nesciunt dicta veniam aspernatur
          quam mollitia. <br />
          <br />
          Vitae error, quaerat officia delectus voluptatibus explicabo quo
          pariatur impedit, at reprehenderit aliquam a ipsum quas voluptatem.
          Quo pariatur asperiores eum amet.
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
        Customize your customer experience, Go beyond with our top products
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
              <h4 className="text-xl font-semibold  ">
                Safelus
              </h4>
              <p className="mt-3  ">
                Dolorem aliquid officiis quae ipsum nobis libero alias Iure
                nobis dicta.
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
              <h4 className="text-xl font-semibold  ">
                Paylus
              </h4>
              <p className="mt-3  ">
                Dolorem aliquid officiis quae ipsum nobis libero alias Iure
                nobis dicta.
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
                Dolorem aliquid officiis quae ipsum nobis libero alias Iure
                nobis dicta.
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
          pariatur impedit, at reprehenderit aliquam a ipsum quas voluptatem.
          Quo pariatur asperiores eum amet.
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
        A growing team doesn't need to mean growing pains. Privacy, and the
        right tool for every step of your journey - Jira Software friction -
        company size.
      </p>
      <div
        role="tablist"
        aria-label="tabs"
        className="relative mx-auto mt-12 grid h-12 w-auto grid-cols-3 items-center gap-x-1 overflow-hidden rounded-full border border-gray-200 bg-gray-100 px-[3px] text-gray-600 dark:border-gray-700 dark:border-opacity-60 dark:bg-darker dark:text-gray-300 dark:shadow-none sm:w-max"
      >
        <div
          className="tab-indicator absolute h-10 rounded-full bg-white shadow-md transition-[left] duration-500 dark:bg-gray-800"
          style={{ left: "121.513px", width: "113.713px" }}
        />
        <button
          role="tab"
          aria-selected="true"
          aria-controls="panel-0"
          tabIndex={0}
          title="tab item"
          className="tab relative block rounded-full py-2.5 px-4 hover:text-primary dark:hover:text-primaryLight"
        >
          <span className="m-auto block w-max text-sm font-medium tracking-wider">
            First Tab
          </span>
        </button>
        <button
          role="tab"
          aria-selected="false"
          aria-controls="panel-1"
          tabIndex={-1}
          title="tab item"
          className="tab relative block rounded-full py-2.5 px-4 hover:text-primary dark:hover:text-primaryLight"
        >
          <span className="m-auto block w-max text-sm font-medium tracking-wider">
            Second Tab
          </span>
        </button>
        <button
          role="tab"
          aria-selected="false"
          aria-controls="panel-2"
          tabIndex={-1}
          title="tab item"
          className="tab relative block rounded-full py-2.5 px-4 hover:text-primary dark:hover:text-primaryLight"
        >
          <span className="m-auto block w-max text-sm font-medium tracking-wider">
            Third Tab
          </span>
        </button>
      </div>
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
                Make work flow across teams while connecting back to company
                goals
              </h3>
              <p className="mt-8  ">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
                omnis voluptatem accusantium nemo perspiciatis delectus atque
                autem! repellat expedita consequatur! Officiis id consequatur
                atque doloremque!
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
                    <h4 className="text-lg font-semibold  ">
                      New ideas
                    </h4>
                    <p className="mt-1  ">
                      Accusalectus atque autem accusantium nemo perspiciatis
                      delectus atque autem!
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
                Make work flow across teams while connecting back to company
                goals
              </h3>
              <p className="mt-8  ">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
                omnis voluptatem accusantium nemo perspiciatis delectus atque
                autem! repellat expedita consequatur! Officiis id consequatur
                atque doloremque!
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
                    <h4 className="text-lg font-semibold  ">
                      New ideas
                    </h4>
                    <p className="mt-1  ">
                      Accusalectus atque autem accusantium nemo perspiciatis
                      delectus atque autem!
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
                Make work flow across teams while connecting back to company
                goals
              </h3>
              <p className="mt-8  ">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
                omnis voluptatem accusantium nemo perspiciatis delectus atque
                autem! repellat expedita consequatur! Officiis id consequatur
                atque doloremque!
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
                    <h4 className="text-lg font-semibold  ">
                      Growth
                    </h4>
                    <p className="mt-1  ">
                      Accusalectus atque autem accusantium nemo perspiciatis
                      delectus atque autem!
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



<section className="relative">
  <div
    aria-hidden="true"
    className="absolute inset-0 top-56 grid grid-cols-2 -space-x-52 opacity-50 dark:opacity-30"
  >
    <div className="h-56 bg-gradient-to-br from-primary to-purple-400 blur-[106px] dark:from-blue-700" />
    <div className="h-32 bg-gradient-to-r from-cyan-400 to-sky-300 blur-[106px] dark:to-indigo-600" />
  </div>
  <div className="mx-auto px-4 pt-32 sm:px-12 sm:pt-40 md:pt-48 lg:pt-56 xl:max-w-6xl xl:px-0">
    <div className="relative z-10">
      <div className="flex flex-col">
        <h1 className="text-center text-5xl font-bold text-blue-900 dark:text-white sm:text-6xl md:text-left lg:text-7xl">
          Design, Build,
          <span className="relative">
            <svg
              className="absolute inset-x-0 -bottom-1 w-full opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              id="Layer_1"
              viewBox="0 0 260 15.6"
            >
              <style
                dangerouslySetInnerHTML={{
                  __html:
                    "\n                                        .st0 {\n    fill: #957fef\n}\n                                    "
                }}
              />
              <path
                className="st0"
                d="M206.8 7.3l-.1.3c.1-.2.2-.3.1-.3zM234.7 10h-.1c-.2.4-.1.3.1 0zM54.8 4.2l-.6-.4c.2.4.4.5.6.4zM17.1 5.1zM34.5 9.6l.1.3c0-.2 0-.3-.1-.3zM22.4 10.8c-.3-.1-.7-.1-1-.1.2.1.7.1 1 .1zM17.5 5c-.1.1-.2.1-.4.2.2-.1.3-.2.4-.2zM52.7 9.8l.5.9c-.1-.3-.3-.6-.5-.9zM19.5 11.6c-.2-.2-.4-.2-.6-.3 0 .2.3.3.6.3zM120.9 11.4c-.1.1-.2.2-.2.3.3-.1.3-.2.2-.3zM80.9 10.4h-.1s.1.1.2.1l-.1-.1zM92.6 10.4l-.2.2c.2-.1.2-.1.2-.2zM72.1 11.3c-.1.1-.3.2-.4.3l.4-.3z"
              />
              <path
                className="st0"
                d="M260 6c-1-.6-4.7-1.2-5.8.3-.2-.1.1-.3.2-.4-.9.2-2.2.1-3.6 0s-2.9-.2-4.2 0c-1 1.5-3.9-.6-4.8 1.4l.5-.4c.9.5-1.2 1.4-1.5 1.9-.8-1.2-.1-1-1-2l1.1.4-.3-1c-3.1 2.8-6.2-.9-8.2 1.1.1-.1.1-.3.2-.4-1.4-.5-2.3.8-3.3 1.2-.1-.5.6-.9 1.1-1.3-2.4-.3-6.4 1.2-9 .4-.9.7.4.9-.6 1.5-.8-.2-1.4-.7-.4-1.1-2.3-1.2-7.6 1-11.1-.2-1.8.8-.7 1.1-3.5 1.6.7-.5-.7-1.7 1-1.7l.2-.5c-2.8-.1-6.6-.3-8.1 1.2-.1-1.1-.5-.2-1.6-.8-.4.1 0 .2.2.2-1 .9-1.6-.1-2.3.1l.3-.2-2 .7c-.3-.2-.8-.4-.9-.7v.8c-1.1 0-.5-1-1.9-.8l.3.6c-.9-.4-2.2.4-2.4-.5 0-.2.1-.1.4-.1-1.3-1.2-3.5.3-5.1-.3l.4 1.3c-1.6.4-1-.3-.9-.7-1.1 0-1.3-.4-2.7-.6-.7.3-.4.5-.6.8l-1.5-.4 1-.7c-2.3 1.8-5.6-.4-7.2 1.2-.8-.4.8-.7.3-1-2.6-.9-6 1-8.2 0-3.6-1-7.8-.4-11.8-1.1l.1.3-2.9-.4c-.8.7-2.7.3-4 1.1.1-.3-.1-.7.2-.9-1.2.1-2.6.4-3.3-.1l.4-.3c-2.7-.3-6.4-.5-7.9.1-.9 0-.9-.6-1.1-1-1.6-.1-2.6.2-3.9.7-.3-.2-.7-.3-1-.6l-.6.8c-.6-.1-.1-.7-.6-.9-2.5.9-5.3-.1-7-.1l.2.4c-.7.3-2.1-.3-1.2-.7-3.4-.6-5.1 1.2-9.6.8-.6-1.5-4.1.3-4.8-1.4-1.9.4-3.2-.3-4.5.6 0-.2-.2-.2.1-.3-.8-.6-3.3-.2-5.3.2l-.1-.5c-.9 1.2-4.2.9-4.9 2-.2-.2.4-.5.7-.7-1-1.1-1.8.5-3.1.2.1-.3-.3-.6 0-.8-4.4-1.2-10.6.7-16.3-.1-1.6 0 .6 1.2-1.5 1.1-.6-.6 1-1.1-.3-1.4-.9.7-1.3.5-2.6.5.2-.4 0-.6.9-.9-.7-.5-3.1.9-4.5 0 .1.3-.2.5-.5.7-2.1 1-4.9-.9-5.1-.4 0 0-.7.2-.1.3-.8 0-1.9-.2-1.7-.7-.4.3-.8.8-1.4.8l.3-.6c-.4.1-.8.5-1.1.6l.6.4c-.9-.5-2.6.8-2.6-.4h.3l-1.7-.5c-.7.5-1.3 1-2.5.9-.5-1.3-2.9-.2-4.3-.3l.1-.4c-1.1.6-4 .4-3.5.6-1.1 0-2.6-.2-2-.6-.8.1-2.7.1-3.2.9l-1.8-1c-1 1.6-3.6-.5-3.6 1.2-1-.2-.8-.6-1.5-.9-1.4.9-2.8.8-4.2.7v-.2c-1.4-.1-3.1.8-5.1 1l-.5-1.2c-1 .2-1.3 1.2-2.3 1-.2-.2 0-.3.2-.3-1 .3-2.3.1-3.1-.2-1.5 1-2.7.7-3.9 1.8-1.3-1 1.7-.6.6-1.6-2.2-.4-4.4.4-6.7 1.1-.2-.2 0-.4.1-.7 0 0-1.2.9-2.2 1.8C.9 8.3 0 9.4.5 10c-.5.9-1.2 1.4.9 2 .6-.5 2.5-1.3 2.9-.4l.1-.9c2.6-.6.4 1.8 3.6 1.6l-.7-.3c.6-.1 1.1-.7 1.8-.5.2.2-.2.4-.5.6.9-.5 1.7-.9 2.6-1.4.1.5.1.8-.4 1.2 2.5-.2-.6-1.6 2.4-1.4.6.4-.2.6-.5.9 1.4.7 2.3-.1 3.8-.6.1.8-.9.7.3 1.2-.3-.4-.5-1.1.5-1.2-.4.8.7.4 1.6.5-.2-.3-.1-.6.2-.8.4-.1.8.1 1.4.1l-1.1-.7c1.5-.8 2.4.3 3.6.6-.1.1-.3.3-.5.3 1.2.3 2.5.9 4.1.1l-.3.1c2.9-.9-1-1.3 2.4-2.2 1.1.1-.4 2.6 2.1 1.6-1.3-.6 1.6-1.7 3.1-2L32.4 10c.6 0 1.6-.5 2-.3l-.1-.3c-.2-1.3 1.9.1 3-.7-1.3 1.8-1.4 1.5-1.6 3.2 1-1 2.2-1.9 4.1-1.8l-1.5 1.4c2.5.2 5.5-1.9 7.6-3-.5 1 .3 1.4-.6 2.2l2.4-.3-.7 1.1c1-1.2 2.1-.4 1.9-1.9-.3.2-.2.4-.7.3.1-.4.5-1.4 1.7-1.3.9.3-.5.6-.2 1 .8-.6.9.3 1.7-.1l-.8-.6c.6-.9 1.4-.1 2.2-.5-1 .4-.7.9-.3 1.4l-.1-.1c.8-.1 1.6-.7 2-.2l-.5 1.2.9-.9c.3.1.6.6 0 .8 2.8.7-.1-2.5 3.6-1.5 0 .5-.4.8-1.4.5-.2.7.1 1.1 1.1 1.4v.1c1.9 0 4.4 0 5.6-.8.4.3 0 .6-.4.9 2.1.4 2.8-.7 5 .1l-1-.4c1.4-.6 4-.8 5.3.1l-.4.3c1.3-.7 3.5.6 4 0-.6-.4 0-.6-.8-1l3.4-.7.2 1.2 1.8-.4c-.4-.5 2.4.4 2.5-.7 1 .4-.4.9-.8 1.4 1-.3 1.1.2 2.1-.5l1 1.1 2.6-.7c-.1.1 0 .2-.1.3 1.2-.9 3.1.6 4.6-.9-.1.1-.1.1-.1.2.9-.8 2.9-.2 3.7 0 1.4-.2.6-1 .6-1.4 3.9.4 2.7.3 6-.9 2 1.4-2.4 2.1.1 3 .4-.6 2.1-1.1 4.1-1.3 1.8.5 4.8.9 6.5 1.9l-.2-.9 2.6-.4-1.5 1.2c.4-.3 1.7-.8 2.6-1.2 2.7-.7 1.4 1.9 3.5.7.1.1.1.2.2.3.7-.6 2.4-.3 4.4-.5l-.7 1.1-1.3-.3c.7 1.1 2.1-.1 3.4 0 1.3-.3.7-1.3 1.4-1.6.5.1 1.2-.2 1.6.1 1.1.4.1 1.3-.3 1.8 1-1.1 1.4-.9 3.6-1.3.1.5-.1.8-.4.9.5-.1.9-.3 1.2-.8l.7.7c2.5 1 2.6-2 5.6-1.5-.8.6 2.6 0 3.5.7-1.1.1.4 1.6-.2 2.3 2.4.5 1-1.3 3-1.4l-.9 1.3c1.9-.5.5-.7 2.4-1.1-.5.4.8.4-.3.8 2.5.2 1.9.1 4.1.3l.2-1.3c.7-.1 1 .5 1.2.7-.3 0-.8-.1-.7.1.8 1.2 1.4-.6 2.4.5-.2-.4-.5-1 .4-1.1-.3.8 1.4.8 1.4 1.2-.6-.6 2-.2 2.1-1 1 .7-.4.6-.4 1.1.9-1 3.7 0 4.6-.6 0 .1.1.1.1.2 1.2-.6 3-.7 5.3-1.5l-.8.7c2.2.4 1.4-1.5 3.3-1.5-.4 1.1 3.1 0 2.2 1.2 1.1-.6 2.3-.8 3.1-1.7 1 .6-2.1 1.4-.6 1.8l1.6-.5.3.6c.1-.4 1.5-.4 1.4-.8.2.7.9 1.2.8 1.8 1-.2 2.4.5 3.3-.1l.1.3c1-1.3 3.1-.2 3.6-1.5l.6.7c1.5-.1 1.3-1.5 2-1.8.6 0 1.4-.2 2 0-2 .8 1 1.1 1.4 1.6.8 0 3.1 0 3.7-.7-1 .7-.4 1.2-2.1 1.3.9 1.3 2.6-.2 4.5-.1v.6c2.7-.4 2.8-1.5 4-2.5.3.8.1 1-.7 1.7 1.8.5 4.7-.1 6.7 0 .6.5.2.9-.5 1.1 2.1-.6 4.7.1 6-1.2-.5.5.9.3 1.6.6 0-.3.1-.6.2-.6 1.3-.6 4.1-1.1 5.6-.7l-.5.4c1.7.1 3-.5 4.3-.9 1.3-.4 2.6-.8 4.5-.4.7.3-.7 1.1.7 1 .7-.5.4-1.5 2.2-1.3l-.1.9 1.2-.9c-.7-.7-2.6-.4-1.3-1.2 1.6.8 1.3-.9 3.3 0-.4.1-1 .8-1.3 1.2 2 .4 3.4.1 4.8-.1 1.4-.3 2.8-.6 4.9-.2 2-.8 4.6-1.2 5.9-1.9 0 .9 0 1.7-.8 2.4 1.8 0 2.4-2.1 3.7-.9.7-1.3 4.7-1.2 5-3l2-.8z"
              />
              <path
                className="st0"
                d="M58.1 11.1c-1 0-1.9 0-2.3.2.2.2 2.3.6 2.3-.2zM208.2 13.3c-.1 0-.3.1-.4.1.1 0 .3 0 .4-.1zM216.3 12.9c-.1-.1-.2-.2-.4-.3 0 .3.1.5.4.3zM132.6 11.5zM178.5 13.7c.7-.4 1-.7 1-1-.4.1-.7.3-1 1zM163 12.6c-.1.1-.2.1-.3.2.3-.1.3-.2.3-.2zM130.2 12c.7-.4 1.6-.3 2.4-.5-.7.2-1.9-.3-2.4.5zM226.1 11.4l-.7.6.8-.4zM218.6 12c-.3-.1-1.7.3-1.3.6.4-.3.9-.5 1.3-.6zM189.6 11.4l-.3.6.7-.5z"
              />
            </svg>
            <span className="relative text-blue-800 dark:text-white md:px-2">
              Scale
            </span>
          </span>
        </h1>
        <p className="mt-12 text-center text-lg text-gray-600 dark:text-gray-300 sm:text-xl md:text-left lg:w-3/4">
          Computers used to be magical. But much of that magic has been lost
          over time, replaced by subpar tools and practices that slow teams down
          and hold great work back.
        </p>
      </div>
    </div>
    <div className="relative -mx-4 mt-16 flex snap-x snap-mandatory justify-between gap-6 overflow-x-auto border-y border-gray-100 px-4 py-8 dark:border-gray-800 sm:-mx-12 sm:px-12 lg:mx-0 lg:px-0">
      <div className="snap-center text-center sm:text-left">
        <div className="mx-auto mb-4 flex h-12 w-12 rounded-xl border border-primary/20 bg-white shadow-md shadow-primary/10 dark:border-gray-700 dark:bg-gray-800 sm:mr-auto sm:ml-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="m-auto h-6 w-6 text-primary dark:text-blue-300"
          >
            <path
              className="text-primaryLight"
              fillRule="evenodd"
              d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0112 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 017.5 5.455V5.25zm7.5 0v.09a49.488 49.488 0 00-6 0v-.09a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5zm-3 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
              clipRule="evenodd"
            />
            <path d="M3 18.4v-2.796a4.3 4.3 0 00.713.31A26.226 26.226 0 0012 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 01-6.477-.427C4.047 21.128 3 19.852 3 18.4z" />
          </svg>
        </div>
        <h2 className="mx-auto w-max text-lg font-semibold text-gray-700 dark:text-white sm:ml-0 sm:w-auto">
          The lowest price
        </h2>
        <p className="mx-auto mt-1 w-max text-gray-500 sm:ml-0 sm:w-auto">
          Some text here
        </p>
      </div>
      <div className="snap-center text-center sm:text-left">
        <div className="mx-auto mb-4 flex h-12 w-12 rounded-xl border border-purple-500/20 bg-white shadow-md shadow-purple-600/10 dark:border-gray-700 dark:bg-gray-800 sm:mr-auto sm:ml-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="m-auto h-6 w-6 text-purple-600"
          >
            <path
              className="text-purple-300"
              d="M7.5 3.375c0-1.036.84-1.875 1.875-1.875h.375a3.75 3.75 0 013.75 3.75v1.875C13.5 8.161 14.34 9 15.375 9h1.875A3.75 3.75 0 0121 12.75v3.375C21 17.16 20.16 18 19.125 18h-9.75A1.875 1.875 0 017.5 16.125V3.375z"
            />
            <path d="M15 5.25a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963A5.23 5.23 0 0017.25 7.5h-1.875A.375.375 0 0115 7.125V5.25zM4.875 6H6v10.125A3.375 3.375 0 009.375 19.5H16.5v1.125c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625V7.875C3 6.839 3.84 6 4.875 6z" />
          </svg>
        </div>
        <h2 className="mx-auto w-max text-lg font-semibold text-gray-700 dark:text-white sm:ml-0 sm:w-auto">
          The fastest on the market
        </h2>
        <p className="mx-auto mt-1 w-max text-gray-500 sm:ml-0 sm:w-auto">
          Some text here
        </p>
      </div>
      <div className="snap-center text-center sm:text-left">
        <div className="mx-auto mb-4 flex h-12 w-12 rounded-xl border bg-white shadow-md shadow-yellow-600/10 dark:border-gray-700 dark:bg-gray-800 sm:mr-auto sm:ml-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="m-auto h-6 w-6 text-yellow-700"
          >
            <path
              className="text-yellow-500"
              d="M12 .75a8.25 8.25 0 00-4.135 15.39c.686.398 1.115 1.008 1.134 1.623a.75.75 0 00.577.706c.352.083.71.148 1.074.195.323.041.6-.218.6-.544v-4.661a6.714 6.714 0 01-.937-.171.75.75 0 11.374-1.453 5.261 5.261 0 002.626 0 .75.75 0 11.374 1.452 6.712 6.712 0 01-.937.172v4.66c0 .327.277.586.6.545.364-.047.722-.112 1.074-.195a.75.75 0 00.577-.706c.02-.615.448-1.225 1.134-1.623A8.25 8.25 0 0012 .75z"
            />
            <path
              fillRule="evenodd"
              d="M9.013 19.9a.75.75 0 01.877-.597 11.319 11.319 0 004.22 0 .75.75 0 11.28 1.473 12.819 12.819 0 01-4.78 0 .75.75 0 01-.597-.876zM9.754 22.344a.75.75 0 01.824-.668 13.682 13.682 0 002.844 0 .75.75 0 11.156 1.492 15.156 15.156 0 01-3.156 0 .75.75 0 01-.668-.824z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <h2 className="mx-auto w-max text-lg font-semibold text-gray-700 dark:text-white sm:ml-0 sm:w-auto">
          The most loved
        </h2>
        <p className="mx-auto mt-1 w-max text-gray-500 sm:ml-0 sm:w-auto">
          Some text here
        </p>
      </div>
    </div>
    <div className="my-8 flex justify-between gap-6 brightness-75 contrast-200 grayscale dark:brightness-200 dark:contrast-0 md:my-16 lg:gap-12">
      <img
        src="./../images/clients/airbnb.svg"
        className="h-8 w-auto dark:brightness-200 sm:h-10 lg:h-12"
        alt="airbnb"
        width=""
        height=""
      />
      <img
        src="./../images/clients/ge.svg"
        className="h-8 w-auto dark:brightness-200 sm:h-10 lg:h-12"
        alt="ge"
        width=""
        height=""
      />
      <img
        src="./../images/clients/coty.svg"
        className="h-8 w-auto dark:brightness-0 dark:contrast-0 sm:h-10 lg:h-12"
        alt="coty"
        width=""
        height=""
      />
      <img
        src="./../images/clients/microsoft.svg"
        className="h-8 w-auto dark:brightness-200 sm:h-10 lg:h-12"
        alt="microsoft"
        width=""
        height=""
      />
    </div>
  </div>
</section>



<section className="border-t border-gray-100 pt-16 dark:border-gray-800 md:pt-32">
  <div className="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
    <div className="items-center justify-center space-y-6 md:flex md:gap-6 md:space-y-0">
      <div className="md:w-1/2 lg:w-3/5">
        <img
          className="h-full rounded-3xl object-cover md:-ml-8"
          src="./../images/mission.webp"
          alt="working woman"
          loading="lazy"
          width={1399}
          height={1314}
        />
      </div>
      <div className="md:w-1/2">
        <span className="text-sm font-semibold uppercase tracking-widest text-primary dark:text-secondaryLight">
          Mission
        </span>
        <h2 className="my-8 text-4xl font-bold text-gray-900 dark:text-white lg:text-5xl">
          Help great teams become{" "}
          <span className="bg-gradient-to-r from-primaryLight to-secondaryLight bg-clip-text text-transparent">
            dream teams
          </span>
        </h2>
        <p className="mb-4 text-gray-600 dark:text-gray-300">
          Asperiores nemo possimus nesciunt dicta veniam aspernatur quam
          mollitia.
        </p>
        <p className="text-gray-600 dark:text-gray-300">
          Nobis minus voluptatibus pariatur dignissimos libero quaerat iure
          expedita at? Asperiores nemo possimus nesciunt dicta veniam aspernatur
          quam mollitia. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Fugit alias sapiente maxime repellendus impedit commodi
          blanditiis debitis rerum, quisquam aspernatur quod aliquid molestiae
          eveniet suscipit, natus dolore? Vero, eum voluptatem?
        </p>
      </div>
    </div>
  </div>
</section>
<svg
  aria-hidden="true"
  className="text-gray-100 dark:text-darker"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 1440 320"
>
  <path
    fill="currentColor"
    fillOpacity={1}
    d="M0,160L48,181.3C96,203,192,245,288,234.7C384,224,480,160,576,133.3C672,107,768,117,864,138.7C960,160,1056,192,1152,224C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
  />
</svg>
<section className="relative bg-gray-100 pt-16 dark:bg-darker sm:pt-8 md:py-0">
  <div className="mx-auto px-4 sm:px-12 xl:max-w-5xl xl:px-0">
    <div className="text-center">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white md:text-4xl xl:text-5xl">
        We
        <span className="relative bg-gradient-to-r from-primaryLight to-secondaryLight bg-clip-text px-2 text-transparent dark:from-secondary dark:to-purple-300">
          Scaled !
        </span>
      </h2>
      <p className="mx-auto mt-6 text-gray-700 dark:text-gray-300 md:w-3/4 lg:w-3/5">
        A growing team doesn't need to mean growing pains. With best-of-breed
        features, security, privacy, and the right tool for every step of your
        journey - Jira Software allows you to scale without friction -
        regardless of your company size.
      </p>
    </div>
    <div className="relative mt-32 hidden h-40 w-40 items-center justify-center lg:mx-auto lg:flex">
      <div className="it absolute inset-0 flex flex-wrap blur-3xl">
        <div
          aria-hidden="true"
          className="h-1/2 w-1/2 rounded-tl-full bg-primary"
        />
        <div
          aria-hidden="true"
          className="h-1/2 w-1/2 rounded-tr-full bg-purple-700"
        />
        <div
          aria-hidden="true"
          className="h-1/2 w-1/2 rounded-bl-full bg-secondary"
        />
        <div
          aria-hidden="true"
          className="h-1/2 w-1/2 rounded-br-full bg-secondaryLight"
        />
      </div>
      <div className="flex h-40 w-40 rounded-full border border-gray-900/20 bg-gray-900/10 dark:border-white/20 dark:bg-white/10">
        <svg
          className="relative m-auto h-12 w-auto text-white"
          viewBox="0 0 290 270"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M184.589 48.5615L259.174 177.176C271.689 198.757 264.34 226.397 242.76 238.912C221.862 251.03 195.284 244.523 182.258 224.504L168.033 245.393C189.368 269.831 225.685 276.557 254.799 259.673C287.846 240.509 299.1 198.183 279.936 165.136L204.374 34.8366C201.937 30.6351 199.126 26.7859 196.008 23.3066L184.589 48.5615Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M184.19 92.696L108.622 222.992C96.1058 244.572 68.4656 251.92 46.8855 239.405C25.3055 226.889 17.9575 199.249 30.4733 177.668L106.042 47.3721C118.558 25.792 146.198 18.444 167.778 30.9599C189.358 43.4757 196.706 71.116 184.19 92.696ZM85.2807 35.3313C104.447 2.28524 146.773 -8.96694 179.819 10.1989C212.865 29.3647 224.117 71.6908 204.951 104.737L129.383 235.033C110.217 268.079 67.8908 279.331 34.8447 260.166C1.79866 241 -9.45348 198.674 9.71234 165.628L85.2807 35.3313Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M108.622 222.992L184.19 92.696C196.706 71.116 189.358 43.4757 167.778 30.9599C146.198 18.444 118.558 25.792 106.042 47.3721L30.4733 177.668C17.9575 199.248 25.3054 226.889 46.8855 239.405C68.4656 251.92 96.1058 244.572 108.622 222.992ZM179.819 10.1989C146.773 -8.96694 104.447 2.28524 85.2807 35.3313L9.71233 165.628C-9.4535 198.674 1.79865 241 34.8447 260.166C67.8907 279.331 110.217 268.079 129.383 235.033L204.951 104.737C224.117 71.6908 212.865 29.3647 179.819 10.1989Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </div>
    <div className="pl-2">
      <div className="relative py-32 before:absolute before:inset-0 before:mx-auto before:h-full before:w-px after:absolute after:inset-0 after:h-32 after:w-px after:bg-gradient-to-t after:from-gray-900/20 after:via-gray-200 after:before:to-gray-900 dark:after:from-white/20 dark:after:via-gray-800 lg:before:bg-gray-200 lg:after:mx-auto lg:after:bg-gradient-to-b lg:dark:before:bg-gray-900">
        <div className="relative flex flex-col items-center gap-10 pb-12 pl-6 before:absolute before:inset-0 before:h-1/2 before:w-px before:bg-gradient-to-b before:from-gray-400/70 before:to-gray-400/70 after:absolute after:inset-x-0 after:bottom-0 after:h-1/2 after:w-px after:border-r after:border-dashed after:border-gray-400/70 dark:before:from-gray-700 dark:before:to-gray-700 dark:after:border-gray-700 sm:pl-12 md:flex-row md:pb-20 lg:pl-0 lg:before:left-[9.1rem] lg:before:from-transparent lg:before:to-gray-400/70 lg:after:left-[9.1rem] dark:lg:before:from-transparent dark:lg:before:to-gray-700">
          <div className="flex w-full flex-col gap-10 md:w-1/2 lg:flex-row lg:items-center">
            <div className="hidden w-max md:block">
              <div className="h-24 w-24 rounded-full border border-gray-200 bg-white p-4 shadow-xl shadow-gray-600/10 dark:border-gray-800 dark:bg-gray-900 dark:shadow-none">
                <img
                  className="h-full w-full rounded-full object-cover object-top"
                  src="./../images/avatars/avatar.webp"
                  alt="user avatar"
                  loading="lazy"
                  width={400}
                  height={400}
                />
              </div>
            </div>
            <div
              aria-hidden="true"
              className="absolute top-[1.80rem] -left-2.5 z-[1] my-auto h-max w-max md:inset-y-0 lg:relative lg:ml-2.5 lg:-mr-2.5"
            >
              <div className="h-5 w-5 rounded-full border-8 border-white bg-primary ring-1 ring-gray-400/70 dark:border-darker dark:bg-white dark:ring-gray-700" />
            </div>
            <div className="">
              <span className="text-gray-500">2019</span>
              <h3 className="mt-0.5 text-xl font-semibold text-gray-700 dark:text-white">
                Founded by Ariane Doe
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Asperiores nemo possimus nesciunt dicta veniam aspernatur quam
                mollitia
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <img
              className="h-56 w-full rounded-2xl object-cover md:h-80"
              src="./../images/steps/step1.webp"
              alt="timeline first step"
              loading="lazy"
              width={1165}
              height={864}
            />
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div
            aria-hidden="true"
            className="my-3.5 -ml-8 h-16 w-16 rotate-45 rounded-bl-full rounded-tr-3xl border border-dashed border-gray-400/70 dark:border-gray-700 lg:ml-[7.15rem]"
          />
          <span className="text-gray-700 dark:text-white">
            12 Satisfied{" "}
            <a
              href="customers.html"
              className="text-primary underline dark:text-primaryLight"
            >
              Customers
            </a>{" "}
            !
          </span>
        </div>
        <div className="relative flex flex-col items-center gap-10 py-12 pl-6 after:absolute after:inset-0 after:h-full after:w-px after:border-r after:border-dashed after:border-gray-400/70 dark:after:border-gray-700 sm:pl-12 md:flex-row md:py-20 lg:pl-0 lg:after:left-[9.1rem]">
          <div className="flex w-full flex-col gap-10 md:w-1/2 lg:flex-row lg:items-center">
            <div className="hidden w-max md:block">
              <div className="flex h-24 w-24 rounded-full border border-gray-200 bg-white p-4 shadow-xl shadow-gray-600/10 dark:border-gray-800 dark:bg-gray-900 dark:shadow-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="m-auto h-6 w-6 text-purple-600"
                >
                  <path
                    className="text-purple-300"
                    d="M7.5 3.375c0-1.036.84-1.875 1.875-1.875h.375a3.75 3.75 0 013.75 3.75v1.875C13.5 8.161 14.34 9 15.375 9h1.875A3.75 3.75 0 0121 12.75v3.375C21 17.16 20.16 18 19.125 18h-9.75A1.875 1.875 0 017.5 16.125V3.375z"
                  />
                  <path d="M15 5.25a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963A5.23 5.23 0 0017.25 7.5h-1.875A.375.375 0 0115 7.125V5.25zM4.875 6H6v10.125A3.375 3.375 0 009.375 19.5H16.5v1.125c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625V7.875C3 6.839 3.84 6 4.875 6z" />
                </svg>
              </div>
            </div>
            <div
              aria-hidden="true"
              className="absolute top-[4.80rem] -left-2.5 z-[1] my-auto h-max w-max md:inset-y-0 lg:relative lg:ml-2.5 lg:-mr-2.5"
            >
              <div className="h-5 w-5 rounded-full border-8 border-white bg-purple-600 ring-1 ring-gray-400/70 dark:border-darker dark:bg-white dark:ring-gray-700" />
            </div>
            <div className="">
              <span className="text-gray-500">2020</span>
              <h3 className="mt-0.5 text-xl font-semibold text-gray-700 dark:text-white">
                Grwown the team
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Asperiores nemo possimus nesciunt dicta veniam aspernatur quam
                mollitia
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <img
              className="h-56 w-full rounded-2xl object-cover md:h-80"
              src="./../images/steps/step2.webp"
              alt="timeline first step"
              loading="lazy"
              width={1165}
              height={864}
            />
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="my-3.5 -ml-8 h-16 w-16 rotate-45 rounded-bl-full rounded-tr-3xl border border-dashed border-gray-400/70 dark:border-gray-700 lg:ml-[7.15rem]" />
          <div>
            <span className="text-gray-700 dark:text-white">
              5 Developers joined the{" "}
              <a
                href="customers.html"
                className="text-primary underline dark:text-primaryLight"
              >
                Team
              </a>{" "}
              !
            </span>
            <div className="mt-5 flex -space-x-1 children:h-10 children:w-10 children:rounded-full children:object-cover children:ring-4 children:ring-gray-100 dark:children:ring-darker">
              <img
                src="./../images/avatars/avatar-1.webp"
                alt="user avatar"
                loading="lazy"
                width={200}
                height={200}
              />
              <img
                src="./../images/avatars/avatar-2.webp"
                alt="user avatar"
                loading="lazy"
                width={200}
                height={200}
              />
              <img
                src="./../images/avatars/avatar-3.webp"
                alt="user avatar"
                loading="lazy"
                width={200}
                height={200}
              />
              <img
                src="./../images/avatars/avatar-4.webp"
                alt="user avatar"
                loading="lazy"
                width={200}
                height={200}
              />
              <img
                src="./../images/avatars/avatar.webp"
                alt="user avatar"
                loading="lazy"
                width={400}
                height={400}
              />
            </div>
          </div>
        </div>
        <div className="relative flex flex-col items-center gap-10 py-12 pl-6 after:absolute after:inset-0 after:h-full after:w-px after:border-r after:border-dashed after:border-gray-400/70 dark:after:border-gray-700 sm:pl-12 md:flex-row md:py-20 lg:pl-0 lg:after:left-[9.1rem]">
          <div className="flex w-full flex-col gap-10 md:w-1/2 lg:flex-row lg:items-center">
            <div className="hidden w-max md:block">
              <div className="flex h-24 w-24 rounded-full border border-gray-200 bg-white p-4 shadow-xl shadow-gray-600/10 dark:border-gray-800 dark:bg-gray-900 dark:shadow-none">
                <svg
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="m-auto h-6 w-6 text-primary dark:text-blue-300"
                >
                  <path
                    className="text-primaryLight"
                    fillRule="evenodd"
                    d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0112 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 017.5 5.455V5.25zm7.5 0v.09a49.488 49.488 0 00-6 0v-.09a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5zm-3 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                    clipRule="evenodd"
                  />
                  <path d="M3 18.4v-2.796a4.3 4.3 0 00.713.31A26.226 26.226 0 0012 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 01-6.477-.427C4.047 21.128 3 19.852 3 18.4z" />
                </svg>
              </div>
            </div>
            <div
              aria-hidden="true"
              className="absolute top-[4.80rem] -left-2.5 z-[1] my-auto h-max w-max md:inset-y-0 lg:relative lg:ml-2.5 lg:-mr-2.5"
            >
              <div className="h-5 w-5 rounded-full border-8 border-white bg-primary ring-1 ring-gray-400/70 dark:border-darker dark:bg-white dark:ring-gray-700" />
            </div>
            <div className="">
              <span className="text-gray-500">2021</span>
              <h3 className="mt-0.5 text-xl font-semibold text-gray-700 dark:text-white">
                Startup of the year
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Asperiores nemo possimus nesciunt dicta veniam aspernatur quam
                mollitia
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <img
              className="h-56 w-full rounded-2xl object-cover md:h-80"
              src="./../images/steps/step3.webp"
              alt="timeline third step"
              loading="lazy"
              width={1165}
              height={864}
            />
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div
            aria-hidden="true"
            className="my-3.5 -ml-8 h-16 w-16 rotate-45 rounded-bl-full rounded-tr-3xl border border-dashed border-gray-400/70 dark:border-gray-700 lg:ml-[7.15rem]"
          />
          <div className="w-10/12">
            <span className="text-gray-700 dark:text-white">
              Worked with 5 world leading{" "}
              <a
                href="customers.html"
                className="text-primary underline dark:text-primaryLight"
              >
                companies
              </a>{" "}
              !
            </span>
            <div className="mt-5 flex w-full justify-between gap-6 brightness-200 contrast-0 grayscale lg:gap-x-24">
              <img
                className="h-8 w-auto md:h-10 lg:w-auto"
                src="./../images/clients/airbnb.svg"
                loading="lazy"
                alt="airbnb"
                width=""
                height=""
              />
              <img
                className="h-8 w-auto md:h-10 lg:w-auto"
                src="./../images/clients/coty.svg"
                loading="lazy"
                alt="coty"
                width=""
                height=""
              />
              <img
                className="h-8 w-auto md:h-10 lg:w-auto"
                src="./../images/clients/ge.svg"
                loading="lazy"
                alt="ge"
                width=""
                height=""
              />
              <img
                className="hidden h-8 w-auto sm:block md:h-10 lg:w-auto"
                src="./../images/clients/lilly.png"
                loading="lazy"
                alt="lilly"
                width=""
                height=""
              />
              <img
                className="hidden h-8 w-auto sm:block md:h-10 lg:w-auto"
                src="./../images/clients/microsoft.svg"
                loading="lazy"
                alt="microsoft"
                width=""
                height=""
              />
            </div>
          </div>
        </div>
        <div className="relative flex flex-col items-center gap-10 py-12 pl-6 before:absolute before:inset-x-0 before:bottom-0 before:h-1/2 before:w-px before:bg-gradient-to-t before:from-transparent before:to-gray-400/70 after:absolute after:inset-0 after:top-0 after:h-1/2 after:w-px after:border-r after:border-dashed after:border-gray-400/70 dark:before:to-gray-700 dark:after:border-gray-700 sm:pl-12 md:flex-row md:py-20 lg:pl-0 lg:before:left-[9.1rem] lg:after:left-[9.1rem]">
          <div className="flex w-full flex-col gap-10 md:w-1/2 lg:flex-row lg:items-center">
            <div className="hidden w-max md:block">
              <div className="flex h-24 w-24 rounded-full border border-gray-200 bg-white p-4 shadow-xl shadow-gray-600/10 dark:border-gray-800 dark:bg-gray-900 dark:shadow-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="m-auto h-6 w-6 text-yellow-700"
                >
                  <path
                    className="text-yellow-500"
                    d="M12 .75a8.25 8.25 0 00-4.135 15.39c.686.398 1.115 1.008 1.134 1.623a.75.75 0 00.577.706c.352.083.71.148 1.074.195.323.041.6-.218.6-.544v-4.661a6.714 6.714 0 01-.937-.171.75.75 0 11.374-1.453 5.261 5.261 0 002.626 0 .75.75 0 11.374 1.452 6.712 6.712 0 01-.937.172v4.66c0 .327.277.586.6.545.364-.047.722-.112 1.074-.195a.75.75 0 00.577-.706c.02-.615.448-1.225 1.134-1.623A8.25 8.25 0 0012 .75z"
                  />
                  <path
                    fillRule="evenodd"
                    d="M9.013 19.9a.75.75 0 01.877-.597 11.319 11.319 0 004.22 0 .75.75 0 11.28 1.473 12.819 12.819 0 01-4.78 0 .75.75 0 01-.597-.876zM9.754 22.344a.75.75 0 01.824-.668 13.682 13.682 0 002.844 0 .75.75 0 11.156 1.492 15.156 15.156 0 01-3.156 0 .75.75 0 01-.668-.824z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <div className="absolute top-[4.80rem] -left-2.5 z-[1] my-auto h-max w-max md:inset-y-0 lg:relative lg:ml-2.5 lg:-mr-2.5">
              <div className="h-5 w-5 rounded-full border-8 border-white bg-yellow-600 ring-1 ring-gray-400/70 dark:border-darker dark:bg-white dark:ring-gray-700" />
            </div>
            <div className="">
              <span className="text-gray-500">2022</span>
              <h3 className="mt-0.5 text-xl font-semibold text-gray-700 dark:text-white">
                Founded by Bernard Ng
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Asperiores nemo possimus nesciunt dicta veniam aspernatur quam
                mollitia
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <img
              className="h-56 w-full rounded-2xl object-cover md:h-80"
              src="./../images/steps/step4.webp"
              alt="timeline fourth step"
              loading="lazy"
              width={1165}
              height={864}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section className="bg-gradient-to-b from-gray-100 to-transparent pt-20 dark:from-darker">
  <div className="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
    <h2 className="text-center text-3xl font-bold text-gray-800 dark:text-white md:text-4xl xl:text-5xl">
      Our team
    </h2>
    <p className="mx-auto mt-6 text-center text-gray-700 dark:text-gray-300 md:w-2/3">
      Saepe nulla ab nobis itaque corporis fuga illo doloribus sequi esse
      aspernatur impedit nihil quisquam, voluptates placeat architecto adipisci
      id cum enim.
    </p>
    <div className="mt-20">
      <div className="mx-auto flex flex-wrap justify-center gap-x-6 gap-y-16 sm:grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        <div>
          <img
            src="./../images/team/member1.webp"
            alt="team member"
            className="h-32 w-32 rounded-full object-cover"
            loading="lazy"
            width={267}
            height={267}
          />
          <div className="mt-4">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
              Hentoni Doe
            </h3>
            <span className="mt-4 block text-gray-500 dark:text-gray-300">
              CEO - Founder
            </span>
            <span className="text-gray-500">
              Also founded :{" "}
              <span className="text-gray-700 dark:text-gray-300">Tailus</span>{" "}
              and{" "}
              <span className="text-gray-700 dark:text-gray-300">Devscast</span>{" "}
            </span>
            <div className="mt-6 flex items-center gap-4">
              <a
                href="#"
                target="_blank"
                aria-label="twitter"
                className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primaryLight"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="m-auto w-4"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                </svg>
              </a>
              <a
                href="#"
                target="_blank"
                aria-label="instagram"
                className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primaryLight"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-4"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                </svg>
              </a>
              <a
                href="#"
                target="_blank"
                aria-label="facebook"
                className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primaryLight"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-4"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div>
          <img
            src="./../images/team/member2.webp"
            alt="team member"
            className="h-32 w-32 rounded-full object-cover"
            loading="lazy"
            width={267}
            height={267}
          />
          <div className="mt-4">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
              Hentoni Doe
            </h3>
            <span className="mt-4 block text-gray-500 dark:text-gray-300">
              CEO - Founder
            </span>
            <span className="text-gray-500">
              Also founded :{" "}
              <span className="text-gray-700 dark:text-gray-300">Tailus</span>{" "}
              and{" "}
              <span className="text-gray-700 dark:text-gray-300">Devscast</span>{" "}
            </span>
            <div className="mt-6 flex items-center gap-4">
              <a
                href="#"
                target="_blank"
                aria-label="twitter"
                className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primaryLight"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="m-auto w-4"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                </svg>
              </a>
              <a
                href="#"
                target="_blank"
                aria-label="instagram"
                className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primaryLight"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-4"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                </svg>
              </a>
              <a
                href="#"
                target="_blank"
                aria-label="facebook"
                className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primaryLight"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-4"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div>
          <img
            src="./../images/team/member3.webp"
            alt="team member"
            className="h-32 w-32 rounded-full object-cover"
            loading="lazy"
            width={267}
            height={267}
          />
          <div className="mt-4">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
              Hentoni Doe
            </h3>
            <span className="mt-4 block text-gray-500 dark:text-gray-300">
              CEO - Founder
            </span>
            <span className="text-gray-500">
              Also founded :{" "}
              <span className="text-gray-700 dark:text-gray-300">Tailus</span>{" "}
              and{" "}
              <span className="text-gray-700 dark:text-gray-300">Devscast</span>{" "}
            </span>
            <div className="mt-6 flex items-center gap-4">
              <a
                href="#"
                target="_blank"
                aria-label="twitter"
                className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primaryLight"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="m-auto w-4"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                </svg>
              </a>
              <a
                href="#"
                target="_blank"
                aria-label="instagram"
                className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primaryLight"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-4"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                </svg>
              </a>
              <a
                href="#"
                target="_blank"
                aria-label="facebook"
                className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primaryLight"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-4"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div>
          <img
            src="./../images/team/member4.webp"
            alt="team member"
            className="h-32 w-32 rounded-full object-cover"
            loading="lazy"
            width={267}
            height={267}
          />
          <div className="mt-4">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
              Hentoni Doe
            </h3>
            <span className="mt-4 block text-gray-500 dark:text-gray-300">
              CEO - Founder
            </span>
            <span className="text-gray-500">
              Also founded :{" "}
              <span className="text-gray-700 dark:text-gray-300">Tailus</span>{" "}
              and{" "}
              <span className="text-gray-700 dark:text-gray-300">Devscast</span>{" "}
            </span>
            <div className="mt-6 flex items-center gap-4">
              <a
                href="#"
                target="_blank"
                aria-label="twitter"
                className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primaryLight"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="m-auto w-4"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                </svg>
              </a>
              <a
                href="#"
                target="_blank"
                aria-label="instagram"
                className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primaryLight"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-4"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                </svg>
              </a>
              <a
                href="#"
                target="_blank"
                aria-label="facebook"
                className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primaryLight"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-4"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div>
          <img
            src="./../images/team/member5.webp"
            alt="team member"
            className="h-32 w-32 rounded-full object-cover"
            loading="lazy"
            width={267}
            height={267}
          />
          <div className="mt-4">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
              Hentoni Doe
            </h3>
            <span className="mt-4 block text-gray-500 dark:text-gray-300">
              CEO - Founder
            </span>
            <span className="text-gray-500">
              Also founded :{" "}
              <span className="text-gray-700 dark:text-gray-300">Tailus</span>{" "}
              and{" "}
              <span className="text-gray-700 dark:text-gray-300">Devscast</span>{" "}
            </span>
            <div className="mt-6 flex items-center gap-4">
              <a
                href="#"
                target="_blank"
                aria-label="twitter"
                className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primaryLight"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="m-auto w-4"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                </svg>
              </a>
              <a
                href="#"
                target="_blank"
                aria-label="instagram"
                className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primaryLight"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-4"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                </svg>
              </a>
              <a
                href="#"
                target="_blank"
                aria-label="facebook"
                className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primaryLight"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-4"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div>
          <img
            src="./../images/team/member6.webp"
            alt="team member"
            className="h-32 w-32 rounded-full object-cover"
            loading="lazy"
            width={267}
            height={267}
          />
          <div className="mt-4">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
              Hentoni Doe
            </h3>
            <span className="mt-4 block text-gray-500 dark:text-gray-300">
              CEO - Founder
            </span>
            <span className="text-gray-500">
              Also founded :{" "}
              <span className="text-gray-700 dark:text-gray-300">Tailus</span>{" "}
              and{" "}
              <span className="text-gray-700 dark:text-gray-300">Devscast</span>{" "}
            </span>
            <div className="mt-6 flex items-center gap-4">
              <a
                href="#"
                target="_blank"
                aria-label="twitter"
                className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primaryLight"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="m-auto w-4"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                </svg>
              </a>
              <a
                href="#"
                target="_blank"
                aria-label="instagram"
                className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primaryLight"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-4"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                </svg>
              </a>
              <a
                href="#"
                target="_blank"
                aria-label="facebook"
                className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primaryLight"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-4"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div>
          <img
            src="./../images/team/member7.webp"
            alt="team member"
            className="h-32 w-32 rounded-full object-cover"
            loading="lazy"
            width={267}
            height={267}
          />
          <div className="mt-4">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
              Hentoni Doe
            </h3>
            <span className="mt-4 block text-gray-500 dark:text-gray-300">
              CEO - Founder
            </span>
            <span className="text-gray-500">
              Also founded :{" "}
              <span className="text-gray-700 dark:text-gray-300">Tailus</span>{" "}
              and{" "}
              <span className="text-gray-700 dark:text-gray-300">Devscast</span>{" "}
            </span>
            <div className="mt-6 flex items-center gap-4">
              <a
                href="#"
                target="_blank"
                aria-label="twitter"
                className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primaryLight"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="m-auto w-4"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                </svg>
              </a>
              <a
                href="#"
                target="_blank"
                aria-label="instagram"
                className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primaryLight"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-4"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                </svg>
              </a>
              <a
                href="#"
                target="_blank"
                aria-label="facebook"
                className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primaryLight"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-4"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div>
          <img
            src="./../images/team/member3.webp"
            alt="team member"
            className="h-32 w-32 rounded-full object-cover"
            loading="lazy"
            width={267}
            height={267}
          />
          <div className="mt-4">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
              Hentoni Doe
            </h3>
            <span className="mt-4 block text-gray-500 dark:text-gray-300">
              CEO - Founder
            </span>
            <span className="text-gray-500">
              Also founded :{" "}
              <span className="text-gray-700 dark:text-gray-300">Tailus</span>{" "}
              and{" "}
              <span className="text-gray-700 dark:text-gray-300">Devscast</span>{" "}
            </span>
            <div className="mt-6 flex items-center gap-4">
              <a
                href="#"
                target="_blank"
                aria-label="twitter"
                className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primaryLight"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="m-auto w-4"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                </svg>
              </a>
              <a
                href="#"
                target="_blank"
                aria-label="instagram"
                className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primaryLight"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-4"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                </svg>
              </a>
              <a
                href="#"
                target="_blank"
                aria-label="facebook"
                className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primaryLight"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-4"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section className="my-32">
  <div className="container m-auto px-6 text-center md:px-12 lg:px-20">
    <div className="relative mx-auto flex h-56 w-56 items-center justify-center">
      <div className="it absolute inset-0 flex flex-wrap opacity-40 blur-3xl dark:opacity-70">
        <div aria-hidden="true" className="h-1/2 w-1/2 bg-primary" />
        <div aria-hidden="true" className="h-1/2 w-1/2 bg-purple-500" />
        <div
          aria-hidden="true"
          className="h-1/2 w-1/2 rounded-bl-full bg-secondary"
        />
        <div
          aria-hidden="true"
          className="h-1/2 w-1/2 rounded-br-full bg-secondaryLight"
        />
      </div>
      <svg
        className="relative m-auto h-12 w-auto text-blue-900 dark:text-white"
        viewBox="0 0 290 270"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M184.589 48.5615L259.174 177.176C271.689 198.757 264.34 226.397 242.76 238.912C221.862 251.03 195.284 244.523 182.258 224.504L168.033 245.393C189.368 269.831 225.685 276.557 254.799 259.673C287.846 240.509 299.1 198.183 279.936 165.136L204.374 34.8366C201.937 30.6351 199.126 26.7859 196.008 23.3066L184.589 48.5615Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M184.19 92.696L108.622 222.992C96.1058 244.572 68.4656 251.92 46.8855 239.405C25.3055 226.889 17.9575 199.249 30.4733 177.668L106.042 47.3721C118.558 25.792 146.198 18.444 167.778 30.9599C189.358 43.4757 196.706 71.116 184.19 92.696ZM85.2807 35.3313C104.447 2.28524 146.773 -8.96694 179.819 10.1989C212.865 29.3647 224.117 71.6908 204.951 104.737L129.383 235.033C110.217 268.079 67.8908 279.331 34.8447 260.166C1.79866 241 -9.45348 198.674 9.71234 165.628L85.2807 35.3313Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M108.622 222.992L184.19 92.696C196.706 71.116 189.358 43.4757 167.778 30.9599C146.198 18.444 118.558 25.792 106.042 47.3721L30.4733 177.668C17.9575 199.248 25.3054 226.889 46.8855 239.405C68.4656 251.92 96.1058 244.572 108.622 222.992ZM179.819 10.1989C146.773 -8.96694 104.447 2.28524 85.2807 35.3313L9.71233 165.628C-9.4535 198.674 1.79865 241 34.8447 260.166C67.8907 279.331 110.217 268.079 129.383 235.033L204.951 104.737C224.117 71.6908 212.865 29.3647 179.819 10.1989Z"
          fill="currentColor"
        />
      </svg>
    </div>
    <div className="relative -mt-12">
      <h2 className="mb-8 text-4xl font-bold text-blue-900 dark:text-white md:text-6xl">
        Improve your
        <span className="relative">
          <svg
            className="absolute inset-x-0 -bottom-1 w-full opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            id="Layer_1"
            viewBox="0 0 260 15.6"
          >
            <path
              className="st0"
              d="M206.8 7.3l-.1.3c.1-.2.2-.3.1-.3zM234.7 10h-.1c-.2.4-.1.3.1 0zM54.8 4.2l-.6-.4c.2.4.4.5.6.4zM17.1 5.1zM34.5 9.6l.1.3c0-.2 0-.3-.1-.3zM22.4 10.8c-.3-.1-.7-.1-1-.1.2.1.7.1 1 .1zM17.5 5c-.1.1-.2.1-.4.2.2-.1.3-.2.4-.2zM52.7 9.8l.5.9c-.1-.3-.3-.6-.5-.9zM19.5 11.6c-.2-.2-.4-.2-.6-.3 0 .2.3.3.6.3zM120.9 11.4c-.1.1-.2.2-.2.3.3-.1.3-.2.2-.3zM80.9 10.4h-.1s.1.1.2.1l-.1-.1zM92.6 10.4l-.2.2c.2-.1.2-.1.2-.2zM72.1 11.3c-.1.1-.3.2-.4.3l.4-.3z"
            />
            <path
              className="st0"
              d="M260 6c-1-.6-4.7-1.2-5.8.3-.2-.1.1-.3.2-.4-.9.2-2.2.1-3.6 0s-2.9-.2-4.2 0c-1 1.5-3.9-.6-4.8 1.4l.5-.4c.9.5-1.2 1.4-1.5 1.9-.8-1.2-.1-1-1-2l1.1.4-.3-1c-3.1 2.8-6.2-.9-8.2 1.1.1-.1.1-.3.2-.4-1.4-.5-2.3.8-3.3 1.2-.1-.5.6-.9 1.1-1.3-2.4-.3-6.4 1.2-9 .4-.9.7.4.9-.6 1.5-.8-.2-1.4-.7-.4-1.1-2.3-1.2-7.6 1-11.1-.2-1.8.8-.7 1.1-3.5 1.6.7-.5-.7-1.7 1-1.7l.2-.5c-2.8-.1-6.6-.3-8.1 1.2-.1-1.1-.5-.2-1.6-.8-.4.1 0 .2.2.2-1 .9-1.6-.1-2.3.1l.3-.2-2 .7c-.3-.2-.8-.4-.9-.7v.8c-1.1 0-.5-1-1.9-.8l.3.6c-.9-.4-2.2.4-2.4-.5 0-.2.1-.1.4-.1-1.3-1.2-3.5.3-5.1-.3l.4 1.3c-1.6.4-1-.3-.9-.7-1.1 0-1.3-.4-2.7-.6-.7.3-.4.5-.6.8l-1.5-.4 1-.7c-2.3 1.8-5.6-.4-7.2 1.2-.8-.4.8-.7.3-1-2.6-.9-6 1-8.2 0-3.6-1-7.8-.4-11.8-1.1l.1.3-2.9-.4c-.8.7-2.7.3-4 1.1.1-.3-.1-.7.2-.9-1.2.1-2.6.4-3.3-.1l.4-.3c-2.7-.3-6.4-.5-7.9.1-.9 0-.9-.6-1.1-1-1.6-.1-2.6.2-3.9.7-.3-.2-.7-.3-1-.6l-.6.8c-.6-.1-.1-.7-.6-.9-2.5.9-5.3-.1-7-.1l.2.4c-.7.3-2.1-.3-1.2-.7-3.4-.6-5.1 1.2-9.6.8-.6-1.5-4.1.3-4.8-1.4-1.9.4-3.2-.3-4.5.6 0-.2-.2-.2.1-.3-.8-.6-3.3-.2-5.3.2l-.1-.5c-.9 1.2-4.2.9-4.9 2-.2-.2.4-.5.7-.7-1-1.1-1.8.5-3.1.2.1-.3-.3-.6 0-.8-4.4-1.2-10.6.7-16.3-.1-1.6 0 .6 1.2-1.5 1.1-.6-.6 1-1.1-.3-1.4-.9.7-1.3.5-2.6.5.2-.4 0-.6.9-.9-.7-.5-3.1.9-4.5 0 .1.3-.2.5-.5.7-2.1 1-4.9-.9-5.1-.4 0 0-.7.2-.1.3-.8 0-1.9-.2-1.7-.7-.4.3-.8.8-1.4.8l.3-.6c-.4.1-.8.5-1.1.6l.6.4c-.9-.5-2.6.8-2.6-.4h.3l-1.7-.5c-.7.5-1.3 1-2.5.9-.5-1.3-2.9-.2-4.3-.3l.1-.4c-1.1.6-4 .4-3.5.6-1.1 0-2.6-.2-2-.6-.8.1-2.7.1-3.2.9l-1.8-1c-1 1.6-3.6-.5-3.6 1.2-1-.2-.8-.6-1.5-.9-1.4.9-2.8.8-4.2.7v-.2c-1.4-.1-3.1.8-5.1 1l-.5-1.2c-1 .2-1.3 1.2-2.3 1-.2-.2 0-.3.2-.3-1 .3-2.3.1-3.1-.2-1.5 1-2.7.7-3.9 1.8-1.3-1 1.7-.6.6-1.6-2.2-.4-4.4.4-6.7 1.1-.2-.2 0-.4.1-.7 0 0-1.2.9-2.2 1.8C.9 8.3 0 9.4.5 10c-.5.9-1.2 1.4.9 2 .6-.5 2.5-1.3 2.9-.4l.1-.9c2.6-.6.4 1.8 3.6 1.6l-.7-.3c.6-.1 1.1-.7 1.8-.5.2.2-.2.4-.5.6.9-.5 1.7-.9 2.6-1.4.1.5.1.8-.4 1.2 2.5-.2-.6-1.6 2.4-1.4.6.4-.2.6-.5.9 1.4.7 2.3-.1 3.8-.6.1.8-.9.7.3 1.2-.3-.4-.5-1.1.5-1.2-.4.8.7.4 1.6.5-.2-.3-.1-.6.2-.8.4-.1.8.1 1.4.1l-1.1-.7c1.5-.8 2.4.3 3.6.6-.1.1-.3.3-.5.3 1.2.3 2.5.9 4.1.1l-.3.1c2.9-.9-1-1.3 2.4-2.2 1.1.1-.4 2.6 2.1 1.6-1.3-.6 1.6-1.7 3.1-2L32.4 10c.6 0 1.6-.5 2-.3l-.1-.3c-.2-1.3 1.9.1 3-.7-1.3 1.8-1.4 1.5-1.6 3.2 1-1 2.2-1.9 4.1-1.8l-1.5 1.4c2.5.2 5.5-1.9 7.6-3-.5 1 .3 1.4-.6 2.2l2.4-.3-.7 1.1c1-1.2 2.1-.4 1.9-1.9-.3.2-.2.4-.7.3.1-.4.5-1.4 1.7-1.3.9.3-.5.6-.2 1 .8-.6.9.3 1.7-.1l-.8-.6c.6-.9 1.4-.1 2.2-.5-1 .4-.7.9-.3 1.4l-.1-.1c.8-.1 1.6-.7 2-.2l-.5 1.2.9-.9c.3.1.6.6 0 .8 2.8.7-.1-2.5 3.6-1.5 0 .5-.4.8-1.4.5-.2.7.1 1.1 1.1 1.4v.1c1.9 0 4.4 0 5.6-.8.4.3 0 .6-.4.9 2.1.4 2.8-.7 5 .1l-1-.4c1.4-.6 4-.8 5.3.1l-.4.3c1.3-.7 3.5.6 4 0-.6-.4 0-.6-.8-1l3.4-.7.2 1.2 1.8-.4c-.4-.5 2.4.4 2.5-.7 1 .4-.4.9-.8 1.4 1-.3 1.1.2 2.1-.5l1 1.1 2.6-.7c-.1.1 0 .2-.1.3 1.2-.9 3.1.6 4.6-.9-.1.1-.1.1-.1.2.9-.8 2.9-.2 3.7 0 1.4-.2.6-1 .6-1.4 3.9.4 2.7.3 6-.9 2 1.4-2.4 2.1.1 3 .4-.6 2.1-1.1 4.1-1.3 1.8.5 4.8.9 6.5 1.9l-.2-.9 2.6-.4-1.5 1.2c.4-.3 1.7-.8 2.6-1.2 2.7-.7 1.4 1.9 3.5.7.1.1.1.2.2.3.7-.6 2.4-.3 4.4-.5l-.7 1.1-1.3-.3c.7 1.1 2.1-.1 3.4 0 1.3-.3.7-1.3 1.4-1.6.5.1 1.2-.2 1.6.1 1.1.4.1 1.3-.3 1.8 1-1.1 1.4-.9 3.6-1.3.1.5-.1.8-.4.9.5-.1.9-.3 1.2-.8l.7.7c2.5 1 2.6-2 5.6-1.5-.8.6 2.6 0 3.5.7-1.1.1.4 1.6-.2 2.3 2.4.5 1-1.3 3-1.4l-.9 1.3c1.9-.5.5-.7 2.4-1.1-.5.4.8.4-.3.8 2.5.2 1.9.1 4.1.3l.2-1.3c.7-.1 1 .5 1.2.7-.3 0-.8-.1-.7.1.8 1.2 1.4-.6 2.4.5-.2-.4-.5-1 .4-1.1-.3.8 1.4.8 1.4 1.2-.6-.6 2-.2 2.1-1 1 .7-.4.6-.4 1.1.9-1 3.7 0 4.6-.6 0 .1.1.1.1.2 1.2-.6 3-.7 5.3-1.5l-.8.7c2.2.4 1.4-1.5 3.3-1.5-.4 1.1 3.1 0 2.2 1.2 1.1-.6 2.3-.8 3.1-1.7 1 .6-2.1 1.4-.6 1.8l1.6-.5.3.6c.1-.4 1.5-.4 1.4-.8.2.7.9 1.2.8 1.8 1-.2 2.4.5 3.3-.1l.1.3c1-1.3 3.1-.2 3.6-1.5l.6.7c1.5-.1 1.3-1.5 2-1.8.6 0 1.4-.2 2 0-2 .8 1 1.1 1.4 1.6.8 0 3.1 0 3.7-.7-1 .7-.4 1.2-2.1 1.3.9 1.3 2.6-.2 4.5-.1v.6c2.7-.4 2.8-1.5 4-2.5.3.8.1 1-.7 1.7 1.8.5 4.7-.1 6.7 0 .6.5.2.9-.5 1.1 2.1-.6 4.7.1 6-1.2-.5.5.9.3 1.6.6 0-.3.1-.6.2-.6 1.3-.6 4.1-1.1 5.6-.7l-.5.4c1.7.1 3-.5 4.3-.9 1.3-.4 2.6-.8 4.5-.4.7.3-.7 1.1.7 1 .7-.5.4-1.5 2.2-1.3l-.1.9 1.2-.9c-.7-.7-2.6-.4-1.3-1.2 1.6.8 1.3-.9 3.3 0-.4.1-1 .8-1.3 1.2 2 .4 3.4.1 4.8-.1 1.4-.3 2.8-.6 4.9-.2 2-.8 4.6-1.2 5.9-1.9 0 .9 0 1.7-.8 2.4 1.8 0 2.4-2.1 3.7-.9.7-1.3 4.7-1.2 5-3l2-.8z"
            />
            <path
              className="st0"
              d="M58.1 11.1c-1 0-1.9 0-2.3.2.2.2 2.3.6 2.3-.2zM208.2 13.3c-.1 0-.3.1-.4.1.1 0 .3 0 .4-.1zM216.3 12.9c-.1-.1-.2-.2-.4-.3 0 .3.1.5.4.3zM132.6 11.5zM178.5 13.7c.7-.4 1-.7 1-1-.4.1-.7.3-1 1zM163 12.6c-.1.1-.2.1-.3.2.3-.1.3-.2.3-.2zM130.2 12c.7-.4 1.6-.3 2.4-.5-.7.2-1.9-.3-2.4.5zM226.1 11.4l-.7.6.8-.4zM218.6 12c-.3-.1-1.7.3-1.3.6.4-.3.9-.5 1.3-.6zM189.6 11.4l-.3.6.7-.5z"
            />
          </svg>
          <span className="relative px-2 text-blue-800 dark:text-indigo-200">
            workflow
          </span>
        </span>
      </h2>
      <p className="mb-12 mt-6 text-gray-600 dark:text-gray-300 md:mx-auto md:w-5/6 lg:w-1/2">
        Saepe nulla ab nobis itaque corporis fuga illo doloribus sequi esse
        aspernatur impedit nihil quisquam, voluptates placeat architecto
        adipisci id cum enim.
      </p>
      <a
        href="contact.html"
        className="relative mx-auto flex h-11 w-max items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition-transform before:duration-300 active:duration-75 active:before:scale-95 dark:before:bg-primaryLight"
      >
        <span className="relative text-base font-semibold text-white dark:text-gray-900">
          Get started
        </span>
      </a>
    </div>
  </div>
</section>

   </>
  );
};

export default Test;
