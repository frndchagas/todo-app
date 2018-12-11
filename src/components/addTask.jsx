import React, { Component } from "react";
import { connect } from "react-redux";
import { addTask } from "./../actions/actions";

class AddTask extends Component {
  state = { text: "" };

  handleSubmit = e => {
    e.preventDefault();
    const { onAddTask } = this.props;
    const { text } = this.state;
    onAddTask(text);
    this.setState({ text: "" });
  };

  handleChange = e => {
    this.setState({ text: e.target.value });
  };

  render() {
    const { text } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className="m-2">
        <div className="form-group">
          <label htmlFor="tarefa">Adicionar Tarefa</label>
          <input
            autoFocus
            className="form-control"
            type="text"
            value={text}
            onChange={this.handleChange}
          />
        </div>

        <button type="submit" className="btn btn-secondary m-2">
          Adicionar
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = {
  onAddTask: addTask
};

export default connect(
  null,
  mapDispatchToProps
)(AddTask);
