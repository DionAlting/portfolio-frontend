import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Reserve } from "../../redux";
import { AvailableSeatsCard } from "./component";

const AvailableSeatsCardContainer = () => {
  const dispatch = useDispatch();
  const allDates = useSelector(Reserve.Selectors.reservationDates);

  useEffect(() => {
    dispatch(Reserve.Actions.fetchDates());
  }, [dispatch]);

  return (
    <div>
      <AvailableSeatsCard allDates={allDates} />
    </div>
  );
};

export default AvailableSeatsCardContainer;
