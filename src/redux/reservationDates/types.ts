import { FETCH_DATES_SUCCESS } from "../actionTypes";

export type ReservationDatesState = {
  reservationDates: any;
};

export type ReservationDatesAction = {
  type: typeof FETCH_DATES_SUCCESS;
  payload: [ReservationDatePayload];
};

export type ReservationDatePayload = {
  id: string;
  date: string;
  maxSeats: number;
  maxPerParty: number;
  bookedSeats: number;
  isStampable: boolean;
  isActive: boolean;
};
