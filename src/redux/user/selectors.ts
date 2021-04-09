import { ReduxState } from "../store";

export const user = (state: ReduxState) => state.user;

export const isAuthenticated = (state: ReduxState) =>
  state.user.isAuthenticated;
export const isAdmin = (state: ReduxState) => state.user.isAdmin;
