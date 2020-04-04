import React from "react";
import Home from "./components/Home";
import { createGlobalStyle } from "styled-components";

const Reset = createGlobalStyle`
  *{
    margin: 0px;
    padding: 0px;
    font-family: 'Nunito Sans', sans-serif
  }
  
  #root > *{
    padding: 0 10vw
  }
`;

function App() {
  return (
    <>
      <Reset />
      <Home />
    </>
  );
}

export default App;
