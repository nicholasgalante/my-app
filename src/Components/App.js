import React, { useState, useEffect } from "react";
import { Route } from "react-router";
import NavBar from "./NavBar";
import EntriesList from "./EntriesList";
import EntryDetail from "./EntryDetail";
import EntryEditor from "./EntryEditor";

function App() {
  const [entries, setEntries] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [activeEntry, setActiveEntry] = useState({
      id: "",
      date: "",
      title: "",
      content: "",
  });

  useEffect(() => {
    fetch("http://localhost:3000/entries")
      .then((res) => res.json())
      .then((data) => setEntries(data));
  }, []);

  function onAddEntry(newEntry) {
    setEntries([...entries, newEntry]);
  }

  function onSearch(value) {
    setSearchValue(value);
  }

  function onUpdateEntry(updatedEntry) {
    console.log("UPDATEDENTRY:", updatedEntry)
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

  const displayEntryDetails = entries.map((entry) => {
    return (
      <Route exact path={"/Entry/" + entry.id}>
        <EntryDetail entry={entry} />
      </Route>
    );
  });

  function handleEntrySelect(entry) {
    setActiveEntry(entry);
  }

  return (
    <div>
      <NavBar />
      <EntriesList
        entries={displayedEntries}
        onSearch={onSearch}
        handleEntrySelect={handleEntrySelect}
      />
      <EntryEditor
        activeEntry={activeEntry}
        onAddEntry={onAddEntry}
        onUpdateEntry={onUpdateEntry}
      />

      {/* <NavBar />
      <EntriesList entries={displayedEntries} onSearch={onSearch} />
      <Switch>
        <Route exact path="/NewEntry">
          <EntryEditor onAddEntry={onAddEntry} />
        </Route>
        {displayEntryDetails}
      </Switch> */}
    </div>
  );
}

export default App;
