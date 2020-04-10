import { createGlobalStyle } from "styled-components";

const Globals = createGlobalStyle`
  *{
    margin: 0px;
    padding: 0px;
    font-family: 'Nunito Sans', sans-serif;
    text-decoration: none;
    list-style: none;
  }
  
  #root > *{
    padding-left: 10vw;
    padding-right: 10vw;
  }

  a{
    color: black
  }
`;

export default Globals;
