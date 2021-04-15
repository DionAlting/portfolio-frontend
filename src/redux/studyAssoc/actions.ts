import axios from "axios";
import { Dispatch } from "redux";
import { FETCH_STUDY_ASSOC_SUCCESS } from "../actionTypes";
import { StudyAssocPayload } from "./types";

const API_URL = process.env.REACT_APP_API_URL;

const fetchStudyAssocSuccess = (data: StudyAssocPayload) => {
  return {
    type: FETCH_STUDY_ASSOC_SUCCESS,
    payload: data,
  };
};

export const fetchStudyAssoc = () => async (dispatch: Dispatch) => {
  try {
    const studyAssocResponse = await axios.get(`${API_URL}/studyassociation`);
    dispatch(fetchStudyAssocSuccess(studyAssocResponse.data));
  } catch (error) {
    console.log(error);
  }
};
