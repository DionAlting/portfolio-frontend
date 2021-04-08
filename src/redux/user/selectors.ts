import { ReduxState } from "../store";

export const isAuthenticated = (state: ReduxState) =>
  state.user.isAuthenticated;
