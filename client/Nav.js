import React from "react";
import { Link } from "react-router-dom";

const Nav = ({ location, users, things }) => {
  const links = ["/users", "/things"];
  const linkRefs = {
    "/users": users,
    "/things": things
  };
  return (
    <ul id="nav" className="nav nav-pills">
      {links.map(link => {
        return (
          <li key={link} className="nav-item">
            <Link className={`nav-link ${location.pathname.startsWith(link) ? "active" : ""}`} to={link}>
              {link.slice(1)} {linkRefs[link].length}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Nav;
