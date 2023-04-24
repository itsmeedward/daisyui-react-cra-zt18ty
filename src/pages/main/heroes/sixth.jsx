import React, { useState, useEffect } from 'react';

export default function Sixth() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    fetch('https://api.quotable.io/random')
      .then((res) => res.json())
      .then((quote) => {
        setQuote(quote.content);
        setAuthor(quote.author);
      });
  }, []);

  return (
    <>
    <section className="">
  <div className="container flex flex-col items-center px-4 py-12 mx-auto text-center">
    <h2 className="max-w-2xl mx-auto text-2xl font-semibold tracking-tight  xl:text-3xl ">
     {quote}
     
    </h2>
    <p className="max-w-4xl mt-6 text-center ">
    -<span className="text-blue-500">{author}.</span>
    </p>
  </div>
</section>

    </>
  );
}
