import React, { useContext } from "react";
import styled from "styled-components";

import { ThemeContext } from "../../styled/themes/context";

import { ReactComponent as RegularMoon } from "../../assets/moon-regular.svg";
import { ReactComponent as SolidMoon } from "../../assets/moon-solid.svg";

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

const Button = styled.button`
  display: flex;
  align-items: center;
  width: 120px;
  height: 25px;
  border: none;
  color: ${({ theme }) => theme.theme.color};
  font-weight: bold;
  font-size: 16px;
  background: none;
  cursor: pointer;
`;

const ThemeSwitcher = () => {
  let { toggleTheme, dark, setDark } = useContext(ThemeContext);

  return dark === false ? (
    <Button
      onClick={() => {
        toggleTheme();
        setDark(!dark);
      }}
    >
      <IconLight /> {"Light Mode"}
    </Button>
  ) : (
    <Button
      onClick={() => {
        toggleTheme();
        setDark(!dark);
      }}
    >
      <IconDark /> {"Light Mode"}
    </Button>
  );
};

export default ThemeSwitcher;
