import React, { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { ReservationDates, User } from "../../../redux";
import { ReserveForm } from "./component";

const ReserveFormContainer = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const allDates = useSelector(ReservationDates.Selectors.reservationDates);
  const singleDate = useSelector(
    ReservationDates.Selectors.singleDate(selectedDate)
  );
  const { isAuthenticated, firstName, lastName } = useSelector(
    User.Selectors.user
  );

  const handleDateChange = useCallback((id: string) => {
    setSelectedDate(id);
  }, []);

  return (
    <ReserveForm
      allDates={allDates}
      handleDateChange={handleDateChange}
      singleDate={singleDate}
      isAuthenticated={isAuthenticated}
      firstName={firstName}
      lastName={lastName}
    />
  );
};

export default ReserveFormContainer;
