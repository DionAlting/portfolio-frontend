import { Link } from "react-router-dom";

export const SignUpForm = () => {
  return (
    <div className="mt-4">
      <form>
        <div className="flex flex-col mb-2">
          <div className="relative ">
            <input
              type="text"
              className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
              name="Username"
              placeholder="Username"
            />
          </div>
        </div>
        <div className="flex gap-4 mb-2">
          <div className="relative ">
            <input
              type="text"
              className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
              name="First name"
              placeholder="First name"
            />
          </div>
          <div className="relative ">
            <input
              type="text"
              className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
              name="Last name"
              placeholder="Last name"
            />
          </div>
        </div>
        <div className="flex flex-col mb-2">
          <div className="relative ">
            <input
              type="text"
              className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
              placeholder="Email"
            />
          </div>
        </div>
        <div className="flex flex-col mb-2">
          <div className="relative ">
            <input
              type="password"
              className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
              placeholder="password"
            />
          </div>
        </div>
        <div className="flex flex-col mb-2">
          <div className="relative ">
            <input
              type="password"
              className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
              placeholder="Confirm Password"
            />
          </div>
        </div>
        <div className="flex w-full my-4">
          <button
            type="submit"
            className="py-2 px-4  bg-green-600 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
          >
            Sign up
          </button>
        </div>
      </form>
      <div className="flex items-center justify-center mt-6">
        <span className="justify-center text-sm text-center text-gray-500 flex-items-center dark:text-gray-400">
          Already have an account?
          <Link
            to="/login"
            className="text-sm text-green-500 underline hover:text-green-600 ml-1"
          >
            Login
          </Link>
        </span>
      </div>
    </div>
  );
};
