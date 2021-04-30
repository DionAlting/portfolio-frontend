export type JukeboxListProps = {
  allRequestedSongs: Song[];
  isAuthenticated: boolean;
  isAdmin: boolean;
};

export type Song = {
  id: string;
  userId: string;
  artist: string;
  title: string;
  voteCount: number;
  votes: Votes[];
};

export type Votes = {
  userId: string;
};
