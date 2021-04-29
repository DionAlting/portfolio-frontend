import React from "react";
import { AddNewDateProps } from "../types";
import { AddNewDateModal } from "./component";

const AddNewDateModalContainer = ({ isOpen, setIsOpen }: AddNewDateProps) => {
  return <AddNewDateModal isOpen={isOpen} setIsOpen={setIsOpen} />;
};

export default AddNewDateModalContainer;
