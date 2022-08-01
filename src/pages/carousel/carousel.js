import React, { Component } from "react";
import Carousel from "react-elastic-carousel";
import "./carousel.css";

const breakPoints = [
  // { width: 1, itemsToShow: 1 },
  // { width: 550, itemsToShow: 2 },
  // { width: 768, itemsToShow: 3 },
  { itemsToShow: 4 },
];
export default class carousel extends Component {
  state = {
    items: [
      { id: 1, title: "item #1" },
      { id: 2, title: "item #2" },
      { id: 3, title: "item #3" },
      { id: 4, title: "item #4" },
      { id: 5, title: "item #5" },
      { id: 6, title: "item #6" },
      { id: 7, title: "item #7" },
      { id: 8, title: "item #8" },
      { id: 9, title: "item #9" },
      { id: 10, title: "item #10" },
    ],
  };
  handleGradeData(id) {
    console.log("grade " + (id + 1) + "clicked");
  }
  render() {
    return (
      <>
        <div className="App">
          <Carousel breakPoints={breakPoints}>
            {this.state.items.map((e, i) => (
              <div
                onClick={() => {
                  this.handleGradeData(i);
                }}
                className="grade-box"
              >
                {e.title}
              </div>
            ))}
          </Carousel>
        </div>
      </>
    );
  }
}
