import React from "react";

import HomePage from "../HomePage/HomePage";
import Nav from "../Nav/Nav";

import { Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Nav />
      <Switch>
        <HomePage />
      </Switch>
    </>
  );
};

export default App;
