import React, { useState, useEffect } from "react";
import { Route, Switch, useHistory, useParams } from "react-router-dom";
import EntryContainer from "./EntryContainer";
import EntryEditor from "./EntryEditor";
import EntryCreator from "./EntryCreator";

function App() {
  const [entries, setEntries] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/entries")
      .then((res) => res.json())
      .then((data) => setEntries(data));
  }, []);

  const history = useHistory();

  function createNewEntry() {
    history.push(`/entries/new`);
  }

  function onAddEntry(newEntry) {
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
    setEntries(updatedEntries);
    console.log(entries);
  }

  function onDelete(deletedEntry) {
    const updatedEntries = entries.filter((entry) => {
      return entry.id !== deletedEntry.id;
    });
    setEntries(updatedEntries);
    history.push(``);
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

  return (
    <div className="App">
      <Route path="/">
        <EntryContainer
          createNewEntry={createNewEntry}
          entries={displayedEntries}
          onSearch={onSearch}
          onDelete={onDelete}
        />
      </Route>
      <Switch>
        <Route path="/entries/new">
          <EntryCreator onAddEntry={onAddEntry} />
        </Route>
        <Route path="/entries/:id">
          <EntryEditor onUpdateEntry={onUpdateEntry} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
