import React, { CSSProperties, useState } from "react";
import "./Schedule.scss";
import { DaysBar } from "./Days/Days";
import {
  GetSchedule,
  Day,
} from "../../adapters/EnrollScreenAdapters/ScheduleAdapter";
import CSS from "csstype";
import { Activities } from "./Activity/Activities";

export enum DayName {
  MON = "Poniedziałek",
  TU = "Wtorek",
  WED = "Środa",
  TH = "Czwartek",
  FRI = "Piątek",
}
const days: Array<DayName> = [
  DayName.MON,
  DayName.TU,
  DayName.WED,
  DayName.TH,
  DayName.FRI,
];
const hours = [
  "8:00",
  "9:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00",
];

export function Schedule() {
  const [currentDay, setCurrentDay] = useState(DayName.MON);
  const hourHeight = 60;
  const hoursHeight: CSSProperties = {
    height: hours.length * hourHeight + "px",
  };
  const activityFiledStyle: CSSProperties = {
    height: hourHeight + "px",
  };

  const handleDayClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    const day = event.currentTarget.value as DayName;
    setCurrentDay(day);
    // API call
    const data = GetSchedule();
  };

  return (
    <div className="schedule-wrapper">
      <DaysBar days={days} handleDayClick={handleDayClick} />
      <div className="schedule">
        <div className="hours-container" style={hoursHeight}>
          {hours.map((hour, index) => {
            return (
              <div className="hour" key={index}>
                {hour}
              </div>
            );
          })}
        </div>
        <div className="activity-container">
          {hours.map((hour, index) => {
            return (
              <div
                className="activity-field"
                key={index}
                style={activityFiledStyle}
              ></div>
            );
          })}

          <Activities dayData={GetSchedule()[0].activities} />
        </div>
      </div>
    </div>
  );
}

export {};
