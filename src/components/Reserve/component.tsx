import React from "react";
import { AvailableSeatsCard } from "../AvailableSeatsCard/";
import { ReserveForm } from "./ReserveForm/";

export const Reserve = () => {
  return (
    <div className="container flex flex-wrap items-center px-5 py-12 mx-auto md:py-24 font-body">
      <div className="w-full px-5 bg-white border-t-2 border-green-400 shadow-lg md:h-50 lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 rounded-xl">
        <ReserveForm />
      </div>
      <div className="flex flex-col w-full mt-10 rounded-lg lg:w-2/6 md:w-1/2 md:ml-auto md:mt-0">
        <AvailableSeatsCard />
      </div>
    </div>
  );
};
