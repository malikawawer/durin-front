import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { RootScreen } from "../src/screens/RootScreen";

ReactDOM.render(
  <React.StrictMode>
    <RootScreen />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
