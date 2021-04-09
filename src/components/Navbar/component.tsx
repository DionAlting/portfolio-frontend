import React, { useState, useRef } from "react";
import { NavLink, Link } from "react-router-dom";

import useOutsideClick from "../../hooks/useOutsideClick";

import { NavbarProps } from "./types";

import Logo from "../../assets/Logo_no_margin.svg";
import {
  HomeIcon,
  TicketIcon,
  MusicNoteIcon,
  BadgeCheckIcon,
  UserCircleIcon,
} from "@heroicons/react/outline";

export const Navbar = (props: NavbarProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useOutsideClick(menuRef, () => {
    setMenuOpen(!menuOpen);
  });

  return (
    <>
      <nav className="hidden md:flex font-body items-center flex-wrap bg-green-400 p-2 text-white">
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
        <div className="hidden md:inline-flex space-x-4 md:mx-auto md:w-auto">
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
              {props.isAuthenticated ? (
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
                      src={props.avatar}
                      alt=""
                    />
                  </button>
                </div>
              ) : (
                <div>
                  <NavLink
                    to="/login"
                    activeClassName="bg-green-600"
                    className="md:inline-flex md:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white"
                  >
                    Login
                  </NavLink>
                </div>
              )}

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

                  <span
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={props.handleLogout}
                  >
                    Sign out
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
      <div className="">
        {menuOpen &&
          (props.isAuthenticated ? (
            <div
              ref={menuRef}
              className="md:hidden fixed xs:bottom-12 xs:pb-5 bottom-20 mb-2 pt-4 pb-3 w-full border-t border-green-600 bg-green-200 "
            >
              <div className="flex items-center px-5">
                <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full border-2 border-white"
                    src={props.avatar}
                    alt={props.displayName}
                  />
                </div>
                <div className="ml-3">
                  <div className="text-base mb-1 font-medium leading-none text-white">
                    Hi! {props.fullName}
                  </div>
                  <div className="text-sm font-medium leading-none text-gray-600">
                    {props.email}
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
                  onClick={props.handleLogout}
                  className="block px-3 py-2 rounded-md text-base font-medium hover:bg-green-600 hover:text-white"
                >
                  Sign out
                </Link>
              </div>
            </div>
          ) : (
            <div
              ref={menuRef}
              className="md:hidden fixed xs:bottom-12 xs:pb-5 bottom-20 mb-2 pt-4 pb-3 w-full border-t border-green-600 bg-green-200 "
            >
              <div className="flex items-center px-5">
                <div className="ml-3">
                  <div className="text-base mb-1 font-medium leading-none text-white">
                    Hi! Login below to view your account
                  </div>
                  <div className="text-sm font-medium leading-none text-gray-600">
                    {props.email}
                  </div>
                </div>
              </div>
              <div className="mt-3 px-2 space-y-1 text-green-700">
                <NavLink
                  to="/login"
                  activeClassName="text-white bg-green-600"
                  className="block px-3 py-2 rounded-md text-base font-medium hover:bg-green-600 hover:text-white"
                >
                  Login
                </NavLink>
              </div>
            </div>
          ))}
        <nav className="flex md:hidden w-full fixed z-10 bottom-0 inset-x-0 bg-green-400 justify-between text-xs text-white uppercase font-body">
          <NavLink
            to="/"
            className="w-full block py-5 px-3 text-center hover:bg-green-200 hover:text-green-800 transition duration-300"
          >
            <HomeIcon className="w-6 h-6 mb-2 mx-auto" />
            <span className="xs:hidden">Home</span>
          </NavLink>

          <NavLink
            to="/"
            className="w-full block py-5 px-3 text-center  hover:bg-green-200 hover:text-green-800 transition duration-300"
          >
            <TicketIcon className="w-6 h-6 mb-2 mx-auto" />
            <span className="xs:hidden">Reserve</span>
          </NavLink>

          <NavLink
            to="/"
            className="w-full block py-5 px-3 text-center  hover:bg-green-200 hover:text-green-800 transition duration-300"
          >
            <MusicNoteIcon className="w-6 h-6 mb-2 mx-auto" />
            <span className="xs:hidden">Jukebox </span>
          </NavLink>

          <NavLink
            to="/"
            className="w-full block py-5 px-3 text-center  hover:bg-green-200 hover:text-green-800 transition duration-300"
          >
            <BadgeCheckIcon className="w-6 h-6 mb-2 mx-auto" />
            <span className="xs:hidden">Stamps</span>
          </NavLink>
          <NavLink
            onClick={() => setMenuOpen(!menuOpen)}
            to="#"
            className="w-full block py-5 px-3 text-center hover:bg-green-200 hover:text-green-800 transition duration-300"
          >
            <UserCircleIcon className="w-6 h-6 mb-2 mx-auto" />
            <span className="xs:hidden">Profile</span>
          </NavLink>
        </nav>
      </div>
    </>
  );
};
