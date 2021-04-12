import React from "react";

import { JukeboxListItem } from "./component";
import { JukeboxListItemProps } from "./types";

const JukeboxListItemContainer = (props: JukeboxListItemProps) => {
  return (
    <JukeboxListItem
      songDetails={props.songDetails}
      isAdmin={props.isAdmin}
      isAuthenticated={props.isAuthenticated}
    />
  );
};

export default JukeboxListItemContainer;
