import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Jukebox, User } from "../../../redux";

import { RequestForm } from "./component";
import { RequestValues } from "./types";

const RequestFormContainer = () => {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector(User.Selectors.user);

  const handleSubmitRequest = (values: RequestValues) => {
    dispatch(Jukebox.Actions.submitSongRequest(values));
  };

  return (
    <RequestForm
      handleRequestSubmit={handleSubmitRequest}
      isAuthenticated={isAuthenticated}
    />
  );
};

export default RequestFormContainer;
