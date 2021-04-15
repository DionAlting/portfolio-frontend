import React from "react";

import { useEvents } from "./hooks";
import { Events } from "./component";

const EventsContainer = () => {
  const events = useEvents();

  return <Events events={events} />;
};

export default EventsContainer;
