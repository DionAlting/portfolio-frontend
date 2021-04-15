import { FETCH_EVENTS_SUCCESS } from "../actionTypes";
import { EventAction, EventState } from "./types";

const initialState: EventState = [];

export default function eventReducer(
  state = initialState,
  action: EventAction
) {
  switch (action.type) {
    case FETCH_EVENTS_SUCCESS:
      const { allEvents } = action.payload;
      return [...allEvents];
    default:
      return state;
  }
}
