import { FETCH_RESERVATION_BY_DATE_SUCCESS } from "../actionTypes";

export type BackOfficeState = {
  reservationsByDate: ReservationDate[];
};

export type ReservationDatesPayload = {
  reservationDates: ReservationDate[];
};

export type ReservationDate = {
  id: string;
  date: string;
  maxSeats: number;
  maxPerParty: number;
  bookedSeats: number;
  isStampable: boolean;
  isActive: boolean;
  reservations: Reservations[];
};

export type Reservations = {
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

export type BackOfficeAction = {
  type: typeof FETCH_RESERVATION_BY_DATE_SUCCESS;
  payload: ReservationDatesPayload;
};
