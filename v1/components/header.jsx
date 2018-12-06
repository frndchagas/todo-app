import React, { Component } from "react";

export default class Header extends Component {
  tarefa = React.createRef();

  state = { value: "" };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = event => {
    console.log(this.tarefa.current.value);
    event.preventDefault();
  };

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
            value={this.state.text}
            ref={this.tarefa}
            onChange={this.handleChange}
          />
        </div>

        {/* <button className="btn btn-secondary btn-sm m-2" type="submit">
          Adicionar
        </button> */}
        <button type="submit" className="btn btn-secondary m-2">
          Adicionar
        </button>
      </form>
    );
  }
}
