 import React from "react";
import "./quote.css";

const Quote = ({ quote }) => (
  <div className="quote">
    <p>{quote.body}</p>
    <h1>{quote.author}</h1>
  </div>
);

export default Quote;
