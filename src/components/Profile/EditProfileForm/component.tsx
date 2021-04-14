import React from "react";

export const EditProfileForm = () => {
  return (
    <div>
      <form className="max-w-2xl mx-auto mt-5 md:w-full">
        <div className="p-4">
          <div className="max-w-sm mx-auto md:w-full md:mx-0">
            <div className="inline-flex items-center space-x-4">
              <img
                alt="profile"
                src="https://i.pravatar.cc/300"
                className="object-cover w-16 h-16 mx-auto rounded-full "
              />

              <button
                type="submit"
                className="w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-green-600 rounded-lg shadow-md hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 focus:outline-none focus:ring-2 focus:ring-offset-2 "
              >
                Change
              </button>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
            <h2 className="max-w-sm mx-auto md:w-1/3">Account</h2>
            <div className="max-w-sm mx-auto space-y-5 md:w-2/3">
              <div>
                <div className="relative ">
                  <input type="text" />
                </div>
              </div>
              <div>
                <div className="relative ">
                  <input type="text" />
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
            <h2 className="max-w-sm mx-auto md:w-1/3">Personal info</h2>
            <div className="max-w-sm mx-auto space-y-5 md:w-2/3">
              <div>
                <div className="relative ">
                  <input type="text" />
                </div>
              </div>
              <div>
                <div className="relative ">
                  <input type="text" />
                </div>
              </div>
              <div>
                <div className="relative ">
                  <select name="studyAssoc" id="studyAssoc"></select>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="w-full px-4 pb-4 ml-auto text-gray-500 md:w-1/3">
            <button
              type="submit"
              className="w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-green-600 rounded-lg shadow-md hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 focus:outline-none focus:ring-2 focus:ring-offset-2 "
            >
              Update
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
