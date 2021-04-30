import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { User } from "../../../redux";
import { ChangePasswordForm } from "./component";
import { SubmitValues } from "./types";

const ChangePasswordFormContainer = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword((show) => !show);
  };

  const handleChangePasswordSubmit = (values: SubmitValues) => {
    dispatch(User.Actions.changePassword(values));
  };

  return (
    <ChangePasswordForm
      showPassword={showPassword}
      handleClickShowPassword={handleClickShowPassword}
      handleChangePasswordSubmit={handleChangePasswordSubmit}
    />
  );
};

export default ChangePasswordFormContainer;
