export type ReserveFormProps = {
  allDates: Date[];
  handleDateChange: (id: string) => void;
  handleReservationSubmit: (values: ReservationValues) => void;
  singleDate: Date | undefined;
  isAuthenticated: boolean;
  firstName: string;
  lastName: string;
};

export type ReservationValues = {
  dateId: string;
  reservationDetails: any;
  comment: string;
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
