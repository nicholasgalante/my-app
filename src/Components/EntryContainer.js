import React from "react";
import Search from "./Search";
import EntryCard from "./EntryCard";
import { NavLink } from "react-router-dom";

function EntryContainer({ createNewEntry, entries, onSearch, onDelete }) {
  
  function handleAddEntry() {
    createNewEntry()
  }

  return (
    <div className="app-entry-container">
      <div className="app-entry-container-header">
        <NavLink to={"/"}>
         <h1>My Journal</h1>
         </NavLink>
        <button onClick={handleAddEntry}>New Entry</button>
      </div>
      <div className="app-entry-container-search">
        <Search entries={entries} onSearch={onSearch} />
      </div>
      <div className="app-entry-container-entries">
        {entries.map((entry) => {
          return <EntryCard key={entry.id} entry={entry} onDelete={onDelete} />;
        })}
      </div>
    </div>
  );
}

export default EntryContainer;
