import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
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
    console.log("UPDATEDENTRY:", updatedEntry);
    const updatedEntries = entries.map((entry) => {
      if (entry.id === updatedEntry.id) {
        return updatedEntry;
      }
      return entry;
    });
    console.log(updatedEntries);
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

  return (
    <div>
      <NavBar addNewEntry={addNewEntry} />
      <Route path="/">
        <EntriesList entries={displayedEntries} onSearch={onSearch} />
      </Route>
      <Route path="/Entry/:id">
        <EntryEditor onUpdateEntry={onUpdateEntry} />
      </Route>
    </div>
  );
}

export default App;
