import React from "react";

import QuotesProvider from "./context/app_context";
import Quotes from "./components/quotes";
import AddQuotes from "./components/add_quotes";

function App() {
  return (
    <QuotesProvider>
      <AddQuotes />
      <Quotes />
    </QuotesProvider>
  );
}
export default App;
