import {
  DOWNVOTE_SONG_SUCCESS,
  FETCH_SONGS_SUCCESS,
  REQUEST_SONG_SUCCESS,
  UPVOTE_SONG_SUCCESS,
} from "../actionTypes";

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
    case UPVOTE_SONG_SUCCESS:
      const upvotedSong = state.requestedSongs.map((item: any) => {
        if (item.id === action.payload) {
          return {
            ...item,
            voteCount: item.voteCount + 1,
          };
        }
        return item;
      });
      return {
        ...state,
        requestedSongs: upvotedSong,
      };
    case DOWNVOTE_SONG_SUCCESS:
      const downvotedSong = state.requestedSongs.map((item: any) => {
        if (item.id === action.payload) {
          return {
            ...item,
            voteCount: item.voteCount - 1,
          };
        }
        return item;
      });
      return {
        ...state,
        requestedSongs: downvotedSong,
      };
    case REQUEST_SONG_SUCCESS:
      return {
        ...state,
        requestedSongs: [...state.requestedSongs, action.payload],
      };

    default:
      return state;
  }
}
