import React from "react";
import { useSelector } from "react-redux";
import { User } from "../../redux";
import { Stamp } from "./component";

const StampContainer = () => {
  const { isAuthenticated } = useSelector(User.Selectors.user);
  return <Stamp isAuthenticated={isAuthenticated} />;
};

export default StampContainer;
