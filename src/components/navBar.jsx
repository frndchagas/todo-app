import React from 'react';
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';

const NavBar = ({ count }) => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link className="navbar-brand" to="/">
      Todo App
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div>({count})</div>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <NavLink className="nav-item nav-link" to="/tarefas">
          Tarefas
        </NavLink>
        <NavLink className="nav-item nav-link" to="/sobre">
          Sobre
        </NavLink>
      </div>
    </div>
  </nav>
);

const mapStateToProps = ({ todos }) => {
  return { count: todos.length };
};

export default connect(mapStateToProps)(NavBar);
