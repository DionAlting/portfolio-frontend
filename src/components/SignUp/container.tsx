import React from "react";
import { useSelector } from "react-redux";
import { User } from "../../redux";
import { SignUp } from "./component";

const SignUpContainer = () => {
  const isAuthenticated = useSelector(User.Selectors.isAuthenticated);
  return <SignUp isAuthenticated={isAuthenticated} />;
};
export default SignUpContainer;
