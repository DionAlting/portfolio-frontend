import React from "react";
import { AddNewDateModal } from "./AddNewDateModal/component";
import { ModalProps } from "./types";

export const AddNewDateButton = ({
  setIsOpen,
  isOpen,
  handleNewDateSubmit,
}: ModalProps) => {
  return (
    <div>
      <button
        className="px-4 py-2 my-4 text-base font-semibold text-center text-white transition duration-200 ease-in bg-green-400 rounded-lg shadow-md hover:bg-green-600 focus:ring-green-500 focus:ring-offset-green-200 focus:outline-none focus:ring-2 focus:ring-offset-2 "
        onClick={() => setIsOpen(!isOpen)}
      >
        New Date
      </button>
      <AddNewDateModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        handleNewDateSubmit={handleNewDateSubmit}
      />
    </div>
  );
};
