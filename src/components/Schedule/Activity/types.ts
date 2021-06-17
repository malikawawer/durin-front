import { Activity} from "../.././../adapters/EnrollScreenAdapters/ScheduleAdapter";

export type ActivitiesProps = {
    dayData: Array<Activity>;
  };
  
export type ActivitiesState = {
    isHovering: boolean;
  };
  
export let ActivityColor: { [key: string]: string } = {
    wykład: "#e6cfc2",
    laboratorium: "#c2d4e6",
    konwersatorium: "#d7c2e6",
    seminarium: "#c2e6e6",
  };
  
export enum ActivityName {
    WY = "wykład",
    LB = "laboratorium",
    KW = "konwersatorium",
    SE = "seminarium",
}

/**
 * @type {EnrollButtonProps}
 * @prop {isLockedIn} [True if User can`t enroll into this course]
 * @prop {isLockedOut} [True if User can`t enroll out from this course]
 */
 export type EnrollButtonProps = {
    isLockedIn: boolean;
    isLockedOut: boolean;
    onEnroll: (event: React.MouseEvent<HTMLElement>) => void;
    bgColor: string;
    activityId: number;
  };

export type EnrollButtonState = {
    isHovering: boolean
};
