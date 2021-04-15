import { ReduxState } from "../store";

export const requestedSongs = (state: ReduxState) => {
  const songs = state.jukebox.requestedSongs;

  const sortedSongs = [...songs].sort((song1, song2) => {
    return song2.voteCount - song1.voteCount;
  });
  return sortedSongs;
};
