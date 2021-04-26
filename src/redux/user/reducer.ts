import { UserAction, UserState } from "./types";
import {
  GET_STAMPS_SUCCESS,
  LOGIN_SUCCESS,
  LOG_OUT,
  TOKEN_STILL_VALID,
  UPDATE_PROFILE_SUCCESS,
} from "../actionTypes";

const initialState: UserState = {
  isAuthenticated: false,
  user: {},
  accessToken: localStorage.getItem("token"),
  stamps: [],
};

export default function authReducer(state = initialState, action: UserAction) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      const { token, userProfile: user } = action.payload;
      localStorage.setItem("jwt", token);
      return {
        ...state,
        isAuthenticated: true,
        ...user,
        accessToken: token,
      };

    case LOG_OUT:
      localStorage.removeItem("jwt");
      return { ...initialState };

    case TOKEN_STILL_VALID:
      return { ...state, ...action.payload };

    case UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };

    case GET_STAMPS_SUCCESS:
      return {
        ...state,
        stamps: [...action.payload],
      };

    default:
      return state;
  }
}
