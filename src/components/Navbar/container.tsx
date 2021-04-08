import React from "react";
import { useSelector } from "react-redux";
import { User } from "../../redux";
import { Navbar } from "./component";

const NavbarContainer = () => {
  const isAuthenticated = useSelector(User.Selectors.isAuthenticated);
  return <Navbar />;
};
export default NavbarContainer;
