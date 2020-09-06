import {
  ADD_TODO,
  EDIT_TODO,
  REMOVE_TODO,
  TOGGLE_DONE,
} from "../constants/actionTypes";

export const addTodo = (data, topickId) => {
  return {
    type: ADD_TODO,
    payload: { text: data, topickId: topickId },
  };
};

export const editTodo = (topickId, todoId, text) => {
  return {
    type: EDIT_TODO,
    payload: { topickId, todoId, text },
  };
};

export const removeTodo = (topickId, todoId) => {
  return {
    type: REMOVE_TODO,
    payload: { topickId, todoId },
  };
};

export const toggleDone = (todoId, topickId) => {
  return {
    type: TOGGLE_DONE,
    payload: { todoId, topickId },
  };
};
