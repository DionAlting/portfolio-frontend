import axios from "axios";
import { toast } from "react-toastify";
import { Dispatch } from "redux";
import { FETCH_DATES_SUCCESS } from "../actionTypes";
import { ReduxState } from "../store";
import { ReservationDatePayload } from "./types";

import { API_URL } from "../../util/config";

export const datesFetchedSuccess = (data: ReservationDatePayload) => ({
  type: FETCH_DATES_SUCCESS,
  payload: data,
});

export const fetchDates = () => async (dispatch: Dispatch) => {
  const dateResponse = await axios.get(`${API_URL}/reserve/dates`);

  dispatch(datesFetchedSuccess(dateResponse.data));
};

export const submitNewReservation = (values: any) => async (
  dispatch: Dispatch<any>,
  getState: () => ReduxState
) => {
  try {
    const { accessToken } = getState().user;
    const { dateId, reservationDetails, comment } = values;
    const response = await axios.post(
      `${API_URL}/reserve/${values.dateId}`,
      { dateId, reservationDetails, comment },
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );
    toast.success(response.data.message);
    dispatch(fetchDates());
  } catch (error) {
    if (error.response) {
      toast.error(error.response.data.message);
    } else {
      toast.error("Something unexpected happened");
      console.log(error);
    }
  }
};
