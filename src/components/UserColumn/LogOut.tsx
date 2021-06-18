import React from "react";
type LogOutProps = {
  onLogOut: () => void;
};
export const LogOut = (props: LogOutProps) => {
  return (
    <button className="logout" value={"Wyloguj się"} onClick={props.onLogOut}>
      {"Wyloguj się"}
    </button>
  );
};

export {};
