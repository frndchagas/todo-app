import React, { Component } from "react";
import Todo from "./todo";

class Todos extends Component {
  render() {
    const { onDeleted, onCompleted, todos } = this.props;

    return todos.map(todo => (
      <Todo
        key={todo.id}
        todo={todo}
        onCompleted={onCompleted}
        onDeleted={onDeleted}
      />
    ));
  }
}

export default Todos;
