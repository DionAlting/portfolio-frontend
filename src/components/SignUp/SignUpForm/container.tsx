import React, { useState } from "react";

import { SignUpForm } from "./component";
import { submitValues } from "./types";

const SignUpFormContainer = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword((show) => !show);
  };

  const handleSubmit = (values: submitValues) => {
    const { displayName, email, firstName, lastName, password } = values;
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
