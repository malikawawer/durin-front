import React from "react";
import "../Schedule.scss";
import { DayName } from "../Schedule";

type DaysBarProps = {
  days: Array<DayName>;
  handleDayClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export function DaysBar(props: DaysBarProps) {
  const { days, handleDayClick } = props;
  return (
    <div className="days">
      {days.map((dayName: DayName, index: number) => {
        return (
          <button
            value={dayName}
            className="day"
            onClick={handleDayClick}
            key={dayName}
          >
            <span>{dayName}</span>
          </button>
        );
      })}
    </div>
  );
}
