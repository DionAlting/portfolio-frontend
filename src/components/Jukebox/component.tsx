import React from "react";
import { JukeboxList } from "./JukeboxList";

export const Jukebox = () => {
  return (
    <div className="container flex flex-col w-full mx-auto">
      <div className="px-4 py-5 mt-4 mb-2 bg-white border-t-2 border-green-400 rounded-md shadow sm:px-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">
          Jukebox
        </h3>
        <p className="max-w-2xl mt-1 text-sm text-gray-500 ">
          Request a song or vote on other requested songs!
        </p>
      </div>
      <JukeboxList />
    </div>
  );
};
