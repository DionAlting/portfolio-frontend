import React from "react";
import { useReservationsByDate } from "./hooks";
import { ReservationTable } from "./component";
import { useDispatch } from "react-redux";
import { BackOffice } from "../../../redux";

const ReservationTableContainer = () => {
  const dispatch = useDispatch();

  const reservations = useReservationsByDate();

  const handleCheckoutClick = (dateId: string, reservationId: string) => {
    dispatch(BackOffice.Actions.checkOutGuest(dateId, reservationId));
  };

  const handleIncrementCoinsClick = (dateId: string, reservationId: string) => {
    dispatch(BackOffice.Actions.incrementCoins(dateId, reservationId));
  };

  const handleDecrementCoinsClick = (dateId: string, reservationId: string) => {
    dispatch(BackOffice.Actions.decrementCoins(dateId, reservationId));
  };

  const handleCancelReservationClick = (
    dateId: string,
    reservationId: string
  ) => {
    dispatch(BackOffice.Actions.cancelReservation(dateId, reservationId));
  };

  return (
    <ReservationTable
      reservations={reservations}
      handleCheckoutClick={handleCheckoutClick}
      handleIncrementCoinsClick={handleIncrementCoinsClick}
      handleDecrementCoinsClick={handleDecrementCoinsClick}
      handleCancelReservationClick={handleCancelReservationClick}
    />
  );
};

export default ReservationTableContainer;
