import { ReduxState } from "../store";

export const reservationDates = (state: ReduxState) => state.reservationDates;

export const singleDate = (id: string) => (state: ReduxState) => {
  const clonedDates = [...state.reservationDates];
  const specificDay = clonedDates.find((date) => {
    return id === date.id;
  });
  return specificDay;
};
