import React, { useState, useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import Logo from "../../assets/Logo_no_margin.svg";
import useOutsideClick from "../../hooks/useOutsideClick";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useOutsideClick(menuRef, () => {
    setMenuOpen(!menuOpen);
  });

  return (
    <>
      <nav className="invisible md:visible font-body flex items-center flex-wrap bg-green-400 p-2 text-white">
        <NavLink
          exact
          to="/"
          className="inline-flex items-center p-2 mr-4 hover:bg-green-600 hover:text-white transition duration-300"
        >
          <img src={Logo} alt="HSG Logo" className="h-10 w-10 mr-2" />

          <span className="text-xl text-white md:text-sm font-bold uppercase tracking-wide">
            Haerlems Studenten Gildt
          </span>
        </NavLink>
        <div className="hidden w-full md:inline-flex md: md:mx-auto md:w-auto">
          <div className="md:inline-flex md:flex-row md:ml-auto md:w-auto w-full md:items-center items-start  flex flex-col md:h-auto">
            <NavLink
              to="/reserve"
              activeClassName="bg-green-600"
              className="md:inline-flex md:w-auto w-full px-3 py-2 rounded font-bold items-center justify-center hover:bg-green-600 hover:text-white"
            >
              Reserve
            </NavLink>
            <NavLink
              to="/jukebox"
              activeClassName="bg-green-600"
              className="md:inline-flex md:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white"
            >
              Jukebox
            </NavLink>
            <NavLink
              to="/stampcard"
              activeClassName="bg-green-600"
              className="md:inline-flex md:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white"
            >
              Stampcard
            </NavLink>
          </div>
        </div>
        <div className="hidden w-full md:inline-flex  md:w-auto">
          <div className="md:inline-flex md:flex-row md:ml-auto md:w-auto w-full md:items-center items-start  flex flex-col md:h-auto">
            <div className="mr-8 flex md:ml-6 relative">
              <div>
                <button
                  type="button"
                  className="max-w-xs rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-300 focus:ring-green-600"
                  id="user-menu"
                  aria-expanded="false"
                  aria-haspopup="true"
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="h-10 w-10 rounded-full border-2 border-white"
                    src="https://thecodingsnail.dev/img/profile-image-light.jpeg"
                    alt=""
                  />
                </button>
              </div>
              {menuOpen && (
                <div
                  ref={menuRef}
                  className={`origin-top-right absolute right-0 mt-12 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-green-600 ring-opacity-5 focus:outline-none transition ease-${
                    menuOpen ? "out" : "in"
                  } duration-${menuOpen ? "100" : "75"} transform opacity-${
                    menuOpen ? "100" : "0"
                  } scale-${menuOpen ? "100" : "95"}`}
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu"
                >
                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                  >
                    Your Profile
                  </Link>

                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                  >
                    Settings
                  </Link>

                  <Link
                    to="/signout"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                  >
                    Sign out
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
      <div className="">
        {menuOpen && (
          <div
            ref={menuRef}
            className="md:hidden fixed xs:bottom-12 xs:pb-5 bottom-20 mb-2 pt-4 pb-3 w-full border-t border-green-600 bg-green-200 "
          >
            <div className="flex items-center px-5">
              <div className="flex-shrink-0">
                <img
                  className="h-10 w-10 rounded-full border-2 border-white"
                  src="https://thecodingsnail.dev/img/profile-image-light.jpeg"
                  alt=""
                />
              </div>
              <div className="ml-3">
                <div className="text-base mb-1 font-medium leading-none text-white">
                  Dion Alting
                </div>
                <div className="text-sm font-medium leading-none text-gray-400">
                  dion@test.com
                </div>
              </div>
            </div>
            <div className="mt-3 px-2 space-y-1 text-green-700">
              <Link
                to="#"
                className="block px-3 py-2 rounded-md text-base font-medium  hover:bg-green-600 hover:text-white"
              >
                Your Profile
              </Link>

              <Link
                to="#"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-green-600 hover:text-white"
              >
                Settings
              </Link>

              <Link
                to="#"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-green-600 hover:text-white"
              >
                Sign out
              </Link>
            </div>
          </div>
        )}
        <nav className="visible md:invisible w-full fixed bottom-0 inset-x-0 bg-green-400 flex justify-between text-xs text-white uppercase font-body">
          <NavLink
            to="/"
            className="w-full block py-5 px-3 text-center hover:bg-green-200 hover:text-green-800 transition duration-300"
          >
            <svg
              className="w-6 h-6 mb-2 mx-auto"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            <span className="xs:hidden">Home</span>
          </NavLink>

          <NavLink
            to="/"
            className="w-full block py-5 px-3 text-center  hover:bg-green-200 hover:text-green-800 transition duration-300"
          >
            <svg
              className="w-6 h-6 mb-2 mx-auto"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
              />
            </svg>
            <span className="xs:hidden">Reserve</span>
          </NavLink>

          <NavLink
            to="/"
            className="w-full block py-5 px-3 text-center  hover:bg-green-200 hover:text-green-800 transition duration-300"
          >
            <svg
              className="w-6 h-6 mb-2 mx-auto"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
              />
            </svg>
            <span className="xs:hidden">Jukebox </span>
          </NavLink>

          <NavLink
            to="/"
            className="w-full block py-5 px-3 text-center  hover:bg-green-200 hover:text-green-800 transition duration-300"
          >
            <svg
              className="w-6 h-6 mb-2 mx-auto"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
              />
            </svg>
            <span className="xs:hidden">Stamps</span>
          </NavLink>
          <NavLink
            onClick={() => setMenuOpen(!menuOpen)}
            to="/"
            className="w-full block py-5 px-3 text-center hover:bg-green-200 hover:text-green-800 transition duration-300"
          >
            <svg
              className="w-6 h-6 mb-2 mx-auto"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="xs:hidden">Profile</span>
          </NavLink>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
