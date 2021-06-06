import { act } from "react-dom/test-utils";
import { DayName } from "../../components/Schedule/Schedule";
import ScheduleData from "../../mocks/schedule-response.json";

export type Activity = {
  start: string;
  end: string;
  name: string;
  teacher: string;
  groupNum: number;
  type: string;
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

export function getSchedule(): Array<Day> {
  // API call
  const data: Array<Day> = ScheduleData.days.map((day) => {
    const dataActivities: Array<Activity> = day.activities.map(
      (object: ResponseActivities) => {
        const activity: Activity = {
          start: object.start_time,
          end: object.end_time,
          teacher: object.teacher.first_name + " " + object.teacher.last_name,
          name: object.subject.name,
          groupNum: object.subject.groups,
          type: object.subject.type.name,
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
