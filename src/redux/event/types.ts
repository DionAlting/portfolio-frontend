import { FETCH_EVENTS_SUCCESS } from "../actionTypes";

export type EventState = Event[];

export type EventPayload = {
  allEvents: Event[];
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
  attendees: Attendees[];
};

export type Attendees = {
  userId: string;
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
