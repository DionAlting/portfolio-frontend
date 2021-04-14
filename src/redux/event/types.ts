import { FETCH_EVENTS_SUCCESS } from "../actionTypes";

export type EventState = EventPayload[];

export type EventPayload = {
  events: Event[];
};

export type Event = {
  id: string;
  userId: string;
  title: string;
  content: string;
  eventDate: string;
  startTime: string;
  endTime: string;
  eventImage: string;
  isStampable: boolean;
  creator: Creator;
};

export type Creator = {
  id: string;
  studyAssociation: StudyAssoc;
};

export type StudyAssoc = {
  id: string;
  name: string;
  color: string;
};

export type EventAction = {
  type: typeof FETCH_EVENTS_SUCCESS;
  payload: EventPayload;
};
