import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { createStore } from "redux";
import rootReducer from "./reducers";
import Router from "./views/router";
import Progress from "components/Progress";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#4F99ED",
      main: "#000000",
      dark: "#000000",
      contrastText: "#fff",
    },
    secondary: {
      light: "#4F99ED",
      main: "#fff",
      dark: "#fff",
      contrastText: "#0171EE",
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={createStore(rootReducer)}>
      <ThemeProvider theme={theme}>
        <Router />
        <Progress />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
