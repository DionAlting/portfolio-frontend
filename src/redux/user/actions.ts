import axios from "axios";
import { Dispatch } from "redux";
import {
  GET_STAMPS_SUCCESS,
  LOGIN_SUCCESS,
  LOG_OUT,
  UPDATE_PROFILE_SUCCESS,
} from "../actionTypes";
import { ReduxState } from "../store";
import { Stamp } from "./types";

const API_URL = process.env.REACT_APP_API_URL;

const saveUserData = (token: string, userProfile: any) => {
  return {
    type: LOGIN_SUCCESS,
    payload: { token, userProfile },
  };
};

const getUserProfile = async (token: string) => {
  try {
    const response = await axios.get(`${API_URL}/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (e) {
    console.log(e);
  }
};
export const logOut = () => ({ type: LOG_OUT });

export const updateProfileSuccess = (data: any) => {
  return {
    type: UPDATE_PROFILE_SUCCESS,
    payload: data,
  };
};

export const getStampsSuccess = (stamps: Stamp) => {
  return {
    type: GET_STAMPS_SUCCESS,
    payload: stamps,
  };
};

export const login = (email: string, password: string) => async (
  dispatch: Dispatch<any>
) => {
  try {
    const response = await axios.post(`${API_URL}/login`, {
      email,
      password,
    });
    const { token } = response.data;

    const userProfile = await getUserProfile(token);

    localStorage.setItem("jwt", token);
    dispatch(saveUserData(token, userProfile));
    dispatch(getUserStamps());
  } catch (e) {
    console.log("error", e);
  }
};

export const signUp = (
  displayName: string,
  email: string,
  firstName: string,
  lastName: string,
  password: string
) => async (dispatch: Dispatch) => {
  try {
    const response = await axios.post(`${API_URL}/signup`, {
      displayName,
      email,
      firstName,
      lastName,
      password,
    });
    const { token } = response.data;

    const userProfile = await getUserProfile(token);

    localStorage.setItem("jwt", token);
    dispatch(saveUserData(token, userProfile));
  } catch (error) {
    if (error.response) {
      console.log(error.response.data.message);
    } else {
      console.log(error.message);
    }
  }
};

export const bootstrapLogin = () => async (dispatch: Dispatch) => {
  const jwt = localStorage.getItem("jwt");
  if (jwt) {
    const userProfile = await getUserProfile(jwt);
    console.log("user profile loaded automatically", userProfile);
    dispatch(saveUserData(jwt, userProfile));
  } else {
    console.log("no token stored in localstorage");
  }
};

export const updateProfile = (values: any) => async (
  dispatch: Dispatch,
  getState: () => ReduxState
) => {
  try {
    const { accessToken, id } = getState().user;
    const updateResponse = await axios.patch(
      `${API_URL}/user/${id}`,
      {
        values,
      },
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );
    const data = updateResponse.data.cleanUpdatedUser;
    dispatch(updateProfileSuccess(data));
  } catch (error) {
    console.log(error);
  }
};

export const changePassword = (values: any) => async (
  dispatch: Dispatch,
  getState: () => ReduxState
) => {
  try {
    const { accessToken, id } = getState().user;
    const changePasswordResponse = await axios.patch(
      `${API_URL}/user/${id}/changepassword`,
      {
        values,
      },
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );
    console.log(changePasswordResponse);
  } catch (error) {
    console.log(error);
  }
};

export const getUserStamps = () => async (
  dispatch: Dispatch,
  getState: () => ReduxState
) => {
  try {
    const { accessToken, id } = getState().user;
    const stampsResponse = await axios.get(`${API_URL}/user/${id}/stamps`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    console.log(stampsResponse);
    dispatch(getStampsSuccess(stampsResponse.data.stamps));
  } catch (error) {
    console.log(error);
  }
};
