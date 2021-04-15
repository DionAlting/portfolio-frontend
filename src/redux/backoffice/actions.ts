import axios from "axios";
import { Dispatch } from "redux";
import { FETCH_RESERVATION_BY_DATE_SUCCESS } from "../actionTypes";
import { ReduxState } from "../store";
import { ReservationDatesPayload } from "./types";

const API_URL = process.env.REACT_APP_API_URL;

const fetchReservationsSuccess = (data: ReservationDatesPayload) => {
  return {
    type: FETCH_RESERVATION_BY_DATE_SUCCESS,
    payload: data,
  };
};

export const fetchAllReservations = () => async (
  dispatch: Dispatch,
  getState: () => ReduxState
) => {
  try {
    const { accessToken } = getState().user;
    const datesResponse = await axios.get(
      `${API_URL}/backoffice/reservations`,
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );
    console.log(datesResponse.data);
    dispatch(fetchReservationsSuccess(datesResponse.data));
  } catch (error) {
    console.log(error);
  }
};
