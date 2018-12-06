import React, { Component } from "react";
import AddTask from "./addTask";
import Todos from "./todos";

export default class Main extends Component {
  render() {
    const { todos, onCompleted, onDeleted, onSubmit, onChange } = this.props;

    return (
      <React.Fragment>
        <AddTask onSubmit={onSubmit} onChange={onChange} />
        <Todos todos={todos} onCompleted={onCompleted} onDeleted={onDeleted} />
      </React.Fragment>
    );
  }
}
