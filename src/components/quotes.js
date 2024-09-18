 import React from "react";
import "./quote.css";

const Quote = ({ quote ={body: "test", author:"victor"} }) => (
  <div className="quote">
    <p data-testid2="bodytext">{quote.body}</p>
    <h1 data-testid="author">{quote.author}</h1>
  </div>
);

export default Quote;
