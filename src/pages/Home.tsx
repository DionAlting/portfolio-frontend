import React from "react";
import { Link } from "react-router-dom";
import { AvailableSeatsCard } from "../components/AvailableSeatsCard";
import { Events } from "../components/Events";

const Home = () => {
  return (
    <>
      <div className="container flex flex-wrap items-center px-5 py-10 mx-auto lg:py-24 font-body">
        <div className="pr-0 lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0">
          <h1 className="text-3xl font-medium text-gray-900 title-font">
            Slow-carb next level shoindcgoitch ethical authentic, poko scenester
          </h1>
          <p className="mt-4 leading-relaxed">
            Poke slow-carb mixtape knausgaard, typewriter street art gentrify
            hammock starladder roathse. Craies vegan tousled etsy austin.
          </p>
          <div className="mt-5">
            <button
              className="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-green-500 rounded shadow outline-none active:bg-emerald-600 hover:shadow-lg focus:outline-none"
              type="button"
            >
              <Link to="/reserve">Reserve now</Link>
            </button>
          </div>
        </div>
        <div className="flex flex-col w-full mt-10 rounded-lg lg:w-2/6 md:w-1/2 md:ml-auto md:mt-0">
          <AvailableSeatsCard />
        </div>
      </div>
      <Events />
    </>
  );
};

export default Home;
