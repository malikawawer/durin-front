import { Activity } from "../adapters/EnrollScreenAdapters/ScheduleAdapter";
import EnrollScreen from "./Enroll/EnrollScreen";
import {
  EnrollmentContextInterface,
  EnrollContextProvider,
} from "../context/EnrollmentContext";

import { FormScreen } from "../screens/Form/FormScreen";

import React from "react";

type RootScreenState = {
  isLoggedIn: boolean;
};
type RootScreenProps = {};

export class RootScreen extends React.Component<
  RootScreenProps,
  RootScreenState
> {
  state: RootScreenState = {
    isLoggedIn: false,
  };

  onUserAuthenticated = () => {
    this.setState({
      isLoggedIn: true,
    });
  };

  handleLogOut = () => {
    this.setState({
      isLoggedIn: false,
    });
  };

  render() {
    return this.state.isLoggedIn ? (
      <EnrollContextProvider>
        <EnrollScreen handleLogOut={this.handleLogOut} />
      </EnrollContextProvider>
    ) : (
      <FormScreen onUserAuthenticated={this.onUserAuthenticated} />
    );
  }
}

export {};
