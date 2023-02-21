import React from "react";
import { NavLink } from "react-router-dom";

function EntryCard({ entry, onDelete }) {
  function handleDelete() {
    fetch(`http://localhost:3000/entries/${entry.id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => onDelete(entry));
  }

  const { date, title } = entry;

  return (
    <div className="app-entry-container-entry">
      <NavLink key={entry.id} to={"/entries/" + entry.id}>
        <div className="app-entry-container-data">
          <div className="entry-container-entry-title">{title}</div>
          <button onClick={handleDelete}>x</button>
        </div>
        <small className="entry-meta">{date}</small>
      </NavLink>
    </div>
  );
}

export default EntryCard;
