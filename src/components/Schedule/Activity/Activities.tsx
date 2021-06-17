import "../Schedule.scss";
import {
  ActivitiesProps,
  ActivitiesState,
  ActivityColor,
  ActivityName,
  EnrollButtonProps,
  EnrollButtonState,
} from "./types";

import {
  Activity,
  countActivityHeight,
  countActivityPosition,
} from "../../../adapters/EnrollScreenAdapters/ScheduleAdapter";
import "./Activities.scss";
import CSS from "csstype";
import { MouseEvent, useContext } from "react";
import React from "react";

import {
  EnrollContextConsumer,
  EnrollContext,
} from "../../../context/EnrollmentContext";

export function Activities(props: ActivitiesProps) {
  const handleOnClickEnroll = (event: React.MouseEvent<HTMLElement>): void => {
    const id: number = parseInt(event.currentTarget.id);
    let activity: Activity = props.dayData[id];
  };

  const { dayData } = props;
  return (
    <div className="activities">
      {dayData.map((activity, index) => {
        console.log(activity.name, activity.neighbours);
        const boxHeight: number = countActivityHeight(
          activity.start,
          activity.end
        );
        const boxVerticalPosition: number = countActivityPosition(
          activity.start
        );

        let flexDirection: CSS.Property.FlexDirection;
        boxHeight <= 60 ? (flexDirection = "row") : (flexDirection = "column");

        const activityStyle: CSS.Properties = {
          backgroundColor: ActivityColor[activity.type],
          height: boxHeight + "px",
          width: "calc( (100% /" + activity.neighbours + " ) + 30px)",
          flexDirection: flexDirection,
          top: boxVerticalPosition + "px",
          left:
            "calc( ((100% /" +
            activity.neighbours +
            ") + 40px)  * " +
            activity.successor +
            ")",
        };

        return (
          <div className="activity-box" key={index} style={activityStyle}>
            <span className="activity-name">{activity.name}</span>
            <span>{activity.teacher}</span>
            <span>
              {activity.start} - {activity.end}
            </span>
            {activity.type !== ActivityName.WY && (
              <EnrollButton
                isLockedIn={activity.isLockedIn}
                isLockedOut={activity.isLockedOut}
                onEnroll={handleOnClickEnroll}
                bgColor={ActivityColor[activity.type]}
                activityId={index}
              />
            )}
            {activity.type === ActivityName.WY ? null : (
              <span className="group-number">{activity.successor + 1}</span>
            )}
          </div>
        );
      })}
    </div>
  );
}

export class EnrollButton extends React.Component<
  EnrollButtonProps,
  EnrollButtonState
> {
  constructor(props: EnrollButtonProps) {
    super(props);
  }

  state: EnrollButtonState = {
    isHovering: false,
  };

  handleMouseEnterActivity = (event: MouseEvent): void => {
    event.preventDefault();
    this.setState({
      isHovering: true,
    });
  };

  handleMouseLeaveActivity = (event: MouseEvent): void => {
    event.preventDefault();
    this.setState({
      isHovering: false,
    });
  };

  InnerText: { [key: string]: string } = {
    Available: "Dołącz",
    LockedOut: "Nie można się wypisać",
    LockedIn: "Brak miejsc",
  };

  render() {
    const visibleStyle: CSS.Properties = {
      opacity: 1,
    };
    const hiddenStyle: CSS.Properties = {
      opacity: 0,
    };

    const getButton = (): JSX.Element => {
      let button: JSX.Element;
      if (this.props.isLockedIn) {
        button = (
          <button className="enroll-button unavailable">
            {this.InnerText["LockedIn"]}
          </button>
        );
      } else if (this.props.isLockedOut) {
        button = (
          <button className="enroll-button unavailable">
            {this.InnerText["LockedOut"]}
          </button>
        );
      } else {
        button = (
          <button
            id={this.props.activityId.toString()}
            className="enroll-button available"
            onClick={this.props.onEnroll}
          >
            {this.InnerText["Available"]}
          </button>
        );
      }
      return button;
    };

    return (
      <div
        className="enroll-activity"
        style={this.state.isHovering ? visibleStyle : hiddenStyle}
        onMouseEnter={this.handleMouseEnterActivity}
        onMouseLeave={this.handleMouseLeaveActivity}
      >
        {getButton()}
      </div>
    );
  }
}

export {};
