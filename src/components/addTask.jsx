import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTask } from './../actions/actions';

const INITIAL_VALUE = '';

class Addtask extends Component {
  static defaultProps = {
    value: INITIAL_VALUE
  };

  state = { value: this.props.value };

  handleSubmit = e => {
    e.preventDefault();
    const { value } = this.state;
    const { onAddTask } = this.props;
    onAddTask(value);
    this.setState({ value: this.props.value });
  };

  handleChange = e => this.setState({ value: e.target.value });

  render() {
    const { value } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className="m-2">
        <div className="form-group">
          <label htmlFor="tarefa">Adicionar Tarefa</label>
          <input
            autoFocus
            id="tarefa"
            className="form-control"
            type="text"
            value={value}
            onChange={this.handleChange}
          />
        </div>

        <button type="submit" className="btn btn-secondary m-2">
          Adicionar
        </button>

        {this.props.todos.map(todo => (
          <div key={todo.value}>{todo.value}</div>
        ))}
      </form>
    );
  }
}

const mapStateToProps = ({ todos }) => ({ todos });

const mapDispatchToProps = {
  onAddTask: addTask
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Addtask);
