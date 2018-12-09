import React, { Component } from "react";
import "./ImageTwo.css";
import iPad from "../Assets/iPad.png";

class ImageTwo extends Component {
  render() {
    return (
      <div className="ImageTwo">
        <img src={iPad} width="100%" />
      </div>
    );
  }
}

export default ImageTwo;
