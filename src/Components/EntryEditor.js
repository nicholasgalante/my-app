import React from "react";

function EntryEditor({ onUpdateEntry, activeEntry }) {
  if (!activeEntry) return <div>Select an Entry</div>;

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
    <div>
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
          rows="15"
          cols="100"
          onChange={(e) => onEditField("content", e.target.value)}
          defaultValue={activeEntry.content}
          placeholder=""
        ></textarea>
      </form>
    </div>
  );
}

export default EntryEditor;
