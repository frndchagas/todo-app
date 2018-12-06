import React from "react";
import Todo from "./todo";
import store from "./../store/store";
import { setCompleted } from "../actions/actions";
import { deleteCurrentTask } from "./../actions/actions";

const Todos = () => {
  const { todos } = store.getState();

  return todos.map(todo => (
    <Todo
      key={todo.id}
      todo={todo}
      onCompleted={todo => handleCompleted(todo)}
      onDeleted={todo => handleDeleted(todo)}
    />
  ));
};

const handleCompleted = todo => {
  store.dispatch(setCompleted(todo.id));
};

const handleDeleted = todo => {
  store.dispatch(deleteCurrentTask(todo.id));
};

export default Todos;
