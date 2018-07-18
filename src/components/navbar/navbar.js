import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = props => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink className="navbar-brand" to="/" activeClassName="active">AVA Home Improvement LLC</NavLink>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <NavLink className="nav-link" to="/about" activeClassName="active">About </NavLink>
          </li>
        </ul>
        <div className="collapse navbar-collapse" id="navbarNav">
         <ul className="navbar-nav">
          <li className="nav-item active">
            <NavLink className="nav-link" to="/gallery" activeClassName="active">Gallery </NavLink>
          </li>
        </ul> 
        </div>
      </div>
    </nav>
  )
}

export default Navbar;