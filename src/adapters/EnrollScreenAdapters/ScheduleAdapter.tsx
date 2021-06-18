import { useEffect } from "react";
import { act } from "react-dom/test-utils";
import { DayName } from "../../components/Schedule/Schedule";
import ScheduleData from "../../mocks/schedule-response.json";

export type Activity = {
  unique_id: number;
  start: string;
  end: string;
  name: string;
  teacher: string;
  neighbours: number;
  successor: number;
  type: string;
  isLockedIn: boolean;
  isLockedOut: boolean;
};

export type Day = {
  dayName: DayName;
  activities: Array<Activity>;
};

type ResponseActivities = {
  teacher: {
    id: number;
    degree: string;
    first_name: string;
    last_name: string;
  };
  room: {
    id: number;
    name: string;
  };
  subject: {
    id: number;
    name: string;
    groups: number;
    type: {
      id: number;
      name: string;
    };
  };
  start_time: string;
  end_time: string;
  locked_in: boolean;
  locked_out: boolean;
};

/**
 * [someFunction description]
 * @param  {[string]} start [Time from API call comes in format "HH:MM:SSZ"]
   Function returns value of the margin that should be applied to the 
   activity box, based on the rule that 1hour = 60px and the "zero" 
   hour is 8:00AM
 */
export const countActivityPosition = (start: string): number => {
  const [s_hour, s_min] = getTimeValues(start);
  return (s_hour - 8) * 60 + s_min;
};

export const countActivityHeight = (start: string, end: string): number => {
  const [s_hour, s_min] = getTimeValues(start);
  const [e_hour, e_min] = getTimeValues(end);
  return e_hour * 60 + e_min - (s_hour * 60 + s_min);
};

const getTimeValues = (time: string): Array<number> => {
  time.replace("Z", "");
  let [hour, min] = time.split(":");
  return [parseInt(hour), parseInt(min)];
};

function getSuccessorData() {}

export function GetSchedule(): Array<Day> {
  // API call

  let currentGroupSize = 0;
  let currentSuccessor = 0;
  let unique_id = -1;

  const data: Array<Day> = ScheduleData.days.map((day) => {
    const dataActivities: Array<Activity> = day.activities.map(
      (object: ResponseActivities) => {
        unique_id += 1;
        object.subject.groups !== currentGroupSize
          ? (currentGroupSize = object.subject.groups) && (currentSuccessor = 0)
          : (currentSuccessor += 1);

        const activity: Activity = {
          unique_id: unique_id,
          start: object.start_time.replace("Z", "").slice(0, -3),
          end: object.end_time.replace("Z", "").slice(0, -3),
          teacher:
            object.teacher.degree +
            " " +
            object.teacher.first_name +
            " " +
            object.teacher.last_name,
          name: object.subject.name,
          neighbours: object.subject.groups,
          successor: currentSuccessor,
          type: object.subject.type.name,
          isLockedIn: object.locked_in,
          isLockedOut: object.locked_out,
        };

        return activity;
      }
    );
    const dayObject = {
      dayName: DayName.MON,
      activities: dataActivities,
    };
    return dayObject;
  });
  return data;
}

const getScheduleData = () => {};

export {};
