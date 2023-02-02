import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

function EntryEditor({ onUpdateEntry, activeEntry }) {
//   const [activeEntry, setActiveEntry] = useState(null);

//   useEffect(() => {
//     fetch(`http://localhost:3000/entries/${entry.id}`)
//       .then((res) => res.json())
//       .then((data) => setActiveEntry(data));
//   }, []);

  if (!activeEntry) return <div>Select an Entry</div>;

  function onEditField(key, value) {
    const date = new Date().toJSON();
    onUpdateEntry({
      ...activeEntry,
      [key]: value,
      last_updated: date,
    });

   //  setTimeout(()=>{
   //    console.log("FETCHING!")
   //    fetch(`http://localhost:3000/entries/${activeEntry.id}`, {
   //    method: "PATCH",
   //    headers: {
   //      "Content-Type": "application/json",
   //    },
   //    body: JSON.stringify({
   //      ...activeEntry,
   //    }),
   //  })
   //    .then((res) => res.json())
   //    .then((updatedItem) => onUpdateEntry(updatedItem));
   //  }, 3000)
  }

  function handleSubmit() {
    fetch(`http://localhost:3000/entries/${activeEntry.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...activeEntry,
      }),
    })
      .then((res) => res.json())
      .then((updatedItem) => onUpdateEntry(updatedItem));
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
          placeholder=""
        ></textarea>
        <button type="submit">Save Entry</button>
      </form>
    </div>
  );
}

export default EntryEditor;
