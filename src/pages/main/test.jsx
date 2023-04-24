import React, { useState } from 'react';

export default function Test() {
  const [theme, setTheme] = useState('cupcake');

  const toggleTheme = () => {
    const newTheme = theme === 'cupcake' ? 'night' : 'cupcake';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };
  const [language, setLanguage] = useState("en");

  function handleLanguageChange(event) {
    const selectedLanguage = event.target.value;
    setLanguage(selectedLanguage);

    if (selectedLanguage === "ar") {
      document.documentElement.dir = "rtl";
      // You may also want to update any other relevant styles to ensure the page is displayed correctly in RTL mode.
    } else {
      document.documentElement.dir = "ltr";
      // You may also want to update any other relevant styles to ensure the page is displayed correctly in LTR mode.
    }
  }

  return (
    <>
    <div>
      <button onClick={toggleTheme}>Toggle Theme</button>
      {/* your content here */}
    </div>
 
    <div>
      <button value="en" onClick={handleLanguageChange}>English</button>
      <button value="ar" onClick={handleLanguageChange}>Arabic</button>
      <p>{language === "ar" ? "مرحبا بالعالم" : "Hello World"}</p>
    </div>

    
    <div className="mt-12 flex gap-6 lg:gap-12 justify-between grayscale dark:grayscale-0">
          <img
            src="https://cryptologos.cc/logos/binance-coin-bnb-logo.png"
            className="h-8 sm:h-10 w-auto lg:h-12"
            alt=""
          />
          <img
            src="./images/clients/ge.svg"
            className="h-8 sm:h-10 w-auto lg:h-12"
            alt=""
          />
          <img
            src="./images/clients/coty.svg"
            className="h-8 sm:h-10 w-auto lg:h-12"
            alt=""
          />
          <img
            src="./images/clients/microsoft.svg"
            className="h-8 sm:h-10 w-auto lg:h-12"
            alt=""
          />
        </div>
    </>
)
}



