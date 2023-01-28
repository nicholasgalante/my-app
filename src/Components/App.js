import React, { useState } from "react";
import '../App.css';
import NavBar from './NavBar';
import EntriesList from './EntriesList';
import EntryDetail from './EntryDetail';


function App() {
const [entries, setEntries] = useState([])



console.log

  return (
    <div>
      <NavBar />
      <EntriesList />
      <EntryDetail />
    </div>
  );
}

export default App;
