import React, { Component } from "react";
import "./BlurbThree.css";

class BlurbThree extends Component {
  render() {
    const { instanceID, tagone, tagtwo, tagthree } = this.props.data;

    return (
      <div className="BlurbThree" id={instanceID}>
        <p>{tagone}</p>
        <p>{tagtwo}</p>
        <p>{tagthree}</p>
      </div>
    );
  }
}

export default BlurbThree;
