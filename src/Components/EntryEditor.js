import React, { useState } from "react";

function EntryEditor({ onUpdateEntry, activeEntry }) {
  const [formData, setFormData] = useState();

  function onEditField(e) {
    const date = new Date().toJSON();
    setFormData({
      ...activeEntry,
      [e.target.name]: e.target.value,
      last_updated: date,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target)
    fetch(`http://localhost:3000/entries/${formData.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...formData,
      }),
    }).then((res) => res.json())
      .then((updatedEntry) => onUpdateEntry(updatedEntry));
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
            defaultValue={activeEntry.title}
          />
          <textarea
            id="content"
            name="content"
            onChange={(e) => onEditField(e)}
            defaultValue={activeEntry.content}
          ></textarea>
          <button type="submit">Save Changes</button>
        </form>
      </div>
    </div>
  );
}

export default EntryEditor;
