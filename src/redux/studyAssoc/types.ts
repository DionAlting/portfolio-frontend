import { FETCH_STUDY_ASSOC_SUCCESS } from "../actionTypes";

export type StudyAssocState = StudyAssocPayload[];

export type StudyAssocPayload = {
  studyAssociations: StudyAssoc[];
};

export type StudyAssoc = {
  id: string;
  name: string;
  color: string;
};

export type StudyAssocAction = {
  type: typeof FETCH_STUDY_ASSOC_SUCCESS;
  payload: StudyAssocPayload;
};
