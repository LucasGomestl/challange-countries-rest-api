import React from "react";
import styled from "styled-components";

import { ReactComponent as Moon } from "../assets/moon-regular.svg";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  font-weight: bold;
  background-color: #fff;
  @media (max-width: 660px) {
    font-size: 12px;
  }
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  width: 120px;
  height: 25px;
  border: none;
  font-weight: bold;
  font-size: 16px;
  background: none;
  cursor: pointer;
`;

const Icon = styled(Moon)`
  width: 25px;
  height: 25px;
  margin-right: 10px;
`;

const Header = () => {
  return (
    <StyledHeader>
      <h1>Where in the world?</h1>
      <Button>
        <Icon />
        Dark Mode
      </Button>
    </StyledHeader>
  );
};

export default Header;
