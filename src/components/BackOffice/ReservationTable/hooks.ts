import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Actions, Selectors } from "../../../redux/backoffice";

export type ReservationDate = {
  id: string;
  date: string;
  isActive: boolean;
  reservations: Reservation[];
};

type Reservation = {
  id: string;
  dateId: string;
  userId: string;
  firstName: string;
  lastName: string;
  comment: string;
  coins: number;
  isCanceled: boolean;
  isCheckedOut: boolean;
};

export const useReservationsByDate = (): ReservationDate[] => {
  const dispatch = useDispatch();
  const reservations = useSelector(Selectors.reservationsByDate);

  useEffect(() => {
    dispatch(Actions.fetchAllReservations());
  }, [dispatch]);

  const formattedReservations: ReservationDate[] = React.useMemo(
    () =>
      reservations.map((rawReservation) => {
        const { id, date, isActive, reservations } = rawReservation;

        return {
          id,
          date,
          isActive,
          reservations,
        };
      }),
    [reservations]
  );

  return formattedReservations;
};
