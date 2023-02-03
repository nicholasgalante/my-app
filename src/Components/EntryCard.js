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
    <div className="app-sidebar-note">
      <NavLink key={entry.id} to={"/entries/" + entry.id}>
        <div className="sidebar-note-title">
          <strong>
            {title}
          </strong>
          <button onClick={handleDelete}>Delete</button>
        </div>
        <small className="note-meta">{date}</small>
      </NavLink>
    </div>
  );
}

export default EntryCard;


