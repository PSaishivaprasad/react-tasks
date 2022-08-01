import React, { Component } from "react";
import Child from "./child";
import toastService from "../util/toaster/toastService";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

export default class Tost extends Component {
  testToast() {
    toastService.notifyError("testing");
  }
  render() {
    return (
      <div>
        <ToastContainer />
        testing
        <button onClick={this.testToast}>click for toast</button>
        <Child />
      </div>
    );
  }
}
