import React from "react";
import { AvailableSeatsCard } from "../AvailableSeatsCard/";
import { ReserveForm } from "./ReserveForm/";

export const Reserve = () => {
  return (
    <div className="container flex flex-wrap items-center px-5 py-12 mx-auto md:py-20 font-body lg:w-2/3">
      <div className="w-full px-5 bg-white border-t-2 border-green-400 shadow-lg md:h-50 lg:w-3/5 md:w-3/5 md:pr-16 lg:pr-0 rounded-xl">
        <div className="py-3 mx-auto md:pr-4 ">
          <div
            className="p-4 text-xs text-blue-600 bg-blue-200 rounded-xl xl:text-base"
            role="alert"
          >
            <p className="font-bold">Rules</p>
            <ol className="list-disc list-inside">
              <li>
                First come, first served principle
                <span
                  className="ml-1"
                  role="img"
                  aria-label="Raising Hands"
                  aria-labelledby="hidden-label-element"
                >
                  🙌
                </span>
              </li>
              <li>
                A reservation on <strong>Thursday</strong> is from
                <strong> 16:00</strong> till <strong>22:00</strong>
              </li>
              <li>
                From <strong>21:00</strong> we are not allowed to admit new
                guests so please be on time!
              </li>
              <li>
                Max. <strong>2</strong> persons per reservation
              </li>
              <li>
                Press the <strong>add person</strong> button to add a party
                member
              </li>
              <li>If you don't stay the whole night please leave a comment</li>
            </ol>
            <p className="mt-2 font-semibold">
              Rules and times may change during the Covid-19 pandemic. Please
              check our socials to stay up-to-date
            </p>
          </div>
        </div>

        <ReserveForm />
      </div>
      <div className="flex flex-col w-full mt-10 rounded-lg lg:w-2/6 md:w-2/6 md:ml-auto md:mt-0">
        <AvailableSeatsCard />
      </div>
    </div>
  );
};
