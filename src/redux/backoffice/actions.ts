import axios from "axios";
import { toast } from "react-toastify";
import { Dispatch } from "redux";
import {
  CHECK_OUT_GUEST_SUCCESS,
  FETCH_RESERVATION_BY_DATE_SUCCESS,
} from "../actionTypes";
import { ReduxState } from "../store";
import { ReservationDatesPayload } from "./types";

const API_URL = process.env.REACT_APP_API_URL;

const fetchReservationsSuccess = (data: ReservationDatesPayload) => {
  return {
    type: FETCH_RESERVATION_BY_DATE_SUCCESS,
    payload: data,
  };
};

const checkOutGuestSuccess = (reservationId: string) => {
  return {
    type: CHECK_OUT_GUEST_SUCCESS,
    payload: reservationId,
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
    dispatch(fetchReservationsSuccess(datesResponse.data));
  } catch (error) {
    if (error.response) {
      toast.error(error.response.data.message);
    } else {
      toast.error("Something unexpected happened");
    }
    console.log(error);
  }
};

export const checkOutGuest = (reservationId: string) => async (
  dispatch: Dispatch,
  getState: () => ReduxState
) => {
  try {
    const { accessToken } = getState().user;
    const checkOutResponse = await axios.put(
      `${API_URL}/backoffice/${reservationId}/checkout`,
      {
        reservationId,
      },
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );
    dispatch(checkOutGuestSuccess(reservationId));
    toast.success(checkOutResponse.data.message);
  } catch (error) {
    if (error.response) {
      toast.error(error.response.data.message);
    } else {
      toast.error("Something unexpected happened");
    }
    console.log(error);
  }
};
