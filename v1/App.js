import React, { Component } from "react";
import "./App.css";
import Todos from "./components/todos";
import Header from "./components/header";

class App extends Component {
  state = {
    todos: [
      { id: 1, value: "Tarefa 1", completed: true },
      { id: 2, value: "Tarefa 2", completed: false },
      { id: 3, value: "Tarefa 3", completed: false }
    ]
  };

  handleCompleted = todo => {
    // const todos = { ...this.state.todos };
    const todos = this.state.todos.map(t => {
      if (t.id === todo.id)
        t.completed === true ? (t.completed = false) : (t.completed = true);
      return t;
    });

    this.setState({ todos });
  };

  handleDeleted = todo => {
    const todos = this.state.todos.filter(t => t.id !== todo.id);
    this.setState({ todos });
  };

  handleSubmit = e => {
    const last = this.state.todos.slice(-1);
    let todos = this.state.todos;
    todos.push({
      id: last[0].id + 1,
      value: document.getElementById("tarefa").value,
      completed: false
    });
    this.setState({ todos });
    //O ponto principal do react é nunca precisar acessar nada via Vanilla Javascript, ou, exemplo:
    //document.getElementById("tarefa")
    document.getElementById("tarefa").value = "";

    //Evita que a página seja recarregada
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <Header onSubmit={this.handleSubmit} />
        <Todos
          todos={this.state.todos}
          onCompleted={this.handleCompleted}
          onDeleted={this.handleDeleted}
        />
      </div>
    );
  }
}

export default App;
