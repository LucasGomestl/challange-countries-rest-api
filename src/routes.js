import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import Detail from "./components/Detail";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/detail/:countryCode" component={Detail} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
