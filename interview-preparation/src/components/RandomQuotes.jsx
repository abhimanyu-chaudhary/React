import React, { useState } from "react";

function RandomQuotes() {
  const quotes = [
    {
      quote: "The only way to do great work is to love what you do.",
      author: "Steve Jobs",
    },
    {
      quote:
        "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      author: "Winston Churchill",
    },
    {
      quote: "The best way to predict the future is to create it.",
      author: "Peter Drucker",
    },
    {
      quote:
        "Your time is limited, so don't waste it living someone else's life.",
      author: "Steve Jobs",
    },
    {
      quote: "Believe you can and you're halfway there.",
      author: "Theodore Roosevelt",
    },
    {
      quote:
        "The harder you work for something, the greater you'll feel when you achieve it.",
      author: "Unknown",
    },
    {
      quote: "Don't watch the clock; do what it does. Keep going.",
      author: "Sam Levenson",
    },
    {
      quote:
        "The only limit to our realization of tomorrow is our doubts of today.",
      author: "Franklin D. Roosevelt",
    },
    {
      quote:
        "The future belongs to those who believe in the beauty of their dreams.",
      author: "Eleanor Roosevelt",
    },
    {
      quote: "It does not matter how slowly you go as long as you do not stop.",
      author: "Confucius",
    },
  ];

  const [number, setNumber] = useState(Math.floor(Math.random() * 10));
  const handleChange = () => {
    setNumber(Math.floor(Math.random() * 10));
    return setNumber;
  }

  return ( 
    <div className="flex flex-col items-center max-h-screen py-[20%]">
        <h1 className="font-semibold text-lg">{quotes[number].quote}</h1>
        <h5 className="font-semibold text-sm italic">{quotes[number].author}</h5>
        <button className="py-1 px-3 bg-green-500 my-5 rounded-md" onClick={handleChange}>Get Motivated</button>
    </div>
  );
}

export default RandomQuotes;
