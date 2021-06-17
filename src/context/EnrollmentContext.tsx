import React, { useState, createContext, useContext } from "react";
import { Activity } from "../adapters/EnrollScreenAdapters/ScheduleAdapter";
import EnrollScreen from "../screens/Enroll/EnrollScreen";

export interface EnrollmentContextInterface {
  activities: Array<Activity>;
  setActivities: (activity: Activity) => void;
}

export const EnrollContext =
  React.createContext<EnrollmentContextInterface | null>(null);

export const EnrollContextProvider = EnrollContext.Provider;
export const EnrollContextConsumer = EnrollContext.Consumer;

console.log(EnrollContextConsumer);
