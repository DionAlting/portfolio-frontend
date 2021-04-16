import axios from "axios";
import { toast } from "react-toastify";
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
  } catch (error) {
    if (error.response) {
      toast.error(error.response.data.message);
    } else {
      toast.error("Something unexpected happened");
    }
    console.log(error);
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
      toast.error(error.response.data.message);
    } else {
      toast.error("Something unexpected happened");
    }
    console.log(error);
  }
};

export const bootstrapLogin = () => async (dispatch: Dispatch<any>) => {
  const jwt = localStorage.getItem("jwt");
  if (jwt) {
    const userProfile = await getUserProfile(jwt);
    dispatch(saveUserData(jwt, userProfile));
    dispatch(getUserStamps());
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
    toast.success(updateResponse.data.message);
  } catch (error) {
    if (error.response) {
      toast.error(error.response.data.message);
    } else {
      toast.error("Something unexpected happened");
    }
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
    toast.success(changePasswordResponse.data.message);
  } catch (error) {
    if (error.response) {
      toast.error(error.response.data.message);
    } else {
      toast.error("Something unexpected happened");
    }
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
    dispatch(getStampsSuccess(stampsResponse.data.stamps));
  } catch (error) {
    if (error.response) {
      toast.error(error.response.data.message);
    } else {
      toast.error("Something unexpected happened");
    }
    console.log(error);
  }
};
