import { FETCH_EVENTS_SUCCESS } from "../actionTypes";
import { EventAction, EventState } from "./types";

const initialState: EventState = [];

export default function eventReducer(
  state: EventState = initialState,
  action: EventAction
): EventState {
  switch (action.type) {
    case FETCH_EVENTS_SUCCESS:
      const { allEvents } = action.payload;
      return [...allEvents];
    default:
      return state;
  }
}
