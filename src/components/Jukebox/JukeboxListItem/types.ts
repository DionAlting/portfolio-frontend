export type JukeboxListItemProps = {
  songDetails: any;
  isAuthenticated: boolean;
  isAdmin: boolean;
};

export type Props = {
  songDetails: any;
  isAuthenticated: boolean;
  isAdmin: boolean;
  handleUpvoteClick: (songId: string) => void;
  handleDownvoteClick: (songId: string) => void;
  handleRemoveClick: (songId: string) => void;
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
