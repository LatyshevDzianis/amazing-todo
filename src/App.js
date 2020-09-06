import React from "react";
import { Container, CssBaseline } from "@material-ui/core";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import Header from "./components/blocks/Header";
import { store } from "./store";
import { persistor } from "./store";
import TopickList from "./components/blocks/TopickList";

function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <CssBaseline />
          <Header />
          <Container maxWidth="xl">
            <TopickList />
          </Container>
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
