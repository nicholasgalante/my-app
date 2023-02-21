import React from "react";
import Search from "./Search";
import EntryCard from "./EntryCard";
import { NavLink } from "react-router-dom";

function EntryContainer({ onAddEntry, entries, onSearch, onDelete }) {
  function handleAddEntry() {
    const date = new Date().toLocaleString("en-us", {
      weekday: "long",
      year: "numeric",
      month: "short",
      day: "numeric",
    });

    const entryData = {
      title: "",
      content: "",
      date: date,
      last_updated: date,
    };

    fetch(`http://localhost:3000/entries/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(entryData),
    })
      .then((res) => res.json())
      .then((newEntry) => onAddEntry(newEntry));
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
