import React from "react";

const Todo = props => {
  const { todo, onCompleted, onDeleted } = props;

  return (
    <div>
      <span className={getClassesText(todo)}> {todo.value} </span>
      <button
        onClick={() => onCompleted(todo)}
        className={getClassesButton(todo)}
      >
        Completado
      </button>
      <button onClick={() => onDeleted(todo)} className="btn btn-danger">
        Delete
      </button>
    </div>
  );
};

const getClassesText = todo => {
  let classes = "text m-2 ";
  classes += todo.completed === true ? "text-success" : "";
  return classes;
};

const getClassesButton = todo => {
  let classes = "m-2 btn btn-";
  classes += todo.completed === true ? "success" : "secondary";
  return classes;
};

export default Todo;
