import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import NavBar from "./components/navBar";
import Main from "./components/main";
import "./App.css";
import sobre from "./pages/sobre";

class App extends Component {
  render() {
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
  }
}

export default App;
