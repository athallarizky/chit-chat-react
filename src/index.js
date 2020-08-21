import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import { Provider } from "react-redux";
import customTheme from "./theme";
import App from "./components/App";
import store from "store";

import "assets/scss/reset.scss";
import "assets/scss/custom.scss";

ReactDOM.render(
  <ThemeProvider theme={customTheme}>
    <CSSReset />
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById("root")
);
