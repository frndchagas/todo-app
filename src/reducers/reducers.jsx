import {
  DELETE_TASK,
  SET_COMPLETED,
  ADD_TASK,
  SET_TEXT
} from "./../constants/action-types";

const initialState = {
  todos: [
    { id: 1, value: "Tarefa A", completed: true },
    { id: 2, value: "Tarefa B", completed: false },
    { id: 3, value: "Tarefa C", completed: false }
  ],
  currentTaskName: ""
};

const reducers = (state = initialState, actions) => {
  const { todos } = state;
  switch (actions.type) {
    case SET_TEXT:
      state.currentTaskName = actions.payload;
      return state;
    case ADD_TASK:
      const taskName = actions.payload;
      const last = todos[todos.length - 1];
      todos.push({
        id: last.id + 1,
        value: taskName,
        completed: false
      });
      state.todos = todos;
      return state;
    case SET_COMPLETED:
      state.todos = todos.map(task => {
        if (task.id === actions.payload)
          return { ...task, completed: !task.completed };
        return task;
      });
      return state;
    case DELETE_TASK:
      state.todos = todos.filter(t => t.id !== actions.payload);
      return state;
    default:
      return state;
  }
};

export default reducers;
