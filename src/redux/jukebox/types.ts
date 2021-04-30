import { FETCH_SONGS_SUCCESS } from "../actionTypes";

export type JukeboxState = {
  requestedSongs: SongsPayload[];
};

export type ReservationDatesAction = {
  type: typeof FETCH_SONGS_SUCCESS;
  payload: [SongsPayload];
};

export type SongsPayload = {
  id: string;
  userId: string;
  artist: string;
  title: string;
  voteCount: number;
  votes: Votes[];
};

export type Votes = {
  userId: string;
};

export type SongRequestValues = {
  artist: string;
  title: string;
};
