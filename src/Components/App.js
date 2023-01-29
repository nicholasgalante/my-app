import React, { useState, useEffect } from "react";
import '../App.css';
import NavBar from './NavBar';
import EntriesList from './EntriesList';
import EntryDetail from './EntryDetail';
import EntryEditor from "./EntryEditor";


function App() {
const [entries, setEntries] = useState([])

useEffect(()=>{
  fetch("http://localhost:3000/entries")
    .then(res => res.json())
    .then(data => setEntries(data))
},[])

  return (
    <div>
      <NavBar />
      <EntriesList entries={entries}/>
      <EntryEditor/>
      <EntryDetail />
    </div>
  );
}

export default App;
