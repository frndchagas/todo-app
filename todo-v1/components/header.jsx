import React, { Component } from "react";

export default class Header extends Component {
  render() {
    const { onSubmit } = this.props;

    return (
      <form onSubmit={onSubmit} className="m-2">
        <div className="form-group">
          <label htmlFor="tarefa">Tarefa</label>
          <input
            autoFocus
            id="tarefa"
            className="form-control"
            type="text"
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
