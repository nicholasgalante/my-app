import React from "react";
import Search from "./Search";
import EntryCard from "./EntryCard";

function NavBar({ onAddEntry, entries, onSearch, onDelete }) {
  function handleAddEntry() {
    const date = new Date().toJSON();
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
    <div className="app-sidebar">
      <div className="app-sidebar-header">
        <h1>MY JOURNAL</h1>
        <button onClick={handleAddEntry}>New Entry</button>
      </div>
      <div className="app-side-bar-search">
        <Search entries={entries} onSearch={onSearch} />
      </div>
      <div className="app-sidebar-notes">
        {entries.map((entry) => {
          return <EntryCard key={entry.id} entry={entry} onDelete={onDelete} />;
        })}
      </div>
    </div>
  );
}

export default NavBar;
