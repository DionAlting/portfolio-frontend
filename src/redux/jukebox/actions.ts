import axios from "axios";
import { toast } from "react-toastify";
import { Dispatch } from "redux";
import {
  DELETE_SONG_SUCCESS,
  DOWNVOTE_SONG_SUCCESS,
  FETCH_SONGS_SUCCESS,
  REQUEST_SONG_SUCCESS,
  UPVOTE_SONG_SUCCESS,
} from "../actionTypes";
import { ReduxState } from "../store";
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

export const deleteSongSuccess = (songId: string) => ({
  type: DELETE_SONG_SUCCESS,
  payload: songId,
});

export const fetchSongRequests = () => async (dispatch: Dispatch) => {
  try {
    const dateResponse = await axios.get(`${API_URL}/jukebox/requests`);
    dispatch(songsFetchedSuccess(dateResponse.data));
  } catch (error) {
    if (error.response) {
      toast.error(error.response.data.message);
    } else {
      toast.error("Something unexpected happened");
      console.log(error);
    }
  }
};

export const upvoteSongRequest = (songId: string) => async (
  dispatch: Dispatch,
  getState: () => ReduxState
) => {
  try {
    const { accessToken } = getState().user;
    await axios.put(
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
    if (error.response) {
      toast.error(error.response.data.message);
    } else {
      toast.error("Something unexpected happened");
      console.log(error);
    }
  }
};

export const downvoteSongRequest = (songId: string) => async (
  dispatch: Dispatch,
  getState: () => ReduxState
) => {
  try {
    const { accessToken } = getState().user;
    await axios.put(
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
    if (error.response) {
      toast.error(error.response.data.message);
    } else {
      toast.error("Something unexpected happened");
      console.log(error);
    }
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
    dispatch(submitRequestSuccess(requestResponse.data.newSongRequest));
  } catch (error) {
    if (error.response) {
      toast.error(error.response.data.message);
    } else {
      toast.error("Something unexpected happened");
      console.log(error);
    }
  }
};

export const deleteSongRequest = (songId: string) => async (
  dispatch: Dispatch,
  getState: () => ReduxState
) => {
  try {
    const { accessToken } = getState().user;
    const requestResponse = await axios.delete(
      `${API_URL}/jukebox/requests/${songId}`,
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );
    dispatch(deleteSongSuccess(songId));
    toast.success(requestResponse.data.message);
  } catch (error) {
    if (error.response) {
      toast.error(error.response.data.message);
    } else {
      toast.error("Something unexpected happened");
      console.log(error);
    }
  }
};
