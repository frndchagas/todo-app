import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import NavBar from "./components/navBar";
import Main from "./components/main";
import sobre from "./pages/sobre";

import "./App.css";

const App = () => {
  return (
    <div className="container">
      <NavBar />
      <Switch>
        <Route path="/tarefas" component={Main} />
        <Route path="/sobre" component={sobre} />>
        <Redirect from="/" exact to="/tarefas" />
      </Switch>
    </div>
  );
};

export default App;
