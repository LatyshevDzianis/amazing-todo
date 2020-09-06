import React from "react";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Typography, Box } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditTodo from "../../EditTodo";
import { toggleDone, removeTodo } from "../../../../actions/todo";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "5px 10px",
    marginBottom: 10,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

const TodoItem = ({ todo, topickId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleRemoveClick = () => {
    dispatch(removeTodo(topickId, todo.id));
  };

  const handleToggleCheckbox = () => {
    dispatch(toggleDone(todo.id, topickId));
  };

  return (
    <Paper elevation={5} className={classes.root}>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Checkbox
          edge="start"
          checked={todo.done}
          onChange={handleToggleCheckbox}
        />
        <Typography align="justify">{todo.text}</Typography>
        <div>
          <EditTodo topickId={topickId} todoId={todo.id} />
          <IconButton
            edge="end"
            aria-label="delete"
            onClick={handleRemoveClick}
          >
            <DeleteIcon />
          </IconButton>
        </div>
      </Box>
    </Paper>
  );
};

export default TodoItem;
