import React, { Component } from "react";

import Home from "../pages/Home";
import Profile from "../pages/Profile";
import About from "../pages/About";
import Editor from "../components/TextEditor/Editor";
import Tost from "../pages/testing";

import Carosel from "../pages/carousel/carousel";
import LeftMenu from "../pages/left-menu/left-menu";
import FormValidation from "../pages/formValidation/formValidaton";

export const routes = [
  { path: "/testing", component: () => <Home /> },
  { path: "/profile", component: (props) => <Profile /> },
  { path: "/about", component: () => <About /> },

  { path: "/editor", component: () => <Editor /> },
  { path: "/toast", component: () => <Tost /> },
  { path: "/carousel", component: () => <Carosel /> },
  { path: "/leftMenu", component: () => <LeftMenu /> },
  { path: "/formValidation", component: () => <FormValidation /> },
];
