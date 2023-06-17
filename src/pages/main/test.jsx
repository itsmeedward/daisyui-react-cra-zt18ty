import React, { useEffect } from 'react';

const Test = () => {
  useEffect(() => {
    const imgElement = document.getElementById('animation-img');

    if (imgElement) {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/lottie-web@5.7.9/build/player/lottie.min.js';
      script.async = true;

      script.onload = () => {
        window.lottie.loadAnimation({
          container: imgElement,
          renderer: 'svg',
          loop: true,
          autoplay: true,
          path: 'https://assets3.lottiefiles.com/packages/lf20_eOLhtkf7AY.json'
        });
      };

      document.body.appendChild(script);
    }
  }, []);

  return (
    <img id="animation-img" alt="Lottie Animation" />
  );
};

export default Test;
