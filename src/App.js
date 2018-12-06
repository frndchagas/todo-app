import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Sobre from "./components/sobre";
import NavBar from "./components/navBar";
import Main from "./components/main";
import "./App.css";

class App extends Component {
  state = {
    todos: [
      { id: 1, value: "Tarefa 1", completed: true },
      { id: 2, value: "Tarefa 2", completed: false },
      { id: 3, value: "Tarefa 3", completed: false }
    ],
    text: ""
  };

  handleChange = e => {
    const text = e.target.value;
    this.setState({ text });
  };

  handleCompleted = todo => {
    const todos = this.state.todos.map(task => {
      if (task.id === todo.id) return { ...task, completed: !task.completed };
      return task;
    });
    this.setState({ todos });
  };

  handleDeleted = todo => {
    const todos = this.state.todos.filter(t => t.id !== todo.id);
    this.setState({ todos });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { text, todos: prevTodos } = this.state;
    //const last = this.state.todos.slice(-1);
    const last = prevTodos[prevTodos.length - 1];
    const todos = [...prevTodos];
    todos.push({
      id: last.id + 1,
      value: text,
      completed: false
    });
    this.setState({ todos, text: "" });
    document.getElementById("tarefa").value = "";
  };

  render() {
    const { todos } = this.state;
    return (
      <div className="container">
        <NavBar />
        <Switch>
          <Route
            path="/tarefas"
            render={() => (
              <Main
                todos={todos}
                onCompleted={this.handleCompleted}
                onDeleted={this.handleDeleted}
                onSubmit={this.handleSubmit}
                onChange={this.handleChange}
              />
            )}
          />
          <Route path="/sobre" component={Sobre} />>
          <Redirect from="/" exact to="/tarefas" />
        </Switch>
      </div>
    );
  }
}

export default App;
