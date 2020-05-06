import React from "react";
import styled from "styled-components";

import ThemeSwitcher from "./ThemeSwitcher";

const Header = () => {
  return (
    <StyledHeader>
      <h1>Where in the world?</h1>
      <ThemeSwitcher />
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  font-weight: bold;
  color: ${({ theme }) => theme.theme.color};
  background-color: ${({ theme }) => theme.theme.elements};
  @media (max-width: 660px) {
    font-size: 12px;
  }
  @media (max-width: 500px) {
    font-size: 8px;
  }

  @media (max-width: 350px) {
    font-size: 7px;
  }
`;
