import { ReservationDatesAction, ReservationDatesState } from "./types";
import { FETCH_DATES_SUCCESS } from "../actionTypes";

const initialState: ReservationDatesState = {
  reservationDates: [],
};

export default function reserveReducer(
  state = initialState,
  action: ReservationDatesAction
) {
  switch (action.type) {
    case FETCH_DATES_SUCCESS:
      return {
        ...state,
        reservationDates: [...action.payload],
      };
    default:
      return state;
  }
}
