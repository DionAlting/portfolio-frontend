import React from "react";
import {
  ArrowUpIcon,
  ArrowDownIcon,
  TrashIcon,
} from "@heroicons/react/outline";

import { Props } from "./types";

export const JukeboxListItem = (props: Props) => {
  const { id, artist, title, voteCount } = props.songDetails;

  return (
    <li
      key={id}
      className="flex flex-row w-full mx-auto mb-2 border-gray-400 md:w-2/3"
    >
      <div className="flex items-center justify-between flex-1 p-4 bg-white border rounded-md shadow ">
        <div className="flex-grow pl-1 md:mr-16">
          <div className="font-medium dark:text-white">{artist}</div>
          <div className="text-sm text-gray-600 ">{title}</div>
        </div>
        <div className="flex flex-row flex-shrink space-x-4">
          <button
            className="flex text-right disabled:opacity-40 disabled:cursor-not-allowed"
            disabled={!props.isAuthenticated || voteCount <= 0}
            onClick={() => props.handleDownvoteClick(id)}
          >
            <ArrowDownIcon className="w-5 h-5 text-red-400 hover:text-red-700" />
          </button>
          <div className="flex flex-shrink text-gray-600 ">{voteCount}</div>
          <button
            className="flex disabled:opacity-40 disabled:cursor-not-allowed"
            disabled={!props.isAuthenticated}
            onClick={() => props.handleUpvoteClick(id)}
          >
            <ArrowUpIcon className="w-5 h-5 text-green-400 hover:text-green-700" />
          </button>
        </div>
        {props.isAdmin && (
          <div className="flex justify-end ml-2 md:w-10">
            <button
              className="flex"
              onClick={() => props.handleRemoveClick(id)}
            >
              <TrashIcon className="w-5 h-5 text-red-400 hover:text-red-700" />
            </button>
          </div>
        )}
      </div>
    </li>
  );
};
