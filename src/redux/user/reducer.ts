import { UserAction, UserState } from "./types";
import { LOGIN_SUCCESS, LOG_OUT, TOKEN_STILL_VALID } from "../actionTypes";

const initialState: UserState = {
  isAuthenticated: false,
  user: null,
  accessToken: localStorage.getItem("token"),
};

export default function authReducer(state = initialState, action: UserAction) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      const { token, userProfile: user } = action.payload;
      localStorage.setItem("token", token);
      return {
        isAuthenticated: true,
        user,
        accessToken: token,
      };
    case LOG_OUT:
      localStorage.removeItem("token");
      return { ...initialState, token: null };

    case TOKEN_STILL_VALID:
      return { ...state, ...action.payload };

    default:
      return state;
  }
}
