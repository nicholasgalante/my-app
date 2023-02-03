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
    <div>
      <NavLink key={entry.id} to={"/entries/" + entry.id}>
        {title}
        <br />
        {date}
      </NavLink>
      <button onClick={handleDelete}>x</button>
    </div>
  );
}

export default EntryCard;
