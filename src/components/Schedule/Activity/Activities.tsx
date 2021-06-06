// @flow
import React from "react";
import "../Schedule.scss";
import { Activity } from "../../../adapters/EnrollScreenAdapters/ScheduleAdapter";
type ActivityProps = {
  teacher: string;
  startTime: string;
  endTime: string;
};

export function Activity(props: ActivityProps) {
  return <div></div>;
}

type ActivitiesProps = {
  dayData: Array<Activity>;
};

export function Activities(props: ActivitiesProps) {
  const days = [1, 2, 3, 4, 5];
  return (
    <div className="activities">
      {days.map((day, index) => (
        <div className="column" key={index}></div>
      ))}
    </div>
  );
}
