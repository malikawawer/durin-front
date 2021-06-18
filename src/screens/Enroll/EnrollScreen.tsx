import React, { Component, useState } from "react";
import Logo from "../../assets/durin_logo";
import { TopBar } from "../../components/TopBar/TopBar";
import { Schedule } from "../../components/Schedule/Schedule";
import { UserActivities } from "../../components/UserColumn/UserActivities";
import { UserData } from "../../components/UserColumn/UserData";
import { LogOut } from "../../components/UserColumn/LogOut";
import "./EnrollScreen.scss";

type EnrollScreenProps = {
  handleLogOut: () => void;
};

function EnrollScreen(props: EnrollScreenProps) {
  return (
    <div className="screen-wrapper">
      <div className="main">
        <TopBar />
        <Schedule />
      </div>
      <div className="user-data-wrapper">
        <Logo />
        <UserData
          name={"Thorin"}
          surname={"Dębowa Tarcza"}
          albumNumber={123456}
        />
        <UserActivities />
        <LogOut onLogOut={props.handleLogOut} />
      </div>
    </div>
  );
}

export default EnrollScreen;
export {};
