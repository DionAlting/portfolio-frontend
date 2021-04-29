import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { BackOffice } from "../../../redux";
import { AddNewDateButton } from "./component";
import { newDateValues } from "./types";

const AddNewDateButtonContainer = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const handleNewDateSubmit = (values: newDateValues) => {
    dispatch(BackOffice.Actions.newDate(values));
    setIsOpen(false);
  };
  return (
    <AddNewDateButton
      setIsOpen={setIsOpen}
      isOpen={isOpen}
      handleNewDateSubmit={handleNewDateSubmit}
    />
  );
};

export default AddNewDateButtonContainer;
