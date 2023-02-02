import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import EntriesList from "./EntriesList";
import EntryEditor from "./EntryEditor";

function App() {
  const [entries, setEntries] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/entries")
      .then((res) => res.json())
      .then((data) => setEntries(data));
  }, []);

  function onSearch(value) {
    setSearchValue(value);
  }

  function onUpdateEntry(updatedEntry) {
    const updatedEntries = entries.map((entry) => {
      if (entry.id === updatedEntry.id) {
        return updatedEntry;
      }
      return entry;
    });

    setTimeout(() => {
      console.log("FETCHING!");
      fetch(`http://localhost:3000/entries/${updatedEntry.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...updatedEntry,
        }),
      }).then((res) => res.json());
    }, 0);
    setEntries(updatedEntries);
  }

  const displayedEntries = entries.filter((entry) => {
    return (
      entry.content.toLowerCase().includes(searchValue.toLowerCase()) ||
      entry.title.toLowerCase().includes(searchValue.toLowerCase())
    );
  });

  function addNewEntry() {
    console.log("entry added");
  }

  const displayEntryEditors = entries.map((entry) => {
    return (
      <Route key={entry.id} path={`/entries/${entry.id}`}>
        <EntryEditor activeEntry={entry} onUpdateEntry={onUpdateEntry} />
      </Route>
    );
  });

  return (
    <div>
      <NavBar addNewEntry={addNewEntry} />
      <Route path="/">
        <EntriesList entries={displayedEntries} onSearch={onSearch} />
      </Route>
      <Switch>{displayEntryEditors}</Switch>
      {/* <Route path="/entries/:id">
        <EntryEditor onUpdateEntry={onUpdateEntry} />
      </Route> */}
    </div>
  );
}

export default App;
