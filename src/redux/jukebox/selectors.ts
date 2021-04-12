import { ReduxState } from "../store";

export const requestedSongs = (state: ReduxState) =>
  state.jukebox.requestedSongs;
