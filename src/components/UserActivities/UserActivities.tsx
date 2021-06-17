import { EnrollContextConsumer } from "../../context/EnrollmentContext";

export const UserActivities = () => {
  return (
    <EnrollContextConsumer>
      {(enrollContext) =>
        enrollContext && (
          <div>
            {enrollContext.activities.map((activity, index) => (
              <div key={index}>{activity.name}</div>
            ))}
          </div>
        )
      }
    </EnrollContextConsumer>
  );
};
