import { FETCH_STUDY_ASSOC_SUCCESS } from "../actionTypes";
import { StudyAssocAction, StudyAssocState } from "./types";

const initialState: StudyAssocState = [];

export default function studyAssocReducer(
  state = initialState,
  action: StudyAssocAction
) {
  switch (action.type) {
    case FETCH_STUDY_ASSOC_SUCCESS:
      const { studyAssociations } = action.payload;
      return [...studyAssociations];
    default:
      return state;
  }
}
