import React, { Component, useState } from "react";
import Logo from "../../assets/durin_logo";
import { TopBar } from "../../components/TopBar/TopBar";
import { Schedule } from "../../components/Schedule/Schedule";
import "./EnrollScreen.scss";

function EnrollScreen() {
  return (
    <div className="screen-wrapper">
      <div className="main">
        <TopBar />
        <Schedule />
      </div>
      <div className="user-data-wrapper">
        <Logo />
      </div>
    </div>
  );
}

export default EnrollScreen;
