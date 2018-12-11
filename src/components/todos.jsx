import React from "react";
import Todo from "./todo";
import { connect } from "react-redux";

const Todos = props => {
  const { todos } = props;
  if (todos.length > 0)
    return todos.map(todo => <Todo key={todo.id} todo={todo} />);
  else return <h1>Não existem tarefas criadas.</h1>;
};

const mapStateToProps = ({ todos }) => {
  return { todos };
};
export default connect(mapStateToProps)(Todos);
