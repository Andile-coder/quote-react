import React from "react";
import { useState, useEffect } from "react";

function Quote() {
  const [quote, setQuote] = useState([]);
  useEffect(() => {
    fetch("https://node-challenge-qoute-server.herokuapp.com/quote")
      .then((response) => response.json)
      .then((data) => setQuote(data));
  }, []);

  return (
    <div>
      <p>helloworld {quote[1].quote} </p>
    </div>
  );
}
export default Quote;
