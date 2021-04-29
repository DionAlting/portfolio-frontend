import React, { useState } from "react";
import { AddNewDateButton } from "./component";

const AddNewDateButtonContainer = () => {
  const [isOpen, setIsOpen] = useState(false);

  return <AddNewDateButton setIsOpen={setIsOpen} isOpen={isOpen} />;
};

export default AddNewDateButtonContainer;
