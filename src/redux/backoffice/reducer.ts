import {
  CHECK_OUT_GUEST_SUCCESS,
  FETCH_RESERVATION_BY_DATE_SUCCESS,
} from "../actionTypes";
import { BackOfficeAction, BackOfficeState } from "./types";

const initialState: BackOfficeState = {
  reservationsByDate: [],
};

export default function backOfficeReducer(
  state = initialState,
  action: BackOfficeAction
): BackOfficeState {
  switch (action.type) {
    case FETCH_RESERVATION_BY_DATE_SUCCESS:
      const { reservationDates } = action.payload;
      return {
        ...state,
        reservationsByDate: [...reservationDates],
      };
    case CHECK_OUT_GUEST_SUCCESS:
      return {
        ...state,
      };
    default:
      return state;
  }
}
