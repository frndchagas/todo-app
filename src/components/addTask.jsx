import React, { Component } from "react";
import store from "./../store/store";
import { setText } from "../actions/actions";
import { addTask } from "./../actions/actions";

export default class AddTask extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const { currentTaskName } = store.getState();
    store.dispatch(addTask(currentTaskName));
    store.dispatch(setText(""));
  };

  handleChange = e => {
    store.dispatch(setText(e.target.value));
  };

  render() {
    const { currentTaskName } = store.getState();

    return (
      <form onSubmit={this.handleSubmit} className="m-2">
        <div className="form-group">
          <label htmlFor="tarefa">Adicionar Tarefa</label>
          <input
            autoFocus
            id="tarefa"
            className="form-control"
            type="text"
            value={currentTaskName}
            onChange={e => this.handleChange(e)}
          />
        </div>

        <button type="submit" className="btn btn-secondary m-2">
          Adicionar
        </button>
      </form>
    );
  }
}
