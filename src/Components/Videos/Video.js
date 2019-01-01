import React, { Component } from "react";
import "./Video.css";
import Player from "../../Assets/VideoOne.png";

class Video extends Component {
  render() {
    const { instanceID, width } = this.props.data;

    return (
      <div className="Video" id={instanceID}>
        <img src={Player} width={width} />
      </div>
    );
  }
}

export default Video;
