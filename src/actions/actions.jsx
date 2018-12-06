import {
  DELETE_TASK,
  ADD_TASK,
  SET_COMPLETED,
  SET_TEXT
} from "./../constants/action-types";

export const deleteCurrentTask = id => ({
  type: DELETE_TASK,
  payload: id
});

export const setCompleted = id => ({
  type: SET_COMPLETED,
  payload: id
});

export const addTask = text => ({
  type: ADD_TASK,
  payload: text
});

export const setText = text => ({
  type: SET_TEXT,
  payload: text
});
