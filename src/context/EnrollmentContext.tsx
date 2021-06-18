import React, {
  useState,
  createContext,
  useContext,
  ReactChild,
  ReactChildren,
} from "react";
import { JsxElement } from "typescript";
import { Activity } from "../adapters/EnrollScreenAdapters/ScheduleAdapter";
import EnrollScreen from "../screens/Enroll/EnrollScreen";

export interface EnrollmentContextInterface {
  activities: Array<Activity>;
  setActivities: (activity: Activity) => void;
}

interface AuxProps {
  children: ReactChild | ReactChild[] | ReactChildren | ReactChildren[];
}

export const EnrollContext = React.createContext<
  Partial<EnrollmentContextInterface>
>({});

export const EnrollContextConsumer = EnrollContext.Consumer;

export const EnrollContextProvider = (props: AuxProps) => {
  const setActivities = (activity: Activity): void => {
    const _activities: Array<Activity> = [...state.activities];
    state.activities.push(activity);
    setState({ ...state, activities: state.activities });
  };

  const initState = {
    activities: new Array<Activity>(),
    setActivities: setActivities,
  };

  const [state, setState] = useState(initState);

  return (
    <EnrollContext.Provider value={state}>
      {props.children}
    </EnrollContext.Provider>
  );
};
