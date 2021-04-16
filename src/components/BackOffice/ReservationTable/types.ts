import { ReservationDate } from "./hooks";

export type ReservationTableProps = {
  reservations: ReservationDate[];
  handleCheckoutClick: (reservationId: string) => void;
  handleIncrementCoinsClick: (reservationId: string) => void;
  handleDecrementCoinsClick: (reservationId: string) => void;
};
