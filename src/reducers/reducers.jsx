import {
  DELETE_TASK,
  SET_COMPLETED,
  ADD_TASK
} from "./../constants/action-types";

const initialState = {
  todos: [
    { id: 1, value: "Tarefa A", completed: true },
    { id: 2, value: "Tarefa B", completed: false },
    { id: 3, value: "Tarefa C", completed: false }
  ]
};

const reducers = (state = initialState, actions) => {
  const { todos: oldTodos } = state;
  switch (actions.type) {
    case ADD_TASK:
      const name = actions.payload;
      let newId = 1;
      if (oldTodos.length > 0) {
        const last = oldTodos[oldTodos.length - 1];
        newId = last.id + 1;
      }
      const newTodo = { id: newId, value: name, completed: false };
      const todos = [...oldTodos, newTodo];
      return { todos };
    case SET_COMPLETED:
      return {
        todos: oldTodos.map(task => {
          if (task.id === actions.payload)
            return { ...task, completed: !task.completed };
          return task;
        })
      };
    case DELETE_TASK:
      return { todos: oldTodos.filter(t => t.id !== actions.payload) };
    default:
      return state;
  }
};

export default reducers;
