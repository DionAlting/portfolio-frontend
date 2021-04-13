import axios from "axios";
import { Dispatch } from "redux";
import {
  DOWNVOTE_SONG_SUCCESS,
  FETCH_SONGS_SUCCESS,
  REQUEST_SONG_SUCCESS,
  UPVOTE_SONG_SUCCESS,
} from "../actionTypes";
import { ReduxState } from "../store";
import { requestedSongs } from "./selectors";
import { SongRequestValues, SongsPayload } from "./types";

const API_URL = process.env.REACT_APP_API_URL;

export const songsFetchedSuccess = (data: SongsPayload) => ({
  type: FETCH_SONGS_SUCCESS,
  payload: data,
});

export const upvoteSongSuccess = (songId: string) => ({
  type: UPVOTE_SONG_SUCCESS,
  payload: songId,
});

export const downSongSuccess = (songId: string) => ({
  type: DOWNVOTE_SONG_SUCCESS,
  payload: songId,
});

export const submitRequestSuccess = (data: SongsPayload) => ({
  type: REQUEST_SONG_SUCCESS,
  payload: data,
});

export const fetchSongRequests = () => async (dispatch: Dispatch) => {
  try {
    const dateResponse = await axios.get(`${API_URL}/jukebox/requests`);
    dispatch(songsFetchedSuccess(dateResponse.data));
  } catch (error) {
    console.log(error);
  }
};

export const upvoteSongRequest = (songId: string) => async (
  dispatch: Dispatch,
  getState: () => ReduxState
) => {
  try {
    const { accessToken } = getState().user;
    const upvoteResponse = await axios.put(
      `${API_URL}/jukebox/${songId}/upvote`,
      {
        songId,
      },
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );
    dispatch(upvoteSongSuccess(songId));
  } catch (error) {
    console.log(error);
  }
};

export const downvoteSongRequest = (songId: string) => async (
  dispatch: Dispatch,
  getState: () => ReduxState
) => {
  try {
    const { accessToken } = getState().user;
    const downvoteResponse = await axios.put(
      `${API_URL}/jukebox/${songId}/downvote`,
      {
        songId,
      },
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );
    dispatch(downSongSuccess(songId));
  } catch (error) {
    console.log(error);
  }
};

export const submitSongRequest = (values: SongRequestValues) => async (
  dispatch: Dispatch,
  getState: () => ReduxState
) => {
  try {
    const { artist, title } = values;
    const { accessToken } = getState().user;
    const requestResponse = await axios.post(
      `${API_URL}/jukebox/requests`,
      {
        artist,
        title,
      },
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );
    console.log(requestResponse);
    dispatch(submitRequestSuccess(requestResponse.data.newSongRequest));
  } catch (error) {
    console.log(error);
  }
};
