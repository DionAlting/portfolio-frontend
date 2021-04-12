import axios from "axios";
import { Dispatch } from "redux";
import { FETCH_DATES_SUCCESS } from "../actionTypes";
import { ReservationDatePayload } from "./types";

const API_URL = process.env.REACT_APP_API_URL;

export const datesFetchedSuccess = (data: ReservationDatePayload) => ({
  type: FETCH_DATES_SUCCESS,
  payload: data,
});

export const fetchDates = () => async (dispatch: Dispatch) => {
  const dateResponse = await axios.get(`${API_URL}/reserve/dates`);

  dispatch(datesFetchedSuccess(dateResponse.data));
};
