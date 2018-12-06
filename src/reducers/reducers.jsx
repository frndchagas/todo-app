import {
  DELETE_TASK,
  SET_COMPLETED,
  ADD_TASK
} from './../constants/action-types';

/*
todos: {
  ids: [1, 2, 3],
  content: {
    1: { id: 1, value: "Tarefa A", completed: true },
    2: { id: 2, value: "Tarefa A", completed: true },
    3: { id: 3, value: "Tarefa A", completed: true },
  }
}

map(id => todos.content.id)
*/

const initialState = {
  todos: [
    { id: 1, value: 'Tarefa A', completed: true },
    { id: 2, value: 'Tarefa B', completed: false },
    { id: 3, value: 'Tarefa C', completed: false }
  ],
  counter: 123123
};

const reducers = (state = initialState, actions) => {
  const { todos } = state;
  switch (actions.type) {
    case ADD_TASK:
      const taskName = actions.payload;
      const last = todos[todos.length - 1];
      todos.push({
        id: last.id + 1,
        value: taskName,
        completed: false
      });
      return { todos };
    case SET_COMPLETED:
      return {
        todos: todos.map(task => {
          if (task.id === actions.payload)
            return { ...task, completed: !task.completed };
          return task;
        })
      };
    case DELETE_TASK:
      return {
        todos: todos.filter(t => t.id !== actions.payload)
      };
    default:
      return state;
  }
};

export default reducers;
