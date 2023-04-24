import React from 'react';
import { BrowseRouter as Router, link } from 'react-dom';
import Fifth from './heroes/fifth';
import First from './heroes/first';
import Fourth from './heroes/fourth';
import Second from './heroes/second';
import Seventh from './heroes/seventh';
import Sixth from './heroes/sixth';
import Third from './heroes/third';

export default function Main() {
  const glass = {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    backdropFilter: 'blur(10px)',
    padding: '20px',
  };

  return (
    <>
          
      <First />
      <Second />
      <Third />
      <Fourth />
      
      <Fifth />
      <Seventh />
      <Sixth />

   
    </>
  );
}
const gradientStyles = {
  background: 'linear-gradient(to right, #ff0000, #ffff00)',
};
