import React from "react";
import { Route } from "react-router-dom";

function ProfileRoute({ component, rest }) {
  const token = localStorage.getItem("token");
  return <div>{token && <Route expact path='/profile' component={component} {...rest} />}</div>;
}

export default ProfileRoute;
