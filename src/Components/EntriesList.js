import React from "react";
import EntryCard from "./EntryCard";
import Search from "./Search";

function EntriesList({entries}){

   const displayEntryCards = entries.map(entry => {
      return <EntryCard key={entry.id} entry={entry}/>
   
   })

   return(
      <div>
         <Search/>
         {displayEntryCards}
      </div>
   )
}

export default EntriesList;