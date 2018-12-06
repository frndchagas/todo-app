import React, { Component } from "react";
import AddTask from "./addTask";
import Todos from "./todos";

export default class Main extends Component {
  render() {
    return (
      <React.Fragment>
        <AddTask />
        <Todos />
      </React.Fragment>
    );
  }
}
