import React from "react";
import { useReservationsByDate } from "./hooks";
import { ReservationTable } from "./component";

const ReservationTableContainer = () => {
  const reservations = useReservationsByDate();

  return <ReservationTable reservations={reservations} />;
};

export default ReservationTableContainer;
