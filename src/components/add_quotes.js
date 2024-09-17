import React, { useState, useContext } from "react";
import "./style.css";
import {  QuotesContext } from "../../context/app_context";

const AddQuote = () => {
  const { dispatch } = useContext( QuotesContext);
  const [quote, setQuote] = useState();
  const handleChange = e => {
    setArticle({
      ...quote,
      [e.target.id]: e.target.value
    });
  };

  const handleSaveChanges = e => {
    e.preventDefault();
    dispatch({ type: "ADD_QUOTES", quote });
  };

  return (
    <form onSubmit={handleSaveChanges} className="add-quotes">
      <input
        type="text"
        id="title"
        placeholder="By Author"
        onChange={handleChange}
      />
      <input
        type="text"
        id="body"
        placeholder="Inspire Someone!!!"
        onChange={handleChange}
      />
      <button>Save</button>
    </form>
  );
};
export default AddQuote;
