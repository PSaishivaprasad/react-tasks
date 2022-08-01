import React, { Component } from "react";
import { routes } from "../routes/routes";
import { Switch, Route } from "react-router-dom";

export default class switchData extends Component {
  render() {
    return (
      <Switch>
        {routes.map((route, index) => (
          <Route
            // key={index}
            path={route.path}
            // exact={route.exact}
            component={route.component}
          />
        ))}
      </Switch>
    );
  }
}
