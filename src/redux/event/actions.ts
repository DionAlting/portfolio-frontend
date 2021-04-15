import axios from "axios";
import { Dispatch } from "redux";
import { FETCH_EVENTS_SUCCESS } from "../actionTypes";
import { EventPayload } from "./types";

const API_URL = process.env.REACT_APP_API_URL;

const fetchEventsSuccess = (data: EventPayload) => {
  return {
    type: FETCH_EVENTS_SUCCESS,
    payload: data,
  };
};

export const fetchEvents = () => async (dispatch: Dispatch) => {
  try {
    const eventsResponse = await axios.get(`${API_URL}/events`);
    dispatch(fetchEventsSuccess(eventsResponse.data));
  } catch (error) {
    console.log(error);
  }
};
