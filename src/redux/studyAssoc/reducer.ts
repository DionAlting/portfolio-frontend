import { StudyAssocAction, StudyAssocState } from "./types";

const initialState: StudyAssocState = [];

export default function studyAssocReducer(
  state = initialState,
  action: StudyAssocAction
) {
  switch (action.type) {
    default:
      return state;
  }
}
