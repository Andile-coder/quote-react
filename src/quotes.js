import React from "react";
import { useState, useEffect } from "react";

function Quote() {
  const [quote, setQuote] = useState([]);
  useEffect(() => {
    fetch("https://andile-quoteserver.glitch.me/quotes")
      .then((response) => response.json)
      .then((res) => setQuote(res));
  }, []);

  return (
    <div>
      <p>{quote.quote} hello world</p>
    </div>
  );
}
export default Quote;
