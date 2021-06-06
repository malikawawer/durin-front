import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import EnrollScreen from "./screens/Enroll/EnrollScreen";

ReactDOM.render(
  <React.StrictMode>
    <EnrollScreen />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
