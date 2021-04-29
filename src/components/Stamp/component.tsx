import React from "react";
import { Link } from "react-router-dom";

import { ReservationStampCard } from "./ReservationStampCard";
import { StampProps } from "./types";

export const Stamp = ({ isAuthenticated }: StampProps) => {
  return (
    <div className="container flex flex-col w-full mx-auto md:w-2/3 lg:w-2/3">
      <div className="px-4 py-5 mt-4 mb-2 bg-white border-t-2 border-green-400 rounded-md shadow sm:px-6">
        <h2 className="font-extrabold text-gray-700 text-1xl sm:text-3xl">
          <span className="block text-3xl">Stampcard</span>
          <p className="max-w-2xl mt-1 text-sm text-gray-500 ">
            View your stamps
          </p>
        </h2>
        {isAuthenticated ? (
          <ReservationStampCard />
        ) : (
          <div className="mt-5">
            <h2 className="font-extrabold text-gray-700 text-1xl dark:text-white">
              <span className="block text-2xl md:text-lg">
                Want to check your stamps?
              </span>
              <span className="block text-base text-green-500 md:text-md">
                Login or Sign up now!
              </span>
            </h2>
            <div className="mt-4 lg:mt-4 lg:flex-shrink-0">
              <div className="inline-flex rounded-md shadow ">
                <button
                  type="button"
                  className="w-full px-6 py-2 text-xs font-semibold text-center text-white transition duration-200 ease-in bg-green-500 rounded-lg shadow-md md:text-base hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 focus:outline-none focus:ring-2 focus:ring-offset-2 "
                >
                  <Link to="/login"> Login</Link>
                </button>
              </div>
              <div className="inline-flex ml-3 rounded-md shadow">
                <button
                  type="button"
                  className="w-full px-6 py-2 text-xs font-semibold text-center text-white transition duration-200 ease-in bg-gray-600 rounded-lg shadow-md md:text-base hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 "
                >
                  <Link to="/signup"> Sign up</Link>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
