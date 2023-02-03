import React from "react";
import EntryCard from "./EntryCard";
import Search from "./Search";

function EntriesList({ entries, onSearch, onDelete }) {
  return (
    <div>
      <Search entries={entries} onSearch={onSearch} />
      {entries.map((entry) => {
        return <EntryCard key={entry.id} entry={entry} onDelete={onDelete} />;
      })}
    </div>
  );
}

export default EntriesList;
