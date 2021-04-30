import { ReduxState } from "../store";

export const user = (state: ReduxState) => state.user;

export const isAuthenticated = (state: ReduxState) =>
  state.user.isAuthenticated;
export const isAdmin = (state: ReduxState) => state.user.isAdmin;

export const reservationStamps = (state: ReduxState) => {
  const reservationStamps = [...state.user.stamps];

  const filtered = reservationStamps.filter(
    (stamp) => stamp.reservationId !== null
  );
  return filtered;
};

export const eventStamps = (state: ReduxState) => {
  const eventStamps = [...state.user.stamps];

  const filtered = eventStamps.filter((stamp) => stamp.eventId !== null);
  return filtered;
};
