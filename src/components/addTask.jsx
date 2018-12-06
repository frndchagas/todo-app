import React from "react";
import store from "./../store/store";
import { setText } from "../actions/actions";
import { addTask } from "./../actions/actions";

const Addtask = () => {
  const handleSubmit = e => {
    e.preventDefault();
    const { currentTaskName } = store.getState();
    store.dispatch(addTask(currentTaskName));
    store.dispatch(setText(""));
  };

  const handleChange = e => {
    store.dispatch(setText(e.target.value));
  };

  const { currentTaskName } = store.getState();

  return (
    <form onSubmit={handleSubmit} className="m-2">
      <div className="form-group">
        <label htmlFor="tarefa">Adicionar Tarefa</label>
        <input
          autoFocus
          id="tarefa"
          className="form-control"
          type="text"
          value={currentTaskName}
          onChange={e => handleChange(e)}
        />
      </div>

      <button type="submit" className="btn btn-secondary m-2">
        Adicionar
      </button>
    </form>
  );
};

export default Addtask;
