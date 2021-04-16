import React from "react";
import { useReservationsByDate } from "./hooks";
import { ReservationTable } from "./component";
import { useDispatch } from "react-redux";
import { BackOffice } from "../../../redux";

const ReservationTableContainer = () => {
  const dispatch = useDispatch();

  const reservations = useReservationsByDate();

  const handleCheckoutClick = (reservationId: string) => {
    console.log(reservationId);
    dispatch(BackOffice.Actions.checkOutGuest(reservationId));
  };

  return (
    <ReservationTable
      reservations={reservations}
      handleCheckoutClick={handleCheckoutClick}
    />
  );
};

export default ReservationTableContainer;
