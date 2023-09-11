import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../logo.png';
import info from '../data/info.json'
import navigationData from '../data/navigationFooter.json'

export default function Footer() {
  return (
    <>
    <footer className="border-gray-800	border">
  <div className="container px-6 py-12 mx-auto">
    
    <hr className="my-6 border-gray-200 md:my-10 dark:border-gray-700" />
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
  
    </div>
    <hr className="my-6 border-gray-200 md:my-10 dark:border-gray-700" />
    <div className="flex flex-col items-center justify-between sm:flex-row">
      <a href="#">
        <img
          className="w-auto h-7"
          src={Logo}
          alt=""
        />
      </a>
      <p className="mt-4 text-sm text-gray-500 sm:mt-0 ">
        © Copyright 2021 - {' '+currentDate}. All Rights Reserved. Managed with 💙 love 
      </p>
    </div>
  </div>
</footer>

    </>
  );
}
const currentDate = new Date().getFullYear();
