import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();
    const btnStyle = {
      margin: "25px 0"
    }
  return <button onClick={() => loginWithRedirect()} className="btn btn-primary" style={btnStyle}>Log In</button>;

};

