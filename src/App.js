import React from "react";
import { Container, CssBaseline, Box, Grid } from "@material-ui/core";
import Header from "./components/blocks/Header";
import TodoCard from "./components/blocks/TodoCard";
import AddTopickBtn from "./components/blocks/AddTopickBtn";

function App() {
  return (
    <>
      <CssBaseline />
      <Header />
      <Container maxWidth="xl">
        <Box mt={3}>
          <Grid container spacing={2}>
            <Grid item>
              <TodoCard />
            </Grid>
            <Grid item>
              <AddTopickBtn />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}

export default App;
