import React, { Component } from "react";

import ReactQuill from "react-quill";
import QuillToolbar from "./toolbar";
import "react-quill/dist/quill.snow.css";
import "./toolbar.css";
const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "align",
  "strike",
  "script",
  "blockquote",
  "background",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "color",
  "code-block",
];

export default class Editor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: "",
      list: [
        {
          id: "t1",
          name: "firsy",
        },
        {
          id: "t2",
          name: "sec",
        },
        {
          id: "t3",
          name: "",
        },
      ],
    };
    this.handleData = this.handleData.bind(this);
  }
  handleChange(e, i) {
    let prevState = this.state;
    prevState.list[i].name = e;
    this.updateState(prevState);
    console.log(e);
  }
  updateState(prevState) {
    this.setState((state) => {
      state = prevState;
      return state;
    });
  }
  handleData() {
    console.log(this.state.list);
  }
  render() {
    return (
      <div className="text-editor">
        {this.state.list.map((e, index) => (
          <div>
            <div id={e.id}>
              <span className="ql-formats">
                <select className="ql-font" defaultValue="arial">
                  <option value="arial">Arial</option>
                  <option value="comic-sans">Comic Sans</option>
                  <option value="courier-new">Courier New</option>
                  <option value="georgia">Georgia</option>
                  <option value="helvetica">Helvetica</option>
                  <option value="lucida">Lucida</option>
                </select>
                <select className="ql-size" defaultValue="medium">
                  <option value="extra-small">Size 1</option>
                  <option value="small">Size 2</option>
                  <option value="medium">Size 3</option>
                  <option value="large">Size 4</option>
                </select>
                <select className="ql-header" defaultValue="3">
                  <option value="1">Heading</option>
                  <option value="2">Subheading</option>
                  <option value="3">Normal</option>
                </select>
              </span>
              <span className="ql-formats">
                <button className="ql-bold" />
                <button className="ql-italic" />
                <button className="ql-underline" />
                <button className="ql-strike" />
              </span>
              <span className="ql-formats">
                <button className="ql-list" value="ordered" />
                <button className="ql-list" value="bullet" />
                <button className="ql-indent" value="-1" />
                <button className="ql-indent" value="+1" />
              </span>
              <span className="ql-formats">
                <button className="ql-script" value="super" />
                <button className="ql-script" value="sub" />
                <button className="ql-blockquote" />
                <button className="ql-direction" />
              </span>
              <span className="ql-formats">
                <select className="ql-align" />
                <select className="ql-color" />
                <select className="ql-background" />
              </span>
              <span className="ql-formats">
                <button className="ql-link" />
                <button className="ql-image" />
                <button className="ql-video" />
              </span>
              <span className="ql-formats">
                <button className="ql-formula" />
                <button className="ql-code-block" />
                <button className="ql-clean" />
              </span>
            </div>
            <ReactQuill
              theme="snow"
              value={e.name}
              onChange={(ele) => {
                this.handleChange(ele, index);
              }}
              placeholder={"Write something awesome..."}
              modules={{
                toolbar: {
                  container: "#" + e.id,
                },
                history: {
                  delay: 500,
                  maxStack: 100,
                  userOnly: true,
                },
              }}
              formats={formats}
            />
          </div>
        ))}

        <button onClick={this.handleData}>click here</button>
      </div>
    );
  }
}
