import React, { useState } from "react";
import { ThemeProvider } from "styled-components";

export const ThemeContext = React.createContext();

const themes = {
  light: {
    background: "hsl(0, 0%, 98%)",
    input: "hsl(0, 0%, 52%)",
    elements: "hsl(0, 0%, 98%)",
    color: "hsl(200, 15%, 8%)",
  },

  dark: {
    background: "hsl(207, 26%, 17%)",
    elements: "hsl(209, 23%, 22%)",
    color: "hsl(0, 0%, 100%)",
  },
};

export const ThemesProvider = ({ children }) => {
  let [theme, setTheme] = useState(themes.light);
  let [dark, setDark] = useState(false);

  const toggleTheme = () => {
    if (theme === themes.light) {
      setTheme(themes.dark);
    } else {
      setTheme(themes.light);
    }
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, dark, setDark }}>
      <ThemeContext.Consumer>
        {(theme) => <ThemeProvider theme={theme}>{children}</ThemeProvider>}
      </ThemeContext.Consumer>
    </ThemeContext.Provider>
  );
};
