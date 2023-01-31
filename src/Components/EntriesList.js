import React from "react";
import EntryCard from "./EntryCard";
import Search from "./Search";
import { NavLink } from "react-router-dom";

function EntriesList({ entries, handleEntrySelect, onSearch }) {
  return (
    <div>
      <Search entries={entries} onSearch={onSearch} />
      {entries.map((entry) => {
        return (
          <NavLink
            key={entry.id}
            to={"/Entry/" + entry.id}
            onClick={() => handleEntrySelect(entry)}
          >
            <EntryCard entry={entry} />
          </NavLink>
        );
      })}
    </div>
  );
}

export default EntriesList;
