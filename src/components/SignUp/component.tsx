import React from "react";
import { Redirect } from "react-router-dom";

import Logo from "../../assets/Logo_no_margin.svg";

import { SignUpUIProps } from "./types";

export const SignUp = (props: SignUpUIProps) => {
  if (props.isAuthenticated) return <Redirect to="/" />;
  return (
    <div className="flex flex-col w-full max-w-md mt-10 px-4 py-8 bg-white border-t-2 border-green-400 rounded-lg shadow-xl sm:px-6 md:px-8 lg:px-10">
      <div className="self-center mb-6 text-xl font-light text-gray-600 sm:text-2xl">
        <div className="bg-green-400 rounded-full p-2">
          <img src={Logo} alt="HSG Logo" className="h-14 w-14" />
        </div>
      </div>
      <div className="self-center mb-6 text-xl font-light text-gray-600 sm:text-2xl">
        Create A New Account
      </div>
    </div>
  );
};
