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
      <h1 className="text-center text-5xl font-bold text-blue-900 dark:text-white sm:text-6xl lg:text-left lg:text-7xl">
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
          <p className="mt-12 text-lg text-gray-600 dark:text-gray-300 sm:text-xl">
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
          className="text-sm font-semibold tracking-wider text-gray-800 dark:text-white"
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
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white md:text-4xl lg:text-5xl">
          Just focus on your business startegy
        </h2>
        <p className="my-12 text-gray-600 dark:text-gray-300">
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
                className="m-auto h-6 w-6 text-gray-700 dark:text-gray-300"
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
                className="m-auto h-6 w-6 text-gray-700 dark:text-gray-300"
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
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white md:w-2/3 md:text-3xl lg:text-4xl">
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
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                Safelus
              </h4>
              <p className="mt-3 text-gray-600 dark:text-gray-400">
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
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                Paylus
              </h4>
              <p className="mt-3 text-gray-600 dark:text-gray-400">
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
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                TL Certification
              </h4>
              <p className="mt-3 text-gray-600 dark:text-gray-400">
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
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white md:text-3xl lg:text-4xl">
          Go beyond with our top products
        </h3>
        <p className="my-12 text-gray-600 dark:text-gray-300">
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

   </>
  );
};

export default Test;
