import React from "react";
import { JukeboxListItem } from "../JukeboxListItem";
import { JukeboxListProps } from "./types";

export const JukeboxList = (props: JukeboxListProps) => {
  return (
    <div className="mt-4">
      {props.allRequestedSongs && (
        <ul className="flex flex-col items-center ">
          {props.allRequestedSongs.map((song) => (
            <JukeboxListItem
              key={song.id}
              songDetails={song}
              isAdmin={props.isAdmin}
              isAuthenticated={props.isAuthenticated}
            />
          ))}
        </ul>
      )}
    </div>
  );
};
