import React from "react";
import moment from "moment";

import stampImage from "../../../assets/stamp.png";
import { StampListProps } from "./types";

export const ReservationStampCard = (props: StampListProps) => {
  return (
    <div className="container flex flex-col items-center justify-center w-full mx-auto mt-10 rounded-lg ">
      <div className="w-full px-4 py-5 border-b sm:px-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900 ">
          Reservation Stamps
        </h3>
        <p className="max-w-2xl mt-1 text-sm text-gray-500 ">
          You earn a stamp each time you show up and not cancel your reservation
        </p>
      </div>
      {props.reservationStamps.length ? (
        <ul className="flex flex-col w-full divide-y divide">
          {props.reservationStamps.map((stamp) => (
            <li className="flex flex-row">
              <div className="flex items-center flex-1 p-4 ">
                <div className="flex-1 pl-1 mr-16">
                  <div className="font-medium">
                    {moment(stamp.createdAt).format("dddd Do MMMM YYYY")}
                  </div>
                </div>
                <div className="flex flex-col items-center justify-end w-10 h-10 mr-4">
                  <img
                    alt="stamp"
                    src={stampImage}
                    className="object-cover w-10 h-10 mx-auto rounded-full "
                  />
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <h3 className="mt-5 text-lg font-medium leading-6 text-gray-900 ">
          You don't have any stamps yet :(
        </h3>
      )}
    </div>
  );
};
