import { createGlobalStyle } from "styled-components";

const Globals = createGlobalStyle`
  *{
    margin: 0px;
    padding: 0px;
    font-family: 'Nunito Sans', sans-serif;
    text-decoration: none;
    list-style: none;
  }
  body{
    background-color: ${({ theme }) => theme.theme.background};
  }

  #root > *{
    padding-left: 7vw;
    padding-right: 7vw;
  }

  a{
    color: ${({ theme }) => theme.theme.color};
  }
`;

export default Globals;
