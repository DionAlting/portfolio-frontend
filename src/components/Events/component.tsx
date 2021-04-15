import React from "react";

export const Events = () => {
  return (
    <div className="container w-full p-6 bg-white lg:p-12">
      <div className="flex items-end justify-between mb-12 header">
        <div className="title">
          <p className="mb-4 text-4xl font-bold text-gray-700">
            Upcoming events
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-1 xl:grid-cols-1">
        <div className="m-auto overflow-hidden rounded-lg shadow-lg lg:w-3/5">
          <img
            alt="event"
            src="https://via.placeholder.com/1024x512"
            className="object-cover w-full max-h-80"
          />
          <div className="w-full p-4 bg-white dark:bg-gray-800">
            <p className="font-medium text-green-500 text-md">hsg</p>
            <p className="mb-2 text-xl font-medium text-gray-800 dark:text-white">
              Event
            </p>
            <p className="font-light text-gray-400 dark:text-gray-300 text-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              nobis eaque maxime error quia sit rerum cupiditate architecto,
              nulla laborum fugiat ex vel iste impedit nemo ullam delectus rem
              corporis!
            </p>
            <div className="flex items-center mt-4">
              <div className="flex flex-col justify-between flex-grow ml-4 text-sm">
                <p className="text-gray-800 dark:text-white">HSG</p>
                <p className="text-gray-400 dark:text-gray-300">
                  event date - event time
                </p>
              </div>
              <img
                alt="stamp"
                src="/images/person/6.jpg"
                className="object-cover w-10 h-10 rounded-full "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
