import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import info from '../data/info.json'


export default function Header() {
  const [theme, setTheme] = useState('corporate');

  const toggleTheme = () => {
    const newTheme = theme === 'corporate' ? 'black' : 'corporate';
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


  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const handleClick = () => {
    setIsMenuVisible(!isMenuVisible);
  };
  return (

<>
   

    <header className="sticky top-0 inset-x-0 flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full  border-b border-gray-200 text-sm py-3 sm:py-0 dark:bg-gray-800 dark:border-gray-700 bg-opacity-20 backdrop-filter backdrop-blur-lg bg-white bg-opacity-20">

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
              <a>About Us</a>
            </li>
          {/*   
            <span className="text-blue-500 justify-between z-40 hover:cursor-pointer hover:bg-blue-300" onClick={handleClick}>Services >  </span>

            {isMenuVisible && (
            <ul className="rounded-box p-2 bg-base-100">
            <span className="text-green-500">Web</span>
      <li><Link to="/services/webservice/website">Web</Link> <ul className="rounded-box p-2 bg-base-100"> 
            <span className="text-green-500">Blockchain</span>
      
      <li><a>Submenu 2</a></li>
      <li><a>Submenu 3</a></li>
      <span className="text-green-500">Blockchain</span>
      <li><a>Submenu 1</a></li>
      <li><a>Submenu 2</a></li>
      <li><a>Submenu 3</a></li>
    </ul></li>
      <li><a>Submenu 2</a></li>
      <li><a>Submenu 3</a></li>
      <span className="text-green-500">Blockchain</span>
      <li><a>Submenu 1</a></li>
      <li><a>Submenu 2</a></li>
      <li><a>Submenu 3</a></li>
    </ul>
     )}*/}
           
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
          <Link to="/" className="font-medium">Greathill ltd.</Link>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/" className="font-medium">Home</Link>
          </li>

          <li tabIndex={0}>
            <a className="font-medium ">
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
            {/*  <li className="bg-gray-100 text-gray-600">
                <Link to="/about/philosophy">Our Philosophy</Link>
                
                
      </li> */ }
            </ul>
          </li>
         {/* <li tabIndex={0}>
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
  <li><Link to="/services/webservice/">Web ></Link>
  <ul className="menu bg-base-100  bg-secondary text-secondary-content w-56 p-2 rounded-box">
  <li className="menu-title">
    <span>Category</span>
  </li>
  <li> <Link to="/services/webservice/website">Web</Link></li>
  <li><a>Blockchain</a></li>
  

</ul ></li>
<li><Link to="/services/webservice/">Blockchain ></Link>
  <ul className="menu bg-base-100  bg-secondary text-secondary-content w-56 p-2 rounded-box">
  <li className="menu-title">
    <span>Category</span>
  </li>
  <li> <Link to="/services/webservice/blockchain/crypto">Crypto</Link></li>
  <li><Link to="/services/webservice/blockchain/web3">Web3</Link></li>
  

</ul ></li>

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
          </li>*/}

          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
       
      </div>
      <div className="navbar-end">
     
      <label  className="swap swap-rotate">
  
  {/* this hidden checkbox controls the state */}
  <input onClick={toggleTheme} type="checkbox"  />
  
  {/* sun icon */}
  <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
  
  {/* moon icon */}
  <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
  
</label>
  </div>
    </div>
    </header>

   
</>
  );
}
