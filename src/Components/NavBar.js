import React from "react";

function NavBar({ onAddEntry }) {
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
    <div>
      JOURNAL
      <button onClick={handleAddEntry}>New Entry</button>
    </div>
  );
}

export default NavBar;
