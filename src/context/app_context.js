import React, { createContext, useReducer } from "react";
import { reducer } from "./reducer";
export const QuotesContext = createContext();
const initialData = [
    { id: 1, author: "Someone Doe", body: "Race of life" },
    { id: 2, author: "Sombody Jackson", body: "Truth is false" }
];
export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_QUOTES":
      return [
        ...state,
        {
          id: Math.random(), 
          author: action.payload.author,
          body: action.payload.body
        }
      ];
    default:
      return state;
  }
};
const QuotesContextProvider = ({ children }) => {
  const [quotes, dispatch] = useReducer(reducer,  initialData);
  return (
    <QuotesContext.Provider value={{ quotes, dispatch }}>
      {children}
    </QuotesContext.Provider>
  );
};

export default QuotesContextProvider;