import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { User } from "../../../redux";
import { LoginForm } from "./component";

import { submitValues } from "./types";

const LoginFormContainer = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const handleClickShowPassword = () => {
    setShowPassword((show) => !show);
  };

  const handleSubmit = (values: submitValues) => {
    const { email, password } = values;
    dispatch(User.Actions.login(email, password));
  };

  return (
    <LoginForm
      showPassword={showPassword}
      handleClickShowPassword={handleClickShowPassword}
      handleSubmit={handleSubmit}
    />
  );
};
export default LoginFormContainer;
