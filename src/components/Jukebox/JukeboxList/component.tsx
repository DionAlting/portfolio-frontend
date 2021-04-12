import React from "react";
import { JukeboxListItem } from "../JukeboxListItem";

export const JukeboxList = () => {
  return (
    <div>
      <ul className="flex flex-col items-center ">
        <JukeboxListItem />
      </ul>
    </div>
  );
};
