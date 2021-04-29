import axios from "axios";
import { Dispatch } from "redux";
import { FETCH_STUDY_ASSOC_SUCCESS } from "../actionTypes";
import { StudyAssocPayload } from "./types";

import { API_URL } from "../../util/config";

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
