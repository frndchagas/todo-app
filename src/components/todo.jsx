import React, { Component } from "react";

class Todo extends Component {
  getClassesText = () => {
    let classes = "text m-2 ";
    classes += this.props.todo.completed === true ? "text-success" : "";
    return classes;
  };

  getClassesButton = () => {
    let classes = "m-2 btn btn-";
    classes += this.props.todo.completed === true ? "success" : "secondary";
    return classes;
  };

  render() {
    const { todo, onCompleted, onDeleted } = this.props;

    return (
      <div>
        <span className={this.getClassesText()}> {todo.value} </span>
        <button
          onClick={() => onCompleted(todo)}
          className={this.getClassesButton()}
        >
          Completado
        </button>
        <button onClick={() => onDeleted(todo)} className="btn btn-danger">
          Delete
        </button>
      </div>
    );
  }
}

export default Todo;
