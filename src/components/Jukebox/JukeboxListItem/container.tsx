import React from "react";
import { useDispatch } from "react-redux";
import { Jukebox } from "../../../redux";

import { JukeboxListItem } from "./component";
import { JukeboxListItemProps } from "./types";

const JukeboxListItemContainer = (props: JukeboxListItemProps) => {
  const dispatch = useDispatch();

  const handleUpvoteClick = (songId: string) => {
    dispatch(Jukebox.Actions.upvoteSongRequest(songId));
  };

  const handleDownvoteClick = (songId: string) => {
    dispatch(Jukebox.Actions.downvoteSongRequest(songId));
  };

  const handleRemoveClick = (songId: string) => {
    // dispatch(Jukebox.Actions.)
    dispatch(Jukebox.Actions.deleteSongRequest(songId));
  };

  return (
    <JukeboxListItem
      songDetails={props.songDetails}
      isAdmin={props.isAdmin}
      isAuthenticated={props.isAuthenticated}
      handleUpvoteClick={handleUpvoteClick}
      handleDownvoteClick={handleDownvoteClick}
      handleRemoveClick={handleRemoveClick}
    />
  );
};

export default JukeboxListItemContainer;
