import React from "react";
import { ChangePasswordForm } from "./ChangePasswordForm";
import { EditProfileForm } from "./EditProfileForm";

export const Profile = () => {
  return (
    <div className="container flex flex-col w-full mx-auto md:w-2/3 lg:w-2/3">
      <div className="px-4 py-5 mt-4 mb-2 bg-white border-t-2 border-green-400 rounded-md shadow sm:px-6">
        <h2 className="font-extrabold text-gray-700 text-1xl sm:text-3xl">
          <span className="block text-3xl">Profile</span>
        </h2>
        <p className="max-w-2xl mt-1 text-sm text-gray-500 ">
          Edit your profile
        </p>
        <EditProfileForm />
        <ChangePasswordForm />
      </div>
    </div>
  );
};
