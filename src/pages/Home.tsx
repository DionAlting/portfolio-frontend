import React from "react";
import { AvailableSeatsCard } from "../components/AvailableSeatsCard";

const Home = () => {
  return (
    <div className="container flex flex-wrap items-center px-5 py-24 mx-auto font-body">
      <div className="pr-0 lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0">
        <h1 className="text-3xl font-medium text-gray-900 title-font">
          Slow-carb next level shoindcgoitch ethical authentic, poko scenester
        </h1>
        <p className="mt-4 leading-relaxed">
          Poke slow-carb mixtape knausgaard, typewriter street art gentrify
          hammock starladder roathse. Craies vegan tousled etsy austin.
        </p>
      </div>
      <div className="flex flex-col w-full p-8 mt-10 rounded-lg lg:w-2/6 md:w-1/2 md:ml-auto md:mt-0">
        <AvailableSeatsCard />
      </div>
    </div>
  );
};

export default Home;
