import { FETCH_EVENTS_SUCCESS } from "../actionTypes";
import { EventAction, EventState } from "./types";

const initialState: EventState = [];

export default function studyAssocReducer(
  state = initialState,
  action: EventAction
) {
  switch (action.type) {
    case FETCH_EVENTS_SUCCESS:
      const { events } = action.payload;
      return [...events];
    default:
      return state;
  }
}
