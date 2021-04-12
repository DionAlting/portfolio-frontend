import React from "react";
import {
  ArrowUpIcon,
  ArrowDownIcon,
  TrashIcon,
} from "@heroicons/react/outline";

export const JukeboxListItem = () => {
  return (
    <li className="flex flex-row mb-2 border-gray-400 md:w-2/3">
      <div className="flex items-center flex-1 p-4 bg-white border rounded-md shadow cursor-pointer select-none">
        <div className="flex-1 pl-1 md:mr-16">
          <div className="font-medium dark:text-white">Artists</div>
          <div className="text-sm text-gray-600 ">Title</div>
        </div>
        <div className="flex flex-row space-x-4">
          <button className="flex justify-end w-24 text-right">
            <ArrowDownIcon className="w-5 h-5 text-red-400 hover:text-red-700" />
          </button>
          <div className="flex text-gray-600 ">12</div>
          <button className="flex text-right">
            <ArrowUpIcon className="w-5 h-5 text-green-400 hover:text-green-700" />
          </button>
        </div>
        <div className="flex flex-row space-x-4">
          <button className="flex justify-end w-24 text-right">
            <TrashIcon className="w-5 h-5 text-red-400 hover:text-red-700" />
          </button>
        </div>
      </div>
    </li>
  );
};
