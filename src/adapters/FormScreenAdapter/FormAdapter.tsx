import React from "react";

const API_URL = process.env.REACT_APP_API_URL;

export const sendLoginData = (bodyData: JSON): boolean => {
  let isAuthenticated;
  if (localStorage.getItem("token") === null) return false;

  sendUserData(bodyData, "/user/login", "POST")
    .then((response) => console.log(response))
    .catch((error) => console.log(error));

  return true;
};

export type bodyData = {
  username: string;
  password: string;
};

export let sendUserData = (
  bodyData: JSON,
  action: string,
  method: string
): Promise<Response> => {
  let url = "";
  url = API_URL + action;
  return fetch(url, {
    method: method,
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bodyData),
  });
};
