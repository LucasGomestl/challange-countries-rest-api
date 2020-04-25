import React from "react";

import Globals from "./styled/GlobalStyle";
import Routes from "./routes";
import { ThemesProvider } from "./styled/themes/context";

function App() {
  return (
    <>
      <ThemesProvider>
        <Globals />
        <Routes />
      </ThemesProvider>
    </>
  );
}

export default App;
