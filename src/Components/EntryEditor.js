import React from "react";

function EntryEditor({ onUpdateEntry, activeEntry }) {
  if (!activeEntry) return <div className="no-active-note">Select an Entry</div>;

  function onEditField(key, value) {
    const date = new Date().toJSON();
    onUpdateEntry({
      ...activeEntry,
      [key]: value,
      last_updated: date,
    });
  }

  function handleKeyPress(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      const content = document.querySelector("#content");
      content.focus();
    }
  }

  return (
    <div className="app-main">
      <div className="app-main-entry-edit">
      <form id="entryEditor">
        <input
          type="text"
          name="title"
          autoFocus
          onChange={(e) => onEditField("title", e.target.value)}
          defaultValue={activeEntry.title}
          placeholder="Enter a Title..."
          onKeyPress={handleKeyPress}
        />
        <textarea
          id="content"
          name="content"
          onChange={(e) => onEditField("content", e.target.value)}
          defaultValue={activeEntry.content}
          placeholder=""
        ></textarea>
      </form>
      </div>
    </div>
  );
}

export default EntryEditor;
