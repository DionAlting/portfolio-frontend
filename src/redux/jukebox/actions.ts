import axios from "axios";
import { Dispatch } from "redux";
import { FETCH_SONGS_SUCCESS } from "../actionTypes";
import { SongsPayload } from "./types";

const API_URL = process.env.REACT_APP_API_URL;

export const songsFetchedSuccess = (data: SongsPayload) => ({
  type: FETCH_SONGS_SUCCESS,
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
