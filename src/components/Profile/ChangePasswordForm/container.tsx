import React, { useState } from "react";
import { ChangePasswordForm } from "./component";

const ChangePasswordFormContainer = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword((show) => !show);
  };

  return (
    <ChangePasswordForm
      showPassword={showPassword}
      handleClickShowPassword={handleClickShowPassword}
    />
  );
};

export default ChangePasswordFormContainer;
