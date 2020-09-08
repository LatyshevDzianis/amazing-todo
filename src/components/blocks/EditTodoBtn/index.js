import React, { useState } from "react";

import { Popover, IconButton, TextField } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";

import { editTodo } from "../../../actions/todo";

const useStyles = makeStyles((theme) => ({
  todoInput: {
    margin: "1em",
    minWidth: 290,
  },
}));

const EditTodo = ({ topickId, todoId, todoText }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [todoInput, setTodoInput] = useState(todoText);
  const dispatch = useDispatch();
  const classes = useStyles();
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleChange = (event) => {
    setTodoInput(event.target.value);
  };

  const handleEnterPress = (event) => {
    if (event.key === "Enter") {
      if (todoInput.trim()) {
        dispatch(editTodo(topickId, todoId, todoInput.trim()));
        setAnchorEl(null);
        setTodoInput("");
      }
    }
  };

  return (
    <>
      <IconButton edge="end" aria-label="edit" onClick={handleClick}>
        <EditIcon />
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <TextField
          label="Text of todo"
          multiline
          id="outlined-size-small"
          variant="outlined"
          size="small"
          value={todoInput}
          onChange={handleChange}
          className={classes.todoInput}
          onKeyPress={handleEnterPress}
        />
      </Popover>
    </>
  );
};

export default EditTodo;
