import React from "react";
import { ModalProps } from "../types";
import { AddNewDateModal } from "./component";

const AddNewDateModalContainer = ({
  isOpen,
  setIsOpen,
  handleNewDateSubmit,
}: ModalProps) => {
  return (
    <AddNewDateModal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      handleNewDateSubmit={handleNewDateSubmit}
    />
  );
};

export default AddNewDateModalContainer;
