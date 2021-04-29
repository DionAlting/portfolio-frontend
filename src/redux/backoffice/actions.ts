import axios from "axios";
import { toast } from "react-toastify";
import { Dispatch } from "redux";
import {
  CHECK_OUT_GUEST_SUCCESS,
  DECREMENT_SUCCESS,
  FETCH_RESERVATION_BY_DATE_SUCCESS,
  INCREMENT_SUCCESS,
  CANCEL_GUEST_SUCCESS,
} from "../actionTypes";
import { ReduxState } from "../store";
import { DateSubmitValues, ReservationDatesPayload } from "./types";

const API_URL = process.env.REACT_APP_API_URL;

const fetchReservationsSuccess = (data: ReservationDatesPayload) => {
  return {
    type: FETCH_RESERVATION_BY_DATE_SUCCESS,
    payload: data,
  };
};

const checkOutGuestSuccess = (dateId: string, reservationId: string) => {
  return {
    type: CHECK_OUT_GUEST_SUCCESS,
    payload: { dateId, reservationId },
  };
};

const cancelGuestReservationSuccess = (
  dateId: string,
  reservationId: string
) => {
  return {
    type: CANCEL_GUEST_SUCCESS,
    payload: { dateId, reservationId },
  };
};

const incrementSuccess = (dateId: string, reservationId: string) => {
  return {
    type: INCREMENT_SUCCESS,
    payload: { dateId, reservationId },
  };
};
const decrementSuccess = (dateId: string, reservationId: string) => {
  return {
    type: DECREMENT_SUCCESS,
    payload: { dateId, reservationId },
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

export const checkOutGuest = (dateId: string, reservationId: string) => async (
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
    dispatch(checkOutGuestSuccess(dateId, reservationId));
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

export const cancelReservation = (
  dateId: string,
  reservationId: string
) => async (dispatch: Dispatch, getState: () => ReduxState) => {
  try {
    const { accessToken } = getState().user;
    const checkOutResponse = await axios.put(
      `${API_URL}/backoffice/${reservationId}/cancel`,
      {
        reservationId,
      },
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );
    dispatch(cancelGuestReservationSuccess(dateId, reservationId));
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

export const incrementCoins = (dateId: string, reservationId: string) => async (
  dispatch: Dispatch,
  getState: () => ReduxState
) => {
  try {
    const { accessToken } = getState().user;
    await axios.put(
      `${API_URL}/backoffice/${reservationId}/increment`,
      {
        reservationId,
      },
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );
    dispatch(incrementSuccess(dateId, reservationId));
  } catch (error) {
    if (error.response) {
      toast.error(error.response.data.message);
    } else {
      toast.error("Something unexpected happened");
    }
    console.log(error);
  }
};

export const decrementCoins = (dateId: string, reservationId: string) => async (
  dispatch: Dispatch,
  getState: () => ReduxState
) => {
  try {
    const { accessToken } = getState().user;
    await axios.put(
      `${API_URL}/backoffice/${reservationId}/decrement`,
      {
        reservationId,
      },
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );
    dispatch(decrementSuccess(dateId, reservationId));
  } catch (error) {
    if (error.response) {
      toast.error(error.response.data.message);
    } else {
      toast.error("Something unexpected happened");
    }
    console.log(error);
  }
};

export const newDate = (values: DateSubmitValues) => async (
  dispatch: Dispatch<any>,
  getState: () => ReduxState
) => {
  try {
    const { accessToken } = getState().user;
    const response = await axios.post(
      `${API_URL}/backoffice/dates`,
      {
        values,
      },
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );
    console.log(response);
    toast.success(response.data.message);
    dispatch(fetchAllReservations());
  } catch (error) {
    if (error.response) {
      toast.error(error.response.data.message);
    } else {
      toast.error("Something unexpected happened");
    }
    console.log(error);
  }
};
