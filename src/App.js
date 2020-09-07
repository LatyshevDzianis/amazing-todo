import React from "react";
import { Container, CssBaseline } from "@material-ui/core";
import { DragDropContext } from "react-beautiful-dnd";

import Header from "./components/blocks/Header";

import TopickList from "./components/blocks/TopickList";
import { useDispatch } from "react-redux";
import { dragTodo } from "./actions/todo";

function App() {
  const dispatch = useDispatch();

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    dispatch(
      dragTodo(
        +draggableId,
        +source.droppableId,
        +destination.droppableId,
        +destination.index
      )
    );
  };

  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <CssBaseline />
        <Header />
        <Container maxWidth="xl">
          <TopickList />
        </Container>
      </DragDropContext>
    </>
  );
}

export default App;
