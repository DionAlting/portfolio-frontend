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
      <nav className="flex-wrap items-center hidden p-2 text-white bg-green-400 md:flex font-body">
        <NavLink
          exact
          to="/"
          className="inline-flex items-center p-2 mr-4 transition duration-300 hover:bg-green-600 hover:text-white"
        >
          <img src={Logo} alt="HSG Logo" className="w-10 h-10 mr-2" />

          <span className="text-xl font-bold tracking-wide text-white uppercase md:text-sm">
            Haerlems Studenten Gildt
          </span>
        </NavLink>
        <div className="hidden space-x-4 md:inline-flex md:mx-auto md:w-auto">
          <div className="flex flex-col items-start w-full md:inline-flex md:flex-row md:ml-auto md:w-auto md:items-center md:h-auto">
            <NavLink
              to="/reserve"
              activeClassName="bg-green-600"
              className="items-center justify-center w-full px-3 py-2 font-bold rounded md:inline-flex md:w-auto hover:bg-green-600 hover:text-white"
            >
              Reserve
            </NavLink>
            <NavLink
              to="/jukebox"
              activeClassName="bg-green-600"
              className="items-center justify-center w-full px-3 py-2 font-bold text-white rounded md:inline-flex md:w-auto hover:bg-green-600 hover:text-white"
            >
              Jukebox
            </NavLink>
            <NavLink
              to="/stampcard"
              activeClassName="bg-green-600"
              className="items-center justify-center w-full px-3 py-2 font-bold text-white rounded md:inline-flex md:w-auto hover:bg-green-600 hover:text-white"
            >
              Stampcard
            </NavLink>
          </div>
        </div>
        <div className="hidden w-full md:inline-flex md:w-auto">
          <div className="flex flex-col items-start w-full md:inline-flex md:flex-row md:ml-auto md:w-auto md:items-center md:h-auto">
            <div className="relative flex mr-8 md:ml-6">
              {props.isAuthenticated ? (
                <div>
                  <button
                    type="button"
                    className="flex items-center max-w-xs text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-300 focus:ring-green-600"
                    id="user-menu"
                    aria-expanded="false"
                    aria-haspopup="true"
                    onClick={() => setMenuOpen(!menuOpen)}
                  >
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="w-10 h-10 border-2 border-white rounded-full"
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
                    className="items-center justify-center w-full px-3 py-2 font-bold text-white rounded md:inline-flex md:w-auto hover:bg-green-600 hover:text-white"
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
                  {props.isAuthenticated && props.isAdmin && (
                    <Link
                      to="/backoffice"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Back office
                    </Link>
                  )}

                  <hr />
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
              className="fixed z-10 w-full pt-4 pb-3 mb-2 bg-green-200 border-t border-green-600 md:hidden xs:bottom-12 xs:pb-5 bottom-20 "
            >
              <div className="flex items-center px-5">
                <div className="flex-shrink-0">
                  <img
                    className="w-10 h-10 border-2 border-white rounded-full"
                    src={props.avatar}
                    alt={props.displayName}
                  />
                </div>
                <div className="ml-3">
                  <div className="mb-1 text-base font-medium leading-none text-white">
                    Hi! {props.fullName}
                  </div>
                  <div className="text-sm font-medium leading-none text-gray-600">
                    {props.email}
                  </div>
                </div>
              </div>
              <div className="px-2 mt-3 space-y-1 text-green-700">
                <Link
                  to="/profile"
                  className="block px-3 py-2 text-base font-medium rounded-md hover:bg-green-600 hover:text-white"
                >
                  Your Profile
                </Link>
                {props.isAdmin && (
                  <Link
                    to="/backoffice"
                    className="block px-3 py-2 text-base font-medium rounded-md hover:bg-green-600 hover:text-white"
                  >
                    Back office
                  </Link>
                )}
                <Link
                  to="/"
                  onClick={props.handleLogout}
                  className="block px-3 py-2 text-base font-medium rounded-md hover:bg-green-600 hover:text-white"
                >
                  Sign out
                </Link>
              </div>
            </div>
          ) : (
            <div
              ref={menuRef}
              className="fixed w-full pt-4 pb-3 mb-2 bg-green-200 border-t border-green-600 md:hidden xs:bottom-12 xs:pb-5 bottom-20 "
            >
              <div className="flex items-center px-5">
                <div className="ml-3">
                  <div className="mb-1 text-base font-medium leading-none text-white">
                    Hi! Login below to view your account
                  </div>
                  <div className="text-sm font-medium leading-none text-gray-600">
                    {props.email}
                  </div>
                </div>
              </div>
              <div className="px-2 mt-3 space-y-1 text-green-700">
                <NavLink
                  to="/login"
                  activeClassName="text-white bg-green-600"
                  className="block px-3 py-2 text-base font-medium rounded-md hover:bg-green-600 hover:text-white"
                >
                  Login
                </NavLink>
              </div>
            </div>
          ))}
        <nav className="fixed inset-x-0 bottom-0 z-10 flex justify-between w-full text-xs text-white uppercase bg-green-400 md:hidden font-body">
          <NavLink
            to="/"
            className="block w-full px-3 py-5 text-center transition duration-300 hover:bg-green-200 hover:text-green-800"
          >
            <HomeIcon className="w-6 h-6 mx-auto mb-2" />
            <span className="xs:hidden">Home</span>
          </NavLink>

          <NavLink
            to="/reserve"
            className="block w-full px-3 py-5 text-center transition duration-300 hover:bg-green-200 hover:text-green-800"
          >
            <TicketIcon className="w-6 h-6 mx-auto mb-2" />
            <span className="xs:hidden">Reserve</span>
          </NavLink>

          <NavLink
            to="/jukebox"
            className="block w-full px-3 py-5 text-center transition duration-300 hover:bg-green-200 hover:text-green-800"
          >
            <MusicNoteIcon className="w-6 h-6 mx-auto mb-2" />
            <span className="xs:hidden">Jukebox </span>
          </NavLink>

          <NavLink
            to="/stampcard"
            className="block w-full px-3 py-5 text-center transition duration-300 hover:bg-green-200 hover:text-green-800"
          >
            <BadgeCheckIcon className="w-6 h-6 mx-auto mb-2" />
            <span className="xs:hidden">Stamps</span>
          </NavLink>
          <NavLink
            onClick={() => setMenuOpen(!menuOpen)}
            to="#"
            className="block w-full px-3 py-5 text-center transition duration-300 hover:bg-green-200 hover:text-green-800"
          >
            <UserCircleIcon className="w-6 h-6 mx-auto mb-2" />
            <span className="xs:hidden">Profile</span>
          </NavLink>
        </nav>
      </div>
    </>
  );
};
