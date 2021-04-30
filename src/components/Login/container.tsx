import React from "react";
import { useSelector } from "react-redux";
import { User } from "../../redux";
import { Login } from "./component";

const LoginContainer = () => {
  const isAuthenticated = useSelector(User.Selectors.isAuthenticated);
  return <Login isAuthenticated={isAuthenticated} />;
};
export default LoginContainer;
