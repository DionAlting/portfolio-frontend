import React from "react";

export const BackOffice = () => {
  return (
    <div className="container flex flex-col w-full mx-auto md:w-2/3 lg:w-2/3">
      <div className="px-4 py-5 mt-4 mb-2 bg-white border-t-2 border-green-400 rounded-md shadow sm:px-6">
        <h2 className="font-extrabold text-gray-700 text-1xl sm:text-3xl">
          <span className="block text-3xl">Back Office</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-6 px-4 py-5 md:grid-cols-1 xl:grid-cols-1">
        <div>
          <p>Add new date form</p>
        </div>
        <div>
          <p>Reservations table</p>
        </div>
      </div>
    </div>
  );
};
