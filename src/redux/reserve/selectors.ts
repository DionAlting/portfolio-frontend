import { ReduxState } from "../store";

export const reservationDates = (state: ReduxState) =>
  state.reserve.reservationDates;

export const singleDate = (id: string) => (state: ReduxState) => {
  const clonedDates = [...state.reserve.reservationDates];
  const specificDay = clonedDates.find((date) => {
    return id === date.id;
  });
  return specificDay;
};
