import React from "react";

function EntryEditor({ onUpdateEntry, activeEntry }) {

  function onEditField(key, value) {
   const date = new Date().toJSON();
   onUpdateEntry({
      ...activeEntry,
      [key]: value,
      last_updated: date,
    });
  }

  return (
    <div>
      <form id="entryEditor">
        <input
          type="text"
          name="title"
          onChange={(e) => onEditField("title", e.target.value)}
          defaultValue={activeEntry.title}
          placeholder="Enter a Title..."
        />
        <textarea
          id="content"
          name="content"
          rows="15"
          cols="100"
          onChange={(e) => onEditField("content", e.target.value)}
          defaultValue={activeEntry.content}
          onBlur={() => console.log("lost focus")}
          placeholder=""
        ></textarea>
        <button type="submit">Save Entry</button>
      </form>
    </div>
  );
}

export default EntryEditor;
