import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";

class tesing1 extends Component {
  render() {
    return (
      <div>
        <NavLink
          className="navbar-item"
          activeClassName="is-active"
          to="/testing"
        >
          tesing2
        </NavLink>
        <NavLink
          className="navbar-item"
          activeClassName="is-active"
          to="/profile"
        >
          testing3
        </NavLink>
        <NavLink
          className="navbar-item"
          activeClassName="is-active"
          to="/editor"
        >
          Editor
        </NavLink>
        <NavLink
          className="navbar-item"
          activeClassName="is-active"
          to="/toast"
        >
          Toast
        </NavLink>
        <NavLink
          className="navbar-item"
          activeClassName="is-active"
          to="/carousel"
        >
          carousel
        </NavLink>
        <NavLink
          className="navbar-item"
          activeClassName="is-active"
          to="/leftMenu"
        >
          Left Menu
        </NavLink>
        <NavLink
          className="navbar-item"
          activeClassName="is-active"
          to="/formValidation"
        >
          Form validation
        </NavLink>
      </div>
    );
  }
}
export default withRouter(tesing1);
