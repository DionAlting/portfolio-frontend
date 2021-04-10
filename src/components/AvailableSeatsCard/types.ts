export type AvailableSeatsProps = {
  allDates: Date[];
};

export type Date = {
  id: string;
  date: string;
  maxSeats: number;
  maxPerParty: number;
  bookedSeats: number;
  isStampable: boolean;
  isActive: boolean;
};
