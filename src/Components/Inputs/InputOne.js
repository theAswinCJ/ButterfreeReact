import React, { Component } from "react";
import "./InputOne.css";

class InputOne extends Component {
  render() {
    const { instanceID, image, width } = this.props.data;

    return (
      <div className="InputOne" id={instanceID}>
        <img src={require("../../Assets/" + image)} width={width} />
      </div>
    );
  }
}

export default InputOne;
