import React from "react";
import { NavLink } from "react-router-dom";

function NavBar({addNewEntry}) {
  return (
    <div>
      JOURNAL
      <button onClick={addNewEntry}>New Entry</button>
      <button>New Category</button>
    </div>
  );
}

export default NavBar;
