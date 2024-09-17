 import React from "react";
import "./quote.css";

const Quote = ({ quote }) => (
  <div className="quote">
    <p data-testid="bodytext">{quote.body}</p>
    <h1 data-testid="author">{quote.author}</h1>
  </div>
);

export default Quote;
