import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


export default function Header() {
  const [theme, setTheme] = useState('winter');

  const toggleTheme = () => {
    const newTheme = theme === 'winter' ? 'night' : 'winter';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);
  return (

<>
   

    <header className="sticky top-0 inset-x-0 flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white border-b border-gray-200 text-sm py-3 sm:py-0 dark:bg-gray-800 dark:border-gray-700">

    <div className="navbar  bg-base-100 z-40">
      <div className="navbar-start z-40">
        <div className="dropdown z-40">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-300 rounded-box w-52 z-40"
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Home</a>
            </li>
            <li tabIndex={0} className="z-40">
              <a className="justify-between z-40">
                About
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1awd</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>

        {/**  <img
          alt="Logo, greathill"
          src={Logo}
          className="btn btn-ghost normal-case text-xl"
        />
         <Link to="/">Home</Link >
        */}

        <a className="btn btn-ghost normal-case text-xl">
          {' '}
          <Link to="/">Greathill ltd.</Link>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li tabIndex={0}>
            <a>
              About
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </a>
            <ul className="p-2">
              <li className="bg-gray-100 text-gray-600">
                <Link to="/about">About Us</Link>
                
                
              </li>
              <li className="bg-gray-100 text-gray-600">
                <Link to="/about">About </Link>
                
                
              </li>
            </ul>
          </li>
          <li tabIndex={0}>
            <Link to="/services">
              Services
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </Link>
            
            <ul className="p-2">
            <ul className="menu bg-base-100 w-56 p-2 rounded-box">
  <li className="menu-title">
    <span>Web</span>
  </li>
  <li><a>Item 1</a>
  <ul className="menu bg-base-100  bg-secondary text-secondary-content w-56 p-2 rounded-box">
  <li className="menu-title">
    <span>Category</span>
  </li>
  <li><a>Item 1</a></li>
  <li><a>Item 2</a></li>
  

</ul ></li>
  <li><a>Item 2</a></li>

  <li className="menu-title">
    <span>Category</span>
  </li>
  <li><a>Item 1</a></li>
  <li><a>Item 2</a></li>
</ul>
              <li className="bg-gray-100 text-gray-600">
                <Link to="/services/webservice/">Web</Link>
              </li>
              <li className="bg-gray-100 text-gray-600">
                <Link to="/services/webservice/blockchain">Blockchain</Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
       
      </div>
      <div className="navbar-end">
      <input onClick={toggleTheme} type="checkbox"   checked={theme === 'night'} className="toggle"/>

  </div>
    </div>
    </header>

   
</>
  );
}
