import React from "react";
import { Link } from "react-router-dom";

const Nav = ({ users, things }) => {
  return (
    <ul id="nav" className="nav nav-pills">
      <li className="nav-item"><Link className="nav-link" to="/users">Users {users.length}</Link></li>
      <li className="nav-item"><Link className="nav-link" to="/things">Things {things.length}</Link></li>
    </ul>
  );
};

export default Nav;