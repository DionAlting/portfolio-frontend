import { BackOfficeAction, BackOfficeState } from "./types";

const initialState: BackOfficeState = {
  reservationDates: [],
};

export default function backOfficeReducer(
  state = initialState,
  action: BackOfficeAction
) {
  switch (action.type) {
    default:
      return state;
  }
}
