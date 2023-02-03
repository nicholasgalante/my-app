import React, { useState, useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import NavBar from "./NavBar";
import EntriesList from "./EntriesList";
import EntryEditor from "./EntryEditor";

function App() {
  const [entries, setEntries] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [patchTimer, setPatchTimer] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/entries")
      .then((res) => res.json())
      .then((data) => setEntries(data));
  }, []);

  const history = useHistory();

  function onAddEntry(newEntry) {
    console.log(newEntry);
    setEntries([...entries, newEntry]);
    history.push(`/entries/${newEntry.id}`);
  }

  function onUpdateEntry(updatedEntry) {
    const updatedEntries = entries.map((entry) => {
      if (entry.id === updatedEntry.id) {
        return updatedEntry;
      }
      return entry;
    });
    clearTimeout(patchTimer);
    const newTimer = setTimeout(() => {
      console.log("PATCHING!");
      fetch(`http://localhost:3000/entries/${updatedEntry.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...updatedEntry,
        }),
      }).then((res) => res.json());
    }, 1000);
    setPatchTimer(newTimer);
    setEntries(updatedEntries);
  }

  function onDelete(deletedEntry) {
    const updatedEntries = entries.filter((entry) => {
      return entry.id !== deletedEntry.id;
    });
    setEntries(updatedEntries);
  }

  function onSearch(value) {
    setSearchValue(value);
  }

  const displayedEntries = entries.filter((entry) => {
    return (
      entry.content.toLowerCase().includes(searchValue.toLowerCase()) ||
      entry.title.toLowerCase().includes(searchValue.toLowerCase())
    );
  });

  const displayEntryEditors = entries.map((entry) => {
    return (
      <Route key={entry.id} path={`/entries/${entry.id}`}>
        <EntryEditor activeEntry={entry} onUpdateEntry={onUpdateEntry} />
      </Route>
    );
  });

  return (
    <div>
      <NavBar onAddEntry={onAddEntry} />
      <Route path="/">
        <EntriesList
          entries={displayedEntries}
          onSearch={onSearch}
          onDelete={onDelete}
        />
      </Route>
      <Switch>{displayEntryEditors}</Switch>
    </div>
  );
}

export default App;
