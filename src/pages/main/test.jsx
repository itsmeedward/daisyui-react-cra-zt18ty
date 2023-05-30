import React, { useState } from 'react';

const Test = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const handleClick = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
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
  );
};

export default Test;
