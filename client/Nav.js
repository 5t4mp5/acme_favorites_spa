import React from "react";
import { Link } from "react-router-dom";

const Nav = props => {
  return (
    <div id="navbar" className="row">
      <Link to="/users">Users</Link>
      <Link to="/things">Things</Link>
    </div>
  );
};

export default Nav;