import {
  LOGIN_SUCCESS,
  TOKEN_STILL_VALID,
  LOG_OUT,
  UPDATE_PROFILE_SUCCESS,
  GET_STAMPS_SUCCESS,
} from "../actionTypes";

export type UserState = {
  isAuthenticated: boolean;
  user: any;
  accessToken: null | string;
  stamps: Stamp[];
};

export type Stamp = {
  id: string;
  userId: string;
  eventId: string;
  reservationId: string;
  createdAt: string;
  updatedAt: string;
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
  | { type: typeof UPDATE_PROFILE_SUCCESS; payload: { data: any } }
  | { type: typeof GET_STAMPS_SUCCESS; payload: [stamps: Stamp] };
