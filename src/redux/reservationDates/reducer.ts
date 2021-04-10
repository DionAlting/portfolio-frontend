import { ReservationDatesAction } from "./types";
import { FETCH_DATES_SUCCESS } from "../actionTypes";

const initialState: any = [];

export default function authReducer(
  state = initialState,
  action: ReservationDatesAction
) {
  switch (action.type) {
    case FETCH_DATES_SUCCESS:
      return [...action.payload];

    default:
      return state;
  }
}
