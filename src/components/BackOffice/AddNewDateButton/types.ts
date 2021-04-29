export type newDateValues = {
  date: string;
  isStampable: boolean;
  maxPerParty: number;
  maxSeats: number;
};

export type ModalProps = {
  setIsOpen: (isOpen: boolean) => void;
  isOpen: boolean;
  handleNewDateSubmit: (values: newDateValues) => void;
};
