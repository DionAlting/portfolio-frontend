import React from "react";
import { PlusIcon, MinusIcon } from "@heroicons/react/outline";
import { ReservationTableProps } from "./types";
import moment from "moment";

export const ReservationTable = ({
  reservations,
  handleCheckoutClick,
  handleIncrementCoinsClick,
  handleDecrementCoinsClick,
}: ReservationTableProps) => {
  return (
    <div className="w-full">
      {reservations.map((date) => (
        <div className="py-4 mx-auto overflow-x-auto " key={date.id}>
          <h2 className="px-4 py-2 text-xl leading-tight text-white bg-green-400 rounded-t-lg">
            {moment(date.date).format("dddd do MMMM YYYY")}
          </h2>
          <div className="inline-block min-w-full overflow-hidden rounded-lg shadow">
            {date.reservations.length > 0 ? (
              <table className="min-w-full leading-normal table-fixed">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="w-1/2 px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="w-1/2 px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                    >
                      Comment
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 text-sm font-normal text-center text-gray-800 uppercase bg-white border-b border-gray-200"
                    >
                      Coins
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 text-sm font-normal text-center text-gray-800 uppercase bg-white border-b border-gray-200"
                    >
                      Cancel
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 text-sm font-normal text-center text-gray-800 uppercase bg-white border-b border-gray-200"
                    >
                      Check out
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {date.reservations.map((item) => (
                    <tr key={item.id}>
                      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {item.firstName} {item.lastName}
                        </p>
                      </td>
                      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {item.comment}
                        </p>
                      </td>
                      <td className="flex flex-row items-center justify-center px-5 py-8 space-x-2 text-sm text-center bg-white border-b border-gray-200">
                        <button
                          onClick={() => handleDecrementCoinsClick(item.id)}
                        >
                          <MinusIcon className="w-4 h-4 text-red-400" />
                        </button>

                        <p className="text-gray-900 whitespace-no-wrap">
                          {item.coins}
                        </p>
                        <button
                          onClick={() => handleIncrementCoinsClick(item.id)}
                        >
                          <PlusIcon className="w-4 h-4 text-green-400" />
                        </button>
                      </td>
                      <td className="px-5 py-5 text-sm text-center bg-white border-b border-gray-200">
                        <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-red-900 hover:text-red-600">
                          <button>
                            <span
                              aria-hidden="true"
                              className="absolute inset-0 bg-red-200 rounded-full opacity-50"
                            ></span>
                            <span className="relative">Cancel</span>
                          </button>
                        </span>
                      </td>
                      <td className="px-5 py-5 text-sm text-center bg-white border-b border-gray-200">
                        <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-gray-900 hover:text-gray-500">
                          <button onClick={() => handleCheckoutClick(item.id)}>
                            <span
                              aria-hidden="true"
                              className="absolute inset-0 bg-gray-400 rounded-full opacity-50"
                            ></span>
                            <span className="relative">Checkout</span>
                          </button>
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p className="p-4">No reservations for this day yet</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
