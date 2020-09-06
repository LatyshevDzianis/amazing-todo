import React from "react";
import { Container, CssBaseline } from "@material-ui/core";
import { Provider } from "react-redux";

import Header from "./components/blocks/Header";
import store from "./store";
import TopickList from "./components/blocks/TopickList";

function App() {
  return (
    <>
      <Provider store={store}>
        <CssBaseline />
        <Header />
        <Container maxWidth="xl">
          <TopickList />
        </Container>
      </Provider>
    </>
  );
}

export default App;
