import React, { useState } from "react";
import styled from "styled-components";

import { ReactComponent as RegularMoon } from "../assets/moon-regular.svg";
import { ReactComponent as SolidMoon } from "../assets/moon-solid.svg";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  font-weight: bold;
  background-color: #fff;
  box-shadow: 5px 15px 14px -6px rgba(0, 0, 0, 0.44);
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

const IconLight = styled(RegularMoon)`
  width: 25px;
  height: 25px;
  margin-right: 10px;
`;

const IconDark = styled(SolidMoon)`
  width: 25px;
  height: 25px;
  margin-right: 10px;
`;

const Header = () => {
  let [dark, setDark] = useState(false);
  return (
    <StyledHeader>
      <h1>Where in the world?</h1>
      {dark === true ? (
        <Button onClick={() => setDark(!dark)}>
          <IconDark /> Light Mode
        </Button>
      ) : (
        <Button onClick={() => setDark(!dark)}>
          <IconLight /> Light Mode
        </Button>
      )}
    </StyledHeader>
  );
};

export default Header;
