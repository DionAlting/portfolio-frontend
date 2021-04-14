import React from "react";
import { useSelector } from "react-redux";
import { User } from "../../../redux";

import { ReservationStampCard } from "./component";

const ReservationStampCardContainer = () => {
  const reservationStamps = useSelector(User.Selectors.reservationStamps);
  return <ReservationStampCard reservationStamps={reservationStamps} />;
};

export default ReservationStampCardContainer;
