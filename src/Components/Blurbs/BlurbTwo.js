import React, { Component } from "react";
import "./BlurbTwo.css";

class BlurbTwo extends Component {
  render() {
    const { instanceID, image, width, title, desc } = this.props.data;

    return (
      <div className="BlurbTwo" id={instanceID}>
        <img src={require("../../Assets/" + image)} width={width} />
        <h2>{title}</h2>
        <p>{desc}</p>
      </div>
    );
  }
}

export default BlurbTwo;
