import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ReusablePopover from "../ReusablePopover";
import { addTodo } from "../../../actions/todo";

const useStyles = makeStyles((theme) => ({
  todoInput: {
    margin: "1em",
    minWidth: 290,
  },
}));

const AddTodo = ({ topickId }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [todoInput, setTodoInput] = useState("");
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleChangeTodo = (event) => {
    setTodoInput(event.target.value);
  };

  const handleEnterPress = (event) => {
    if (event.key === "Enter") {
      dispatch(addTodo(todoInput.trim(), topickId));
      setAnchorEl(null);
      setTodoInput("");
    }
  };

  return (
    <>
      <Button
        fullWidth={true}
        variant="outlined"
        color="primary"
        onClick={handleClick}
      >
        Add todo
      </Button>
      <ReusablePopover anchorEl={anchorEl} handleClose={handleClose}>
        <TextField
          label="Text of todo"
          multiline
          id="outlined-size-small"
          variant="outlined"
          size="small"
          value={todoInput}
          onChange={handleChangeTodo}
          className={classes.todoInput}
          onKeyPress={handleEnterPress}
        />
      </ReusablePopover>
    </>
  );
};

export default AddTodo;
