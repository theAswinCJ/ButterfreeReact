import React, { Component } from "react";
import "./VideoOne.css";
import Player from "../Assets/Player.png";

class VideoOne extends Component {
  render() {
    return (
      <div className="VideoOne">
        <img src={Player} width="70%" />
      </div>
    );
  }
}

export default VideoOne;
