import React from "react";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import {
  Paper,
  Typography,
  Box,
  Checkbox,
  IconButton,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { Draggable } from "react-beautiful-dnd";

import EditTodo from "../../EditTodoBtn";
import { toggleDone, removeTodo } from "../../../../actions/todo";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "5px 10px",
    marginBottom: 10,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

const TodoItem = ({ todo, topickId, index }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleRemoveClick = () => {
    dispatch(removeTodo(topickId, todo.id));
  };

  const handleToggleCheckbox = () => {
    dispatch(toggleDone(todo.id, topickId));
  };

  return (
    <Draggable draggableId={todo.id + ""} index={index}>
      {(provided) => (
        <Paper
          elevation={5}
          className={classes.root}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          index={index}
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Checkbox
              edge="start"
              checked={todo.done}
              onChange={handleToggleCheckbox}
            />
            <Typography
              style={{
                color: todo.done ? "gray" : "#000000DE",
                textDecoration: todo.done ? "line-through" : "none",
              }}
              align="left"
            >
              {todo.text}
            </Typography>
            <div>
              <EditTodo
                topickId={topickId}
                todoId={todo.id}
                todoText={todo.text}
              />
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
      )}
    </Draggable>
  );
};

export default TodoItem;
