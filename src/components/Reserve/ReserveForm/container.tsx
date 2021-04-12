import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Reserve, User } from "../../../redux";
import { ReserveForm } from "./component";
import { ReservationValues } from "./types";

const ReserveFormContainer = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const dispatch = useDispatch();
  const allDates = useSelector(Reserve.Selectors.reservationDates);
  const singleDate = useSelector(Reserve.Selectors.singleDate(selectedDate));
  const { isAuthenticated, firstName, lastName } = useSelector(
    User.Selectors.user
  );

  const handleDateChange = useCallback((id: string) => {
    setSelectedDate(id);
  }, []);

  const handleReservationSubmit = (values: ReservationValues) => {
    //const { dateId, reservationDetails, comment } = values;
    console.log(values);
    dispatch(Reserve.Actions.submitNewReservation(values));
  };
  return (
    <ReserveForm
      allDates={allDates}
      handleDateChange={handleDateChange}
      handleReservationSubmit={handleReservationSubmit}
      singleDate={singleDate}
      isAuthenticated={isAuthenticated}
      firstName={firstName}
      lastName={lastName}
    />
  );
};

export default ReserveFormContainer;
