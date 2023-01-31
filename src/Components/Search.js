import React from "react";

function Search({ onSearch }) {
  function handleSearch(e) {
    onSearch(e.target.value);
  }

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Search in Entries"
          onChange={handleSearch}
        ></input>
      </form>
    </div>
  );
}

export default Search;
