import React from "react";
import { Droppable } from "react-beautiful-dnd";

import TodoItem from "./TodoItem";
import AddTodo from "../AddTodoBtn";

const TodoList = ({ topickId, todos, provided }) => {
  return (
    <>
      <Droppable droppableId={topickId + ""}>
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {todos.map((todo, index) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                topickId={topickId}
                index={index}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <AddTodo topickId={topickId} />
    </>
  );
};

export default TodoList;
