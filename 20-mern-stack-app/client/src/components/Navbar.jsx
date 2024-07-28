import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <header>
        <nav>
          <NavLink to="/">
            <h2>Employ.io</h2>
          </NavLink>

          <NavLink to="/create" className="btn">
            Create employee
          </NavLink>
        </nav>
      </header>
    </>
  );
}
