import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";

class Child extends Component {
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
      </div>
    );
  }
}
export default withRouter(Child);
