import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ReservationDates } from "../../redux";
import { AvailableSeatsCard } from "./component";

const AvailableSeatsCardContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ReservationDates.Actions.fetchDates());
  }, [dispatch]);
  const allDates = useSelector(ReservationDates.Selectors.reservationDates);
  return (
    <div>
      <AvailableSeatsCard allDates={allDates} />
    </div>
  );
};

export default AvailableSeatsCardContainer;
