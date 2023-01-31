import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div>
      JOURNAL
      <NavLink to="/NewEntry">
        <button>New Entry</button>
      </NavLink>
      <button>New Category</button>
    </div>
  );
}

export default NavBar;
