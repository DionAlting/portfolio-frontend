import { ReservationDate } from "./hooks";

export type ReservationTableProps = {
  reservations: ReservationDate[];
  handleCheckoutClick: (dateId: string, reservationId: string) => void;
  handleIncrementCoinsClick: (dateId: string, reservationId: string) => void;
  handleDecrementCoinsClick: (dateId: string, reservationId: string) => void;
  handleCancelReservationClick: (dateId: string, reservationId: string) => void;
};
