import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { User } from "../../redux";
import { SignUp } from "./component";

const SignUpContainer = () => {
  const isAuthenticated = useSelector(User.Selectors.isAuthenticated);

  if (!isAuthenticated) {
    return <Redirect to="/" />;
  }

  return <SignUp />;
};
export default SignUpContainer;
