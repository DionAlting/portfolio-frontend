import { ReduxState } from "../store";

export const reservationsByDate = (state: ReduxState) =>
  state.backOffice.reservationsByDate;
