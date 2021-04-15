import React from "react";
import moment from "moment";

import { EventProps } from "./types";

import stampImage from "../../assets/stamp.png";
import noStampImage from "../../assets/no_stamp.png";
import { CheckCircleIcon } from "@heroicons/react/outline";

export const Events = (props: EventProps) => {
  return (
    <div className="container w-full p-6 mx-auto bg-green-300 rounded-t-lg lg:p-12 font-body">
      <div className="flex items-end justify-between mb-12 header">
        <div className="title">
          <p className="mb-4 text-4xl font-bold text-white">Upcoming events</p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-1 xl:grid-cols-1">
        {props.events &&
          props.events.map((event) => (
            <div
              className="m-auto overflow-hidden rounded-lg shadow-lg lg:w-3/5"
              key={event.id}
            >
              <img
                alt="event"
                src={event.eventImage}
                className="object-cover w-full max-h-80"
              />
              <div className="w-full p-4 bg-white dark:bg-gray-800">
                <span
                  className={`font-medium px-4 py-2 rounded-full text-white bg-${event.creator.studyAssociation.color}-500 text-xs`}
                >
                  {event.creator.studyAssociation.name}
                </span>
                <div className="flex flex-row items-center justify-between py-2 mr-1">
                  <p className="mb-2 text-xl font-medium text-gray-800 dark:text-white">
                    {event.title}
                  </p>
                  <img
                    alt="stamp"
                    src={event.isStampable ? stampImage : noStampImage}
                    className="object-cover w-10 h-10 ml-2 rounded-full"
                  />
                </div>
                <div className="flex flex-col justify-between flex-grow mb-5 text-sm">
                  <p className="text-gray-800 dark:text-white">
                    {moment(event.eventDate).fromNow()}
                  </p>
                  <p className="text-gray-400 dark:text-gray-300">
                    From {moment(event.startTime).format("LT")} till{" "}
                    {moment(event.endTime).format("LT")}
                  </p>
                </div>

                <p className="font-light text-gray-400 dark:text-gray-300 text-md">
                  {event.content}
                </p>
                <div className="flex items-center mt-4">
                  <p className="flex items-center text-sm text-gray-300 flex-2">
                    <CheckCircleIcon className="w-6 h-6 mr-1 text-green-500" />{" "}
                    {event.attendees.length} Attendees
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
