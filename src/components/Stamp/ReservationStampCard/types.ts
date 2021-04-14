export type StampListProps = {
  reservationStamps: Stamp[];
};

export type Stamp = {
  id: string;
  userId: string;
  eventId: string;
  reservationId: string;
  createdAt: string;
  updatedAt: string;
};
