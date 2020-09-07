import React from "react";
import ReactDOM from "react-dom";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";

import { store } from "./store";
import { persistor } from "./store";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const element = (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);

ReactDOM.render(element, document.getElementById("root"));

serviceWorker.unregister();
