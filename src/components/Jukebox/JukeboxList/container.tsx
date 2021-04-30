import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Jukebox, User } from "../../../redux";

import { JukeboxList } from "./component";

const JukeboxListContainer = () => {
  const dispatch = useDispatch();

  const allRequestedSongs = useSelector(Jukebox.Selectors.requestedSongs);
  const { isAuthenticated, isAdmin } = useSelector(User.Selectors.user);

  useEffect(() => {
    dispatch(Jukebox.Actions.fetchSongRequests());
  }, [dispatch]);

  return (
    <JukeboxList
      allRequestedSongs={allRequestedSongs}
      isAuthenticated={isAuthenticated}
      isAdmin={isAdmin}
    />
  );
};

export default JukeboxListContainer;
