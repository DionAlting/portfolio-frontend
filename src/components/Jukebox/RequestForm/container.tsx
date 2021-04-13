import React from "react";
import { useDispatch } from "react-redux";
import { Jukebox } from "../../../redux";

import { RequestForm } from "./component";
import { RequestValues } from "./types";

const RequestFormContainer = () => {
  const dispatch = useDispatch();

  const handleSubmitRequest = (values: RequestValues) => {
    console.log(values);
    dispatch(Jukebox.Actions.submitSongRequest(values));
  };
  return <RequestForm handleRequestSubmit={handleSubmitRequest} />;
};

export default RequestFormContainer;
