import React, { useState, useContext } from "react";
import "./style.css";
import {  QuotesContext } from "../../context/app_context";

const AddQuote = () => {
  const { dispatch } = useContext( QuotesContext);
  const [quote, setQuote] = useState("Quote of the day");
  const handleChange = e => {
    setArticle({
      ...quote,
      [e.target.id]: e.target.value
    });
  };

  const handleSaveChanges = e => {
    e.preventDefault();
    dispatch({ type: "ADD_QUOTES", payload: {quote} });
  };

  return (
  	<>
  	  <h1 data-testid="typingQuote">{ counter }</h1>
    <form onSubmit={handleSaveChanges} className="add-quotes">
      <input
        type="text"
        id="title"
        placeholder="By Author"
        onChange={handleChange}
        data-testid="inputA"
      />
      <input
        type="text"
        id="body"
        placeholder="Inspire Someone!!!"
        onChange={handleChange}
         data-testid="inputB"
      />
      <button data-testid='button-up'>Save</button>
    </form>
    </>
  );
};
export default AddQuote;
