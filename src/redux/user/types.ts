import {
  LOGIN_SUCCESS,
  TOKEN_STILL_VALID,
  LOG_OUT,
  UPDATE_PROFILE_SUCCESS,
} from "../actionTypes";
export type UserState = {
  isAuthenticated: boolean;
  user: any;
  accessToken: null | string;
};

export type UserAction =
  | {
      type: typeof LOGIN_SUCCESS;
      payload: {
        token: string;
        userProfile: any;
      };
    }
  | { type: typeof TOKEN_STILL_VALID; payload: { userWithoutToken: any } }
  | { type: typeof LOG_OUT }
  | { type: typeof UPDATE_PROFILE_SUCCESS; payload: { data: any } };
