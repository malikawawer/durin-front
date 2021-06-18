import React from "react";
import ReactDOM from "react-dom";
import { Activity } from "./adapters/EnrollScreenAdapters/ScheduleAdapter";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import EnrollScreen from "./screens/Enroll/EnrollScreen";
import {
  EnrollmentContextInterface,
  EnrollContextProvider,
} from "../src/context/EnrollmentContext";

ReactDOM.render(
  <React.StrictMode>
    <EnrollContextProvider>
      <EnrollScreen />
    </EnrollContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
