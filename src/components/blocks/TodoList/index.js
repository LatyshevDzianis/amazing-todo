import React from "react";
import TodoItem from "./TodoItem";
import AddTodo from "../AddTodo";

const TodoList = ({ topickId, todos }) => {
  return (
    <>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} topickId={topickId} />
      ))}
      <AddTodo topickId={topickId} />
    </>
  );
};

export default TodoList;
