import { useContext } from "react";
import {
  EnrollContext,
  EnrollContextProvider,
} from "../../context/EnrollmentContext";

import "./UserActivities.scss";

export const UserActivities = () => {
  const state = useContext(EnrollContext);
  return (
    <div className="user-activities">
      <p className="section-name">{"Zajęcia, na które jesteś zapisany: "}</p>
      {state.activities?.map((activity, index) => {
        return (
          <div key={index} className="user-activity-info">
            <span className="activity-name">{activity.name}</span>
            <p>{activity.teacher}</p>
            <p>
              {activity.start} - {activity.end}
            </p>
          </div>
        );
      })}
    </div>
  );
};
