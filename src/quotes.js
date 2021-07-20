import React from "react";
import { useState, useEffect } from "react";

function Quote() {
  const [quote, setQuote] = useState([]);
  useEffect(() => {
    fetch("https://node-challenge-qoute-server.herokuapp.com/quote")
      .then((response) => response.json())
      .then((data) => setQuote(data));
  }, []);

  return (
    <div>
      <p>
        {quote.length > 0
          ? quote[Math.floor(Math.random() * quote.length)].quote
          : "waiting....."}
      </p>
    </div>
  );
}
export default Quote;
