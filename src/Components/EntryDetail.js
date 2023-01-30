import React from "react";
import OptionBar from './OptionBar';

function EntryDetail({entry}){
   return(
      <div>
         {entry.title}
         {entry.content}
         <OptionBar/> 
      </div>
   )
}

export default EntryDetail;