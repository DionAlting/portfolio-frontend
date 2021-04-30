import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { User } from "../../../redux";
import { SignUpForm } from "./component";
import { submitValues } from "./types";

const SignUpFormContainer = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const handleClickShowPassword = () => {
    setShowPassword((show) => !show);
  };

  const handleSubmit = (values: submitValues) => {
    const { displayName, email, firstName, lastName, password } = values;
    dispatch(
      User.Actions.signUp(displayName, email, firstName, lastName, password)
    );
  };
  return (
    <SignUpForm
      showPassword={showPassword}
      handleClickShowPassword={handleClickShowPassword}
      handleSubmit={handleSubmit}
    />
  );
};
export default SignUpFormContainer;
