import axios from "axios";
import { Dispatch } from "redux";
import { LOGIN_SUCCESS } from "../actionTypes";

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

export const login = (email: string, password: string) => async (
  dispatch: Dispatch
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
  } catch (e) {
    console.log("error", e);
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
