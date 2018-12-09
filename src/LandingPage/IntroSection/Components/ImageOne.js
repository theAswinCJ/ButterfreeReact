import React, { Component } from "react";
import "./ImageOne.css";
import MBP from "../Assets/MBP.png";

class ImageOne extends Component {
  render() {
    return (
      <div className="ImageOne">
        <img src={MBP} width="100%" />
      </div>
    );
  }
}

export default ImageOne;
