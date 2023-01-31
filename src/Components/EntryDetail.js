import React from "react";
import OptionBar from './OptionBar';

function EntryDetail({entry}){
   return(
      <div>
         <form id="entryEditor">
            <input
               type="text"
               name="title"
               // onChange={handleChange}
               value={entry.title}
               placeholder="Enter a Title..."
            />
            <textarea 
               id="content"
               name="content"
               rows="15"
               cols="100"
               // onChange={handleChange}
               value={entry.content}
               placeholder="">
            </textarea>
            {/* <button type="submit" onClick={handleSubmit}>Save Entry</button> */}
         </form>
      </div>
   )
}

export default EntryDetail;