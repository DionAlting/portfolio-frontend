export type JukeboxListItemProps = {
  songDetails: any;
  isAuthenticated: boolean;
  isAdmin: boolean;
};
export type Votes = {
  userId: string;
};

export type Song = {
  id: string;
  userId: string;
  artist: string;
  title: string;
  voteCount: number;
  votes: Votes[];
};
