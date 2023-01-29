import React from "react";
import { NavLink } from "react-router-dom";

function NavBar(){
   return(
      <div>
         JOURNAL
         <NavLink to="/NewEntry">
            <button>New Entry</button>
         </NavLink>
         <NavLink to="/EntryDetail">
            <button>New Category</button>
         </NavLink>
      </div>
   )
}

export default NavBar;