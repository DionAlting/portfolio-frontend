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

  const handleIncrementCoinsClick = (reservationId: string) => {
    console.log(reservationId);
    dispatch(BackOffice.Actions.incrementCoins(reservationId));
  };

  const handleDecrementCoinsClick = (reservationId: string) => {
    console.log(reservationId);
    dispatch(BackOffice.Actions.decrementCoins(reservationId));
  };

  return (
    <ReservationTable
      reservations={reservations}
      handleCheckoutClick={handleCheckoutClick}
      handleIncrementCoinsClick={handleIncrementCoinsClick}
      handleDecrementCoinsClick={handleDecrementCoinsClick}
    />
  );
};

export default ReservationTableContainer;
