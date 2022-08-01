import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import SideBar from "./components/sideBar";

import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Testing from "./pages/testing";
import SwitchData from "./components/switchData";
import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div style={{ display: "flex" }}>
        <SideBar />
        <div className="container mt-2" style={{ marginTop: 40 }}>
          {/* <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/testing">
              <Testing />
            </Route>
          </Switch> */}
          <SwitchData />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
