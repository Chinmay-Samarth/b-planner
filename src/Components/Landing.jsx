import React from "react";
import {LoginButton} from "./login"

export const Landing = () => {
  return (
    <div className="container text-center my-3 border " style={{height: "100%"}}>
    <h1>Welcome to Buisiness Planner</h1>
    <p className="text-muted">We guess you are new here</p>
    <LoginButton />
    </div>
  );
};
