import axios from "axios";
import { Dispatch } from "redux";
import { FETCH_DATES_SUCCESS } from "../actionTypes";
import { ReduxState } from "../store";
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

export const submitNewReservation = (values: any) => async (
  dispatch: Dispatch,
  getState: () => ReduxState
) => {
  try {
    const { accessToken } = getState().user;
    const { dateId, reservationDetails, comment } = values;
    console.log(accessToken, values);
    const response = await axios.post(
      `${API_URL}/reserve/${values.dateId}`,
      { dateId, reservationDetails, comment },
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );
    console.log(response);
  } catch (error) {
    console.log(error.message);
  }
};
