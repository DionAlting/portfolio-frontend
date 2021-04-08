import React, { useState } from "react";

import { LoginForm } from "./component";

const LoginFormContainer = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword((show) => !show);
  };

  return (
    <LoginForm
      showPassword={showPassword}
      handleClickShowPassword={handleClickShowPassword}
    />
  );
};
export default LoginFormContainer;
