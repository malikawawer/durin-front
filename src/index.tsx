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

const sampleEnrollmentContext: EnrollmentContextInterface = {
  activities: new Array(),
  setActivities: (activity: Activity) => {
    return null;
  },
};

ReactDOM.render(
  <React.StrictMode>
    <EnrollContextProvider value={sampleEnrollmentContext}>
      <EnrollScreen />
    </EnrollContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
