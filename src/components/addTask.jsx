import React, { Component } from "react";

export default class AddTask extends Component {
  render() {
    const { onSubmit, onChange } = this.props;
    return (
      <form onSubmit={onSubmit} className="m-2">
        <div className="form-group">
          <label htmlFor="tarefa">Adicionar Tarefa</label>
          <input
            autoFocus
            id="tarefa"
            className="form-control"
            type="text"
            onChange={e => onChange(e)}
          />
        </div>

        <button type="submit" className="btn btn-secondary m-2">
          Adicionar
        </button>
      </form>
    );
  }
}
