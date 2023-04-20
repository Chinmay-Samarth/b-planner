import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

export const Users = () => {
  const {} = useAuth0();
  return (
    <h1>Users</h1>
  );
};
