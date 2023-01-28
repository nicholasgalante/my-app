import React from "react";
import EntryCard from "./EntryCard";

function EntriesList({entries}){

   const displayEntryCards = entries.map(entry => {
      return <EntryCard key={entry.id} entry={entry}/>
   
   })

   return(
      <div>
         EntriesList:
         {displayEntryCards}
      </div>
   )
}

export default EntriesList;