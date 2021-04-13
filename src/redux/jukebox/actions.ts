import axios from "axios";
import { Dispatch } from "redux";
import {
  DOWNVOTE_SONG_SUCCESS,
  FETCH_SONGS_SUCCESS,
  UPVOTE_SONG_SUCCESS,
} from "../actionTypes";
import { ReduxState } from "../store";
import { SongsPayload } from "./types";

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
