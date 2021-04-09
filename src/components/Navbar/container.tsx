import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { User } from "../../redux";
import { Navbar } from "./component";

const NavbarContainer = () => {
  const isAuthenticated = useSelector(User.Selectors.isAuthenticated);
  const dispatch = useDispatch();

  const {
    isAdmin,
    isStudyAssociation,
    displayName,
    firstName,
    lastName,
    avatar,
    email,
  } = useSelector(User.Selectors.user);

  const fullName = `${firstName} ${lastName}`;

  const handleLogout = () => {
    dispatch(User.Actions.logOut());
  };

  return (
    <Navbar
      isAuthenticated={isAuthenticated}
      isAdmin={isAdmin}
      isStudyAssociation={isStudyAssociation}
      displayName={displayName}
      fullName={fullName}
      avatar={avatar}
      email={email}
      handleLogout={handleLogout}
    />
  );
};
export default NavbarContainer;
