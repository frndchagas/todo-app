import React, { Component } from "react";
import { setCompleted, deleteCurrentTask } from "../actions/actions";
import { connect } from "react-redux";

class Todo extends Component {
  onCompleted = todo => {
    const { onCompleted } = this.props;
    onCompleted(todo.id);
  };

  onDeleted = todo => {
    const { onDeleted } = this.props;
    onDeleted(todo.id);
  };

  getClassesText = todo => {
    let classes = "text m-2 ";
    classes += todo.completed === true ? "text-success" : "";
    return classes;
  };

  getClassesButton = todo => {
    let classes = "m-2 btn btn-";
    classes += todo.completed === true ? "success" : "secondary";
    return classes;
  };

  render() {
    const { todo } = this.props;
    return (
      <div>
        <span className={this.getClassesText(todo)}> {todo.value} </span>
        <button
          onClick={() => this.onCompleted(todo)}
          className={this.getClassesButton(todo)}
        >
          Completado
        </button>
        <button onClick={() => this.onDeleted(todo)} className="btn btn-danger">
          Delete
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onCompleted: setCompleted,
  onDeleted: deleteCurrentTask
};

export default connect(
  null,
  mapDispatchToProps
)(Todo);
