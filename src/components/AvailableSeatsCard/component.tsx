import React, { Fragment } from "react";
import { AvailableSeatsProps, Date } from "./types";
import moment from "moment";

export const AvailableSeatsCard = (props: AvailableSeatsProps) => {
  return (
    <div className="p-4 overflow-hidden text-gray-700 bg-white border-t-2 border-green-400 shadow-lg rounded-xl dark:bg-gray-800 dark:text-gray-100">
      <div className="w-full">
        <p className="mb-4 text-2xl font-light text-gray-700 dark:text-white">
          Available Seats
        </p>
        {props.allDates &&
          props.allDates?.map((date: Date) => (
            <Fragment key={date.id}>
              <div className="flex items-center justify-between text-sm text-gray-400">
                <p>{moment(date.date).format("dddd DD MMMM")}</p>
                <p>
                  {date.bookedSeats}/{date.maxSeats}
                </p>
              </div>
              <div className="w-full h-2 mb-4 bg-green-100 rounded-full">
                <div
                  style={{
                    width: `${Math.round(
                      (100 * date.bookedSeats) / date.maxSeats
                    )}%`,
                  }}
                  className={`h-full text-xs text-center text-white 
                  ${
                    date.bookedSeats >= date.maxSeats / 2 &&
                    date.bookedSeats < date.maxSeats
                      ? "bg-yellow-500"
                      : ""
                  } ${date.bookedSeats === date.maxSeats ? "bg-red-500" : ""} ${
                    date.bookedSeats < date.maxSeats / 2 ? "bg-green-400" : ""
                  } rounded-full`}
                ></div>
              </div>
            </Fragment>
          ))}
      </div>
    </div>
  );
};
