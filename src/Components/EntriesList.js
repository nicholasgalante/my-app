import React from "react";
import EntryCard from "./EntryCard";
import Search from "./Search";
import {NavLink} from "react-router-dom";

function EntriesList({ entries, onSearch }) {

   function handleClick(entry){
      console.log(entry)
   }

   const displayEntryCards = entries.map(entry => {
      return (
         <NavLink to={'/EntryDetail/'+entry.id} onClick={handleClick}>
            <EntryCard key={entry.id} entry={entry} />
         </NavLink>
      )
   })

   return (
      <div>
         <Search entries={entries} onSearch={onSearch}/>
         {displayEntryCards}
      </div>
   )
}

export default EntriesList;

