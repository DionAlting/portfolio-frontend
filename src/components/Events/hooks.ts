import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Actions, Selectors } from "../../redux/event";

export type Event = {
  id: string;
  eventImage: string;
  title: string;
  content: string;
  eventDate: string;
  startTime: string;
  endTime: string;
  isStampable: boolean;
  attendeeCount: number;
  creatorName: string;
  creatorColor: string;
};

export const useEvents = (): Event[] => {
  const dispatch = useDispatch();
  const events = useSelector(Selectors.events);

  useEffect(() => {
    dispatch(Actions.fetchEvents());
  }, [dispatch]);

  const formattedEvents: Event[] = React.useMemo(
    () =>
      events.map((rawEvent) => {
        const {
          id,
          eventImage,
          title,
          content,
          eventDate,
          startTime,
          endTime,
          isStampable,
          creator,
          attendees,
        } = rawEvent;

        return {
          id,
          eventImage,
          title,
          content,
          eventDate,
          startTime,
          endTime,
          isStampable,
          attendeeCount: attendees.length,
          creatorName: creator.studyAssociation.name,
          creatorColor: creator.studyAssociation.color,
        };
      }),
    [events]
  );

  return formattedEvents;
};
