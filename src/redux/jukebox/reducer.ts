import { FETCH_SONGS_SUCCESS } from "../actionTypes";

const initialState: any = {
  requestedSongs: [],
};

export default function jukeboxReducer(state = initialState, action: any) {
  switch (action.type) {
    case FETCH_SONGS_SUCCESS:
      return {
        ...state,
        requestedSongs: [...action.payload],
      };

    default:
      return state;
  }
}
