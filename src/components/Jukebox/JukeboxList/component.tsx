import React from "react";
import { JukeboxListItem } from "../JukeboxListItem";
import { JukeboxListProps } from "./types";

export const JukeboxList = ({
  allRequestedSongs,
  isAdmin,
  isAuthenticated,
}: JukeboxListProps) => {
  return (
    <div className="mt-4">
      {allRequestedSongs && (
        <ul className="flex flex-col items-center ">
          {allRequestedSongs.map((song) => (
            <JukeboxListItem
              key={song.id}
              songDetails={song}
              isAdmin={isAdmin}
              isAuthenticated={isAuthenticated}
            />
          ))}
        </ul>
      )}
    </div>
  );
};
