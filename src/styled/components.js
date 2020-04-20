import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: none;
  color: black;
  box-shadow: -1px -1px 5px 0px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  background-color: white;
  cursor: pointer;
`;

export const MainWrapper = styled.main`
  padding-top: 50px;
  padding-bottom: 5vh;
  height: 100vh;
  background-color: hsl(0, 0%, 98%);
  box-shadow: inset 5px 8px 10px -6px rgba(0, 0, 0, 0.1);
`;
