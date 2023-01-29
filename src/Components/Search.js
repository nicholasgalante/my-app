import React, { useState } from "react";

function Search({ entries, onSearch }) {
   const [search, setSearch] = useState("")

   function handleSearch(e){
      onSearch(e.target.value)
   }

   return (
      <div>
         <form>
            <input type="text" placeholder="Search in Entries" onChange={handleSearch}></input>
         </form>
      </div>
   )
}

export default Search;