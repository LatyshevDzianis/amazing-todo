import {
  ADD_TOPICK,
  EDIT_TOPICK,
  REMOVE_TOPICK,
} from "../constants/actionTypes";

export const addTopick = (data) => {
  return {
    type: ADD_TOPICK,
    payload: data,
  };
};

export const editTopick = (topickId) => {
  return {
    type: EDIT_TOPICK,
    payload: topickId,
  };
};

export const removeTopick = (topickId) => {
  return {
    type: REMOVE_TOPICK,
    payload: topickId,
  };
};
