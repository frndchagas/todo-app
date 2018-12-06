import React, { Component } from "react";
import Todo from "./todo";
import store from "./../store/store";
import { setCompleted } from "../actions/actions";
import { deleteCurrentTask } from "./../actions/actions";

class Todos extends Component {
  handleCompleted = todo => {
    store.dispatch(setCompleted(todo.id));
  };

  handleDeleted = todo => {
    store.dispatch(deleteCurrentTask(todo.id));
  };

  render() {
    const { todos } = store.getState();

    return todos.map(todo => (
      <Todo
        key={todo.id}
        todo={todo}
        onCompleted={todo => this.handleCompleted(todo)}
        onDeleted={todo => this.handleDeleted(todo)}
      />
    ));
  }
}

export default Todos;
