import React, { useState } from "react";
import { NavLink, withRouter } from "react-router-dom";

const Navbar = ({ history }) => {
  //   const [isOpen, setOpen] = useState(false);

  return (
    <nav
      className="navbar is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div>
          <div className="navbar-start">
            <NavLink
              className="navbar-item"
              activeClassName="is-active"
              to="/"
              exact
            >
              Home
            </NavLink>

            <NavLink
              className="navbar-item"
              activeClassName="is-active"
              to="/about"
            >
              About
            </NavLink>

            <NavLink
              className="navbar-item"
              activeClassName="is-active"
              to="/profile/Vijit"
            >
              Profile
            </NavLink>
            <NavLink
              className="navbar-item"
              activeClassName="is-active"
              to="/testing"
            >
              testing
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default withRouter(Navbar);
