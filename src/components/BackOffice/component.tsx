import React from "react";
import { AddNewDateButton } from "./AddNewDateButton/";
import { ReservationTable } from "./ReservationTable/";

export const BackOffice = () => {
  return (
    <div className="container flex flex-col w-full mx-auto md:w-2/3 lg:w-2/3">
      <div className="px-4 py-5 mt-4 mb-2 bg-white border-t-2 border-green-400 rounded-md shadow sm:px-6">
        <h2 className="font-extrabold text-gray-700 text-1xl sm:text-3xl">
          <span className="block text-3xl">Back Office</span>
        </h2>
        <p className="max-w-2xl mt-1 text-sm text-gray-500 ">
          Manage guests or add a new date
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 px-4 py-5 md:grid-cols-1 xl:grid-cols-1">
        <div className="px-4 py-2 bg-white rounded-lg shadow">
          <span className="block mb-4 text-2xl">Add a new date</span>
          <AddNewDateButton />
        </div>
        <div className="px-4 py-2 bg-white rounded-lg shadow">
          <span className="block text-2xl">Reservations</span>
          <ReservationTable />
        </div>
      </div>
    </div>
  );
};
