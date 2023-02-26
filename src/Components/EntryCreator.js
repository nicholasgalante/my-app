import React, { useState } from "react";

function EntryCreator({ onAddEntry }) {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    date: "",
    last_updated: "",
  });

  function onEditField(e) {
    const date = new Date().toLocaleString("en-us", {
      weekday: "long",
      year: "numeric",
      month: "short",
      day: "numeric",
    });

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      date: date,
      last_updated: date,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`http://localhost:3000/entries/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((newEntry) => onAddEntry(newEntry));
  }

  return (
    <div className="app-main">
      <div className="app-main-entry-edit">
        <form id="entryEditor" onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            autoFocus
            onChange={(e) => onEditField(e)}
            placeholder="Enter a Title..."
            // onKeyPress={handleKeyPress}
          />
          <textarea
            id="content"
            name="content"
            onChange={(e) => onEditField(e)}
            placeholder=""
          ></textarea>
          <button type="submit">Save Changes</button>
        </form>
      </div>
    </div>
  );
}

export default EntryCreator;
