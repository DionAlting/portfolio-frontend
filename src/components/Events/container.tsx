import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Event } from "../../redux";

import { Events } from "./component";

const EventsContainer = () => {
  const dispatch = useDispatch();
  const events = useSelector(Event.Selectors.events);

  useEffect(() => {
    dispatch(Event.Actions.fetchEvents());
  }, [dispatch]);

  return <Events events={events} />;
};

export default EventsContainer;
