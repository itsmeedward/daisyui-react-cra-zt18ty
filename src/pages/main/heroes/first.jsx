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

    </>
  );
}
export default First;
