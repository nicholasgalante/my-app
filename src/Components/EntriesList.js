import React from "react";
import EntryCard from "./EntryCard";
import Search from "./Search";
import {NavLink} from "react-router-dom";

function EntriesList({ entries }) {

   const displayEntryCards = entries.map(entry => {
      return (
         <NavLink to={'/EntryDetail/'+entry.id}>
            <EntryCard key={entry.id} entry={entry} />
         </NavLink>
      )
   })

   return (
      <div>
         <Search />
         {displayEntryCards}
      </div>
   )
}

export default EntriesList;

